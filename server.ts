import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Supabase & Resend setup
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";
const resendApiKey = process.env.RESEND_API_KEY || "";

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// API Routes
app.post("/api/waitlist", async (req, res) => {
  const { name, email, firm_name, firm_size, clients } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // 1. Store in Supabase
    if (supabase) {
      const { error: dbError } = await supabase
        .from("waitlist")
        .insert([{ name, email, firm_name, firm_size, clients, created_at: new Date().toISOString() }]);

      if (dbError) throw dbError;
    } else {
      console.warn("Supabase not configured. Skipping database insertion.");
    }

    // 2. Send confirmation email via Resend
    if (resend) {
      await resend.emails.send({
        from: "FirmRunner <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to the FirmRunner Waitlist",
        html: `<p>Hi ${name},</p><p>Thanks for joining the FirmRunner waitlist. We'll be in touch soon!</p>`,
      });
    } else {
      console.warn("Resend not configured. Skipping email sending.");
    }

    res.status(200).json({ message: "Successfully joined waitlist" });
  } catch (error: any) {
    console.error("Waitlist error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

// Vite middleware for development
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

setupVite();
