const agents = [
  {
    heading: "New clients onboard themselves",
    description:
      "Intake forms, engagement letters, and e-signature requests go out automatically on day one. No manual setup per client.",
  },
  {
    heading: "Engagement letters out in minutes",
    description:
      "AI generates and sends a compliant engagement letter as soon as a new client is added. Signed and filed without your team touching it.",
  },
  {
    heading: "Clients meet deadlines without you chasing them",
    description:
      "Automated reminders go out at the right time. Your team stops being the one who follows up.",
  },
  {
    heading: "Documents arrive without the back-and-forth",
    description:
      "Clients get clear requests with deadlines. Follow-ups happen automatically until documents are received.",
  },
  {
    heading: "Outstanding invoices follow up themselves",
    description:
      "Unpaid invoices get automated follow-ups at 7, 14, and 30 days. Collected without the awkward calls.",
  },
];

export const AgentsSection = () => {
  return (
    <section className="bg-black py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {agents.map((agent) => (
          <div className="border border-zinc-800 p-6 rounded-xl transition-all duration-300 ease-out hover:translate-y-[-2px]" key={agent.heading}>
            <h3 className="text-white">{agent.heading}</h3>
            <p className="mt-2 text-sm text-zinc-400">
              {agent.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export const WhyNowSection = AgentsSection;
