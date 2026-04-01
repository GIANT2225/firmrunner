export const AgentsSection = () => {
  const agents = ["Intake", "Documents", "Deadlines", "Billing", "Reports"];
  
  return (
    <section className="bg-black py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {agents.map((agent) => (
          <div className="border border-zinc-800 p-6 rounded-xl transition-all duration-300 ease-out hover:translate-y-[-2px]" key={agent}>
            <h3 className="text-white">{agent} Agent</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Runs this workflow automatically across all clients.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export const WhyNowSection = AgentsSection;
