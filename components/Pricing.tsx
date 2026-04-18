import { Link } from "react-router-dom";

export const Pricing = () => (
  <section id="pricing" className="bg-black border-t border-zinc-900">
    <div className="max-w-5xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center">
        <p className="text-xs text-zinc-500 tracking-widest uppercase">
          Pricing
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
          Replaces 20–40 hours of admin work each month
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl mx-auto">
          Built for small accounting firms. One system that runs intake, documents, deadlines, billing, and reporting.
        </p>
      </div>

      {/* Card */}
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-xl bg-[#111113] border border-zinc-800 rounded-2xl p-10">

          {/* Plan Header */}
          <div>
            <p className="text-sm text-zinc-500">
              Founder Access
            </p>

            <h3 className="mt-2 text-4xl font-semibold text-white">
              $199
              <span className="text-lg text-zinc-400"> / month</span>
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              Limited to the first 10 firms. Pricing locked in.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-zinc-800" />

          {/* Features */}
          <div className="mt-8 space-y-4 text-sm text-zinc-300">
            <p>All five core agents included</p>
            <p>Handles intake, documents, deadlines, billing, reporting</p>
            <p>Up to 150 active clients</p>
            <p>No setup or migration required</p>
            <p>Direct support during onboarding</p>
          </div>

          {/* ROI Block */}
          <div className="mt-8 p-4 bg-black border border-zinc-800 rounded-xl text-sm text-zinc-400">
            Equivalent to less than $5/hour of admin work replaced
          </div>

          {/* Target Audience */}
          <p className="mt-6 text-sm text-zinc-400">
            Designed for US accounting and CPA firms with 2–20 staff
          </p>

          {/* CTA */}
          <Link to="/apply" className="mt-10 w-full bg-white text-black py-3 rounded-lg text-sm font-medium hover:opacity-90 transition block text-center">
            Request early access
          </Link>

          {/* Trust Line */}
          <p className="mt-4 text-xs text-zinc-500 text-center">
            No setup. No contracts. Cancel anytime.
          </p>

        </div>
      </div>

    </div>
  </section>
);
