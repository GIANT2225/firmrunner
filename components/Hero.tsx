import { Lock } from "lucide-react";
import { HeroCaptureForm } from "./HeroCaptureForm";

export const Hero = () => {
  return (
  <section className="bg-black pt-40 pb-24 border-b border-zinc-900">
    <div className="max-w-6xl mx-auto px-6 text-center">

      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto text-white">
        Stop chasing clients. Start closing books.
      </h1>

      <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
        FirmRunner automates client intake, engagement letters, document collection, deadline reminders, and billing follow-ups for accounting and bookkeeping firms with 2–20 staff.
      </p>

      <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
        <span>10 questions</span>
        <span>$0 setup</span>
        <span>22–43 hrs/month</span>
        <span>5 agents</span>
      </div>

      <HeroCaptureForm />

      <p className="text-xs text-zinc-500 text-center mt-2">
        Built in public · Pre-seed · Launching Q3 2026
      </p>

      <p className="mt-2 text-xs text-zinc-500 flex items-center gap-1 justify-center">
        <Lock size={12} />
        <span>Client data is encrypted and stored in isolated instances. We never train AI on your firm's data.</span>
      </p>

      <p className="mt-3 text-xs text-zinc-500">
        Currently in development. Limited onboarding.
      </p>

    </div>
  </section>
  );
};
