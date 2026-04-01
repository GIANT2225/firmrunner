import { Link } from "react-router-dom";

export const Hero = () => (
  <section className="bg-black pt-40 pb-24 border-b border-zinc-900">
    <div className="max-w-6xl mx-auto px-6 text-center">

      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto text-white">
        A firm answers 10 questions. The system runs everything else.
      </h1>

      <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
        Five AI agents handle intake, documents, deadlines, billing, and reporting.
      </p>

      <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500">
        <span>10 questions</span>
        <span>$0 setup</span>
        <span>22–43 hrs/month</span>
        <span>5 agents</span>
      </div>

      <Link to="/apply" className="mt-10 inline-block bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 ease-out hover:translate-y-[-2px]">
        Request early access
      </Link>

      <p className="mt-3 text-xs text-zinc-500">
        Currently in development. Limited onboarding.
      </p>

    </div>
  </section>
);
