export const ProblemSection = () => (
  <section className="bg-black py-24 md:py-28">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

      <div className="border border-zinc-800 p-6 rounded-xl transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <h3 className="text-white">Admin consumes time</h3>
        <p className="mt-3 text-sm text-zinc-400">
          Intake, follow-ups, and tracking reduce billable hours.
        </p>
      </div>

      <div className="border border-zinc-800 p-6 rounded-xl transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <h3 className="text-white">Work is fragmented</h3>
        <p className="mt-3 text-sm text-zinc-400">
          Multiple tools with no system across clients.
        </p>
      </div>

      <div className="border border-zinc-800 p-6 rounded-xl transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <h3 className="text-white">Growth stalls</h3>
        <p className="mt-3 text-sm text-zinc-400">
          Firms hit capacity before demand.
        </p>
      </div>

    </div>
  </section>
);
