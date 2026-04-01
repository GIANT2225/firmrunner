import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

interface LeadFormData {
  firmName: string;
  staff: string;
  clients: string;
  services: string[];
  pain: string[];
  method: string;
  hours: string;
  tools: string[];
  urgency: string;
  name: string;
  email: string;
  phone: string;
  country: string;
}

export const WaitlistForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState<LeadFormData>({
    firmName: "",
    staff: "",
    clients: "",
    services: [],
    pain: [],
    method: "",
    hours: "",
    tools: [],
    urgency: "",
    name: "",
    email: "",
    phone: "",
    country: "",
  });
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPages = 4;

  const goTo = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const toggleOption = (group: keyof LeadFormData, val: string, isMulti: boolean = false, disqualify: boolean = false) => {
    if (disqualify) {
      setIsDisqualified(true);
      return;
    }

    setFormData(prev => {
      const currentVal = prev[group];
      if (isMulti && Array.isArray(currentVal)) {
        const newVal = currentVal.includes(val)
          ? currentVal.filter(v => v !== val)
          : [...currentVal, val];
        return { ...prev, [group]: newVal };
      } else {
        return { ...prev, [group]: val };
      }
    });
  };

  const calcTotalScore = () => {
    let total = 0;
    const painScores: Record<string, number> = { docs: 5, invoices: 5, deadlines: 5, intake: 5, reports: 5 };
    const methodScores: Record<string, number> = { manual: 3, spreadsheet: 3, software: 1, mix: 2, notwell: 3 };
    const hourScores: Record<string, number> = { under5: 0, "5-10": 1, "10-20": 3, "20+": 3 };
    const urgencyScores: Record<string, number> = { now: 5, soon: 3, research: 1, nopriority: 0 };

    formData.pain.forEach(p => total += (painScores[p] || 0));
    total += (methodScores[formData.method] || 0);
    total += (hourScores[formData.hours] || 0);
    total += (urgencyScores[formData.urgency] || 0);
    
    return total;
  };

  const submitForm = async () => {
    if (!formData.name || !formData.email || !formData.country) {
      alert("Please fill in your name, email, and country before submitting.");
      return;
    }

    if (!supabase) {
      alert("Database connection not configured. Please check your environment variables.");
      return;
    }

    setIsSubmitting(true);
    const finalScore = calcTotalScore();
    setScore(finalScore);

    try {
      const { error } = await supabase.from("leads").insert([{
        firm_name: formData.firmName,
        staff: formData.staff,
        clients: formData.clients,
        services: JSON.stringify(formData.services),
        pain: JSON.stringify(formData.pain),
        method: formData.method,
        hours: formData.hours,
        tools: JSON.stringify(formData.tools),
        urgency: formData.urgency,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country
      }]);

      if (error) throw error;

      setIsComplete(true);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data. Please try again.");
    } finally {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }
  };

  const progress = (currentPage / (totalPages + 1)) * 100;

  if (isDisqualified) {
    return (
      <div className="min-h-screen bg-brand-black text-brand-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <XCircle className="w-16 h-16 text-brand-gray-muted" />
          </div>
          <h2 className="text-2xl font-bold">Not the right fit yet.</h2>
          <p className="text-brand-gray-muted">
            FirmRunner is currently built for accounting firms with 1 to 10 staff. We are building something for larger firms. Join the waitlist and we will reach out when it is ready.
          </p>
          <Link to="/" className="btn-primary w-full">Back to Home</Link>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-brand-black text-brand-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8 bg-brand-surface border border-brand-border p-8 rounded-2xl">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your firm profile is received.</h2>
            <p className="text-brand-gray-muted">
              If FirmRunner is the right fit, you will hear from us within 24 hours.
            </p>
            <p className="text-sm text-brand-white font-medium">
              We are onboarding a limited number of firms during this early phase to ensure high-quality support.
            </p>
          </div>
          
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${
            score >= 18 ? "bg-green-500/10 text-green-500 border-green-500/20" :
            score >= 10 ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
            "bg-brand-border text-brand-gray-muted border-brand-border"
          }`}>
            {score >= 18 ? "Priority review. Expect a response today." :
             score >= 10 ? "Good fit. Expect a response within 24 hours." :
             "Added to our nurture list."}
          </div>

          <Link to="/" className="btn-primary w-full mt-8">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-10 bg-brand-white text-brand-black rounded-lg flex items-center justify-center font-bold">G</div>
          <div>
            <div className="font-bold text-sm">GIANT</div>
            <div className="text-xs text-brand-gray-muted">FirmRunner Beta</div>
          </div>
        </div>

        <div className="h-1 bg-brand-border rounded-full mb-12 overflow-hidden">
          <motion.div 
            className="h-full bg-brand-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <AnimatePresence mode="wait">
          {currentPage === 1 && (
            <motion.div 
              key="page1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-brand-gray-muted mb-2">About your firm</div>
                <h2 className="text-3xl font-bold mb-4">Let us understand your firm.</h2>
                <p className="text-brand-gray-muted">Takes under 3 minutes. We will review and respond.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Firm name</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 focus:border-brand-white outline-none transition-colors"
                    placeholder="e.g. Coastal Accounting"
                    value={formData.firmName}
                    onChange={e => setFormData(prev => ({ ...prev, firmName: e.target.value }))}
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">How many staff does your firm currently have?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "solo", label: "Just me" },
                      { id: "2-5", label: "2 to 5 staff" },
                      { id: "6-10", label: "6 to 10 staff" },
                      { id: "10+", label: "More than 10 staff", disq: true }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("staff", opt.id, false, opt.disq)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.staff === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">How many active clients does your firm serve?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "under25", label: "Fewer than 25" },
                      { id: "25-75", label: "25 to 75" },
                      { id: "76-150", label: "76 to 150" },
                      { id: "151-300", label: "151 to 300" },
                      { id: "300+", label: "More than 300" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("clients", opt.id)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.clients === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  disabled={!formData.firmName || !formData.staff || !formData.clients}
                  onClick={() => goTo(2)}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 2 && (
            <motion.div 
              key="page2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-brand-gray-muted mb-2">Your current pain</div>
                <h2 className="text-3xl font-bold mb-4">Where does the time actually go?</h2>
                <p className="text-brand-gray-muted">This is the most important question on this form. Answer it honestly.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium">Which tasks consume the most non-billable time? (Select all)</label>
                  <div className="grid gap-3">
                    {[
                      { id: "docs", label: "Chasing clients for documents" },
                      { id: "invoices", label: "Following up unpaid invoices" },
                      { id: "deadlines", label: "Sending deadline reminders" },
                      { id: "intake", label: "Onboarding new clients" },
                      { id: "reports", label: "Writing monthly client updates" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("pain", opt.id, true)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.pain.includes(opt.id) ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">How are you currently handling follow-ups?</label>
                  <div className="grid gap-3">
                    {[
                      { id: "manual", label: "Manually by email" },
                      { id: "spreadsheet", label: "Spreadsheets and calendar reminders" },
                      { id: "software", label: "Practice management software" },
                      { id: "notwell", label: "We are not handling it well" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("method", opt.id)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.method === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <button onClick={() => goTo(1)} className="flex-1 border border-brand-border rounded-xl py-4 hover:bg-brand-surface transition-colors">Back</button>
                <button 
                  disabled={formData.pain.length === 0 || !formData.method}
                  onClick={() => goTo(3)}
                  className="btn-primary flex-[2] py-4 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 3 && (
            <motion.div 
              key="page3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-brand-gray-muted mb-2">Your readiness</div>
                <h2 className="text-3xl font-bold mb-4">How your firm currently operates.</h2>
                <p className="text-brand-gray-muted">FirmRunner connects to your existing tools. No migration required.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium">How many hours per week is spent on non-billable admin?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "under5", label: "Less than 5 hours" },
                      { id: "5-10", label: "5 to 10 hours" },
                      { id: "10-20", label: "10 to 20 hours" },
                      { id: "20+", label: "More than 20 hours" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("hours", opt.id)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.hours === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Which tools does your firm currently use? (Select all)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "gmail", label: "Gmail" },
                      { id: "outlook", label: "Outlook" },
                      { id: "quickbooks", label: "QuickBooks" },
                      { id: "xero", label: "Xero" },
                      { id: "excel", label: "Excel / Sheets" },
                      { id: "pms", label: "Practice Software" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("tools", opt.id, true)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.tools.includes(opt.id) ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">How urgently are you looking for a solution?</label>
                  <div className="grid gap-3">
                    {[
                      { id: "now", label: "Actively looking right now" },
                      { id: "soon", label: "Exploring options over the next few months" },
                      { id: "research", label: "Just researching for now" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("urgency", opt.id)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.urgency === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <button onClick={() => goTo(2)} className="flex-1 border border-brand-border rounded-xl py-4 hover:bg-brand-surface transition-colors">Back</button>
                <button 
                  disabled={!formData.hours || !formData.urgency || formData.tools.length === 0}
                  onClick={() => goTo(4)}
                  className="btn-primary flex-[2] py-4 text-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {currentPage === 4 && (
            <motion.div 
              key="page4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <div className="text-xs uppercase tracking-widest font-bold text-brand-gray-muted mb-2">Contact details</div>
                <h2 className="text-3xl font-bold mb-4">How do we reach you?</h2>
                <p className="text-brand-gray-muted">Your information is only used to contact you about FirmRunner.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your full name</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 focus:border-brand-white outline-none transition-colors"
                    placeholder="e.g. Sarah Chen"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Business email address</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 focus:border-brand-white outline-none transition-colors"
                    placeholder="e.g. sarah@chenaccounting.com"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone number (optional)</label>
                  <input 
                    type="tel" 
                    className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 focus:border-brand-white outline-none transition-colors"
                    placeholder="e.g. +1 415 555 0172"
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Country</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "us", label: "United States" },
                      { id: "india", label: "India" },
                      { id: "uk", label: "United Kingdom" },
                      { id: "other", label: "Other" }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => toggleOption("country", opt.id)}
                        className={`p-4 text-left rounded-xl border transition-all ${
                          formData.country === opt.id ? "bg-brand-white text-brand-black border-brand-white" : "border-brand-border hover:border-brand-gray-muted"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <button onClick={() => goTo(3)} className="flex-1 border border-brand-border rounded-xl py-4 hover:bg-brand-surface transition-colors">Back</button>
                <button 
                  disabled={!formData.name || !formData.email || !formData.country || isSubmitting}
                  onClick={submitForm}
                  className="btn-primary flex-[2] py-4 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
