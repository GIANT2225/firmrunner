export const PositioningSection = () => (
  <section className="bg-[#111113] py-24 md:py-28 border-y border-zinc-900">
    <div className="max-w-4xl mx-auto px-6">

      <h2 className="text-3xl font-semibold text-center text-white">
        Systems replace tools
      </h2>

      <p className="mt-6 text-zinc-400 text-center">
        TaxDome is a CRM. Zapier requires manual setup. FirmRunner is the only system that runs your firm's operations automatically.
      </p>

      <div className="mt-10 border border-zinc-800 rounded-xl overflow-hidden text-sm">

        <div className="grid grid-cols-2 border-b border-zinc-800">
          <div className="p-4 text-zinc-400">Manual tools</div>
          <div className="p-4 text-white">FirmRunner</div>
        </div>

        <div className="grid grid-cols-2 border-b border-zinc-800">
          <div className="p-4 text-zinc-400">Setup required</div>
          <div className="p-4 text-white">Configured automatically</div>
        </div>

        <div className="grid grid-cols-2">
          <div className="p-4 text-zinc-400">Task-based</div>
          <div className="p-4 text-white">System-based</div>
        </div>

      </div>

    </div>
  </section>
);

export const ProgressSection = PositioningSection;
