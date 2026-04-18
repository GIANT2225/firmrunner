import { Check } from "lucide-react";

export const FirmFitSection = () => (
  <section className="bg-[#111113] py-24 md:py-28 border-y border-zinc-900">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-2xl font-semibold text-center text-white mb-2">
        Built for firms like yours
      </h2>
      <p className="text-center text-zinc-400 mb-8">
        FirmRunner is for US-based accounting, CPA, bookkeeping, and tax
        firms with 2–20 staff.
      </p>
      <ul className="space-y-3">
        {[
          "You onboard new clients manually via email",
          "Your team spends hours chasing document uploads",
          "Engagement letters go out late because someone forgot",
          "Billing follow-ups feel awkward and inconsistent",
          "You want AI that works for a 7-person firm, not a 700-person firm",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
