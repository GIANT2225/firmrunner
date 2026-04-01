import { CheckCircle2, Shield, Database } from "lucide-react";

export const TrustSection = () => (
  <section className="section">
    <div className="container-max">
      <h2 className="text-4xl font-bold mb-16 text-center">How we are building this</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="flex gap-6">
          <CheckCircle2 className="w-12 h-12 flex-shrink-0 text-brand-white" />
          <div>
            <p className="text-brand-white font-medium">Firms need control over their work.</p>
            <p className="text-brand-gray-muted mt-2">Actions can be reviewed when needed</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Shield className="w-12 h-12 flex-shrink-0 text-brand-white" />
          <div>
            <p className="text-brand-white font-medium">Workflows are designed to be predictable</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Database className="w-12 h-12 flex-shrink-0 text-brand-white" />
          <div>
            <p className="text-brand-white font-medium">Reliability is treated as a core requirement</p>
          </div>
        </div>
      </div>
      <div className="mt-24 text-center">
        <p className="text-sm text-brand-gray-muted">
          Built by GIANT, focused on operational systems for professional firms.
        </p>
      </div>
    </div>
  </section>
);
