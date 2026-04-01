export const HowItWorks = () => (
  <section id="how-it-works" className="bg-black py-24 md:py-28">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

      <div className="transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <p className="text-zinc-500 text-sm">01</p>
        <h3 className="mt-2 text-white">Answer 10 questions</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Define your firm setup and workflows.
        </p>
      </div>

      <div className="transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <p className="text-zinc-500 text-sm">02</p>
        <h3 className="mt-2 text-white">System configures</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Agents are configured automatically.
        </p>
      </div>

      <div className="transition-all duration-300 ease-out hover:translate-y-[-2px]">
        <p className="text-zinc-500 text-sm">03</p>
        <h3 className="mt-2 text-white">Runs daily operations</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Workflows execute without manual input.
        </p>
      </div>

    </div>
  </section>
);

export const SolutionSection = HowItWorks;
