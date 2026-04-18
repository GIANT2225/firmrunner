import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export const HeroCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [firmName, setFirmName] = useState("");
  const [firmSize, setFirmSize] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firm_name: firmName, firm_size: firmSize }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 max-w-md mx-auto text-center">
        <p className="text-green-500 font-medium text-sm">
          You're on the list. We'll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@firm.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
      />
      <input
        type="text"
        placeholder="Your firm name (e.g. Johnson CPA)"
        value={firmName}
        onChange={e => setFirmName(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
      />
      <select
        value={firmSize}
        onChange={e => setFirmSize(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:outline-none focus:border-zinc-600 transition-colors appearance-none"
      >
        <option value="">Firm size (optional)</option>
        <option value="1-3 staff">1–3 staff</option>
        <option value="4-10 staff">4–10 staff</option>
        <option value="11-20 staff">11–20 staff</option>
        <option value="20+ staff">20+ staff</option>
      </select>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={!email || status === "submitting"}
        className="w-full bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 ease-out hover:translate-y-[-2px] disabled:opacity-50"
      >
        {status === "submitting" ? "Requesting..." : "Request Early Access for My Firm"}
      </button>
      <p className="text-xs text-zinc-500 text-center">
        No credit card required. We onboard 10 firms per month.
      </p>
    </form>
  );
};
