"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category || "General Inquiry",
          message: formData.message,
          agreeTerms: formData.agree,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        message: "",
        agree: false,
      });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Google Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[280px] sm:min-h-[340px] lg:min-h-full">
            <iframe
              src="https://maps.google.com/maps?q=18%2C%2019%20%26%2020%2C%20Jay%20Ambe%20Nagar%2C%20Shivaji%20Nagar%2C%20Dist.%20Palghar%2C%20Salvad%20-%20401%20504%2C%20Boisar%20%28W%29%2C%20Maharashtra%2C%20India&t=m&z=10&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikam Scientific Factory Location"
            />
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-6 bg-[#f8f9fa] p-5 sm:p-8 lg:p-10 rounded-2xl border border-gray-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#121315] font-heading">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your enquiry has been received. Our technical team will review your requirement and respond within 3 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-4 text-xs py-2.5 px-6"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="*Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#ff7522] focus:ring-2 focus:ring-[#ff7522]/20 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="*Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#ff7522] focus:ring-2 focus:ring-[#ff7522]/20 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="*Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#ff7522] focus:ring-2 focus:ring-[#ff7522]/20 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-[#ff7522] focus:ring-2 focus:ring-[#ff7522]/20 transition-all shadow-2xs"
                    >
                      <option value="">Select Product Category</option>
                      <option value="Laboratory Glassware">Laboratory Glassware</option>
                      <option value="Laboratory Equipment">Laboratory Equipment</option>
                      <option value="Industrial Process Equipment">Industrial Process Equipment</option>
                      <option value="Custom Glassware">Custom Glassware</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your product requirement..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#ff7522] focus:ring-2 focus:ring-[#ff7522]/20 transition-all shadow-2xs"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agree}
                    onChange={(e) =>
                      setFormData({ ...formData, agree: e.target.checked })
                    }
                    className="w-4 h-4 text-[#ff7522] rounded border-gray-300 focus:ring-[#ff7522]"
                  />
                  <label htmlFor="agree" className="text-xs text-gray-600">
                    I agree to the Privacy Policy and Terms &amp; Conditions.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff7522] to-[#e65e0d] hover:from-[#ff853d] hover:to-[#ff7522] text-white text-xs sm:text-sm uppercase font-bold tracking-wider shadow-lg shadow-orange-950/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
