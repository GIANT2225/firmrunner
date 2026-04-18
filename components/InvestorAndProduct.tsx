import { Link } from "react-router-dom";
import { Logo } from "./Navbar";

export const InvestorPage = () => (
  <div className="min-h-screen bg-brand-black text-brand-white">
    <nav className="border-b border-brand-border">
      <div className="container-max flex justify-between items-center h-[72px]">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <Link to="/" className="text-sm text-brand-gray-muted hover:text-brand-white transition-colors">
          ← Back to Home
        </Link>
      </div>
    </nav>

    <main className="py-20">
      <div className="container-max max-w-4xl">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-muted">For Investors</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Investing in FirmRunner</h1>
          <p className="text-xl text-brand-gray-muted">
            We are building the operations layer for professional services firms, starting with accounting.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-6">The Opportunity</h2>
            <div className="space-y-4 text-brand-gray-muted">
              <p>
                There are over 100,000 accounting firms in the US alone. Most have 2–20 staff.
                They spend 30-40% of their time on non-billable administrative work.
              </p>
              <p>
                That is millions of hours per year spent on tasks that AI can now handle reliably: 
                document collection, deadline tracking, client follow-ups, invoicing.
              </p>
              <p>
                The market is ready. Firm owners are actively looking for solutions. 
                The technology is finally capable. We are building the vertical AI platform to capture this market.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Why GIANT</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-surface">
                <h3 className="font-bold mb-3">Vertical Focus</h3>
                <p className="text-sm text-brand-gray-muted">
                  We are not building generic tools. FirmRunner understands accounting workflows specifically. 
                  This means faster adoption and higher retention.
                </p>
              </div>
              <div className="card-surface">
                <h3 className="font-bold mb-3">Right Timing</h3>
                <p className="text-sm text-brand-gray-muted">
                  LLMs crossed the reliability threshold in 2024-2025. We are building now, 
                  while the market is still underserved and before larger players move in.
                </p>
              </div>
              <div className="card-surface">
                <h3 className="font-bold mb-3">Founder-Market Fit</h3>
                <p className="text-sm text-brand-gray-muted">
                  Our team has spent months embedded with accounting firms, understanding their real workflows 
                  and pain points firsthand.
                </p>
              </div>
              <div className="card-surface">
                <h3 className="font-bold mb-3">Capital Efficient</h3>
                <p className="text-sm text-brand-gray-muted">
                  We are building with AI-native development practices. Small team, fast iteration, 
                  focused on revenue from day one.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Current Stage</h2>
            <div className="card-surface">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Pre-seed stage, actively building</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Early access waitlist growing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>Core product in development</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-brand-border" />
                  <span className="text-brand-gray-muted">First paid customers (Q2 2026)</span>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-brand-border">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-brand-gray-muted mb-6">
              We are currently raising a pre-seed round. If you are interested in learning more, 
              we would love to talk.
            </p>
            <a 
              href="mailto:giantlabs25@gmail.com" 
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>
    </main>
  </div>
);
