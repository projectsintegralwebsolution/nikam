"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  initialCategory?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function ContactForm({
  initialCategory = "",
  onSuccess,
  compact = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: initialCategory || "",
    message: "",
    agree: true,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const categories = [
    "Laboratory Glassware",
    "Laboratory Equipment",
    "Industrial Process Equipment",
    "Custom Glassware",
    "Other Requirement",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, Phone, and Message).",
      });
      return;
    }

    if (!formData.agree) {
      setStatus({
        type: "error",
        message: "Please agree to the privacy policy to submit your inquiry.",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent successfully. We will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: initialCategory || "",
          message: "",
          agree: true,
        });
        if (onSuccess) {
          setTimeout(() => onSuccess(), 2500);
        }
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send your message. Please try again.",
        });
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: "A network error occurred. Please try again or call us at +91 9422685973.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.type === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 text-green-800 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">{status.message}</div>
        </div>
      )}

      {status.type === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-800 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">{status.message}</div>
        </div>
      )}

      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-3.5 sm:gap-4`}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-[#ff7522]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Rajesh Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded focus:border-[#ff7522] focus:ring-1 focus:ring-[#ff7522] outline-none text-sm transition-colors"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Email Address <span className="text-[#ff7522]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. rajesh@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded focus:border-[#ff7522] focus:ring-1 focus:ring-[#ff7522] outline-none text-sm transition-colors"
          />
        </div>
      </div>

      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-3.5 sm:gap-4`}>
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Phone Number <span className="text-[#ff7522]">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded focus:border-[#ff7522] focus:ring-1 focus:ring-[#ff7522] outline-none text-sm transition-colors"
          />
        </div>

        {/* Product Category */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Product Category <span className="text-[#ff7522]">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded focus:border-[#ff7522] focus:ring-1 focus:ring-[#ff7522] outline-none text-sm transition-colors"
          >
            <option value="">Select Product Category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Requirement Details / Message <span className="text-[#ff7522]">*</span>
        </label>
        <textarea
          rows={compact ? 3 : 5}
          required
          placeholder="Please describe sizes, quantity, capacity, application specifications, or custom requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#ff7522] focus:ring-1 focus:ring-[#ff7522] outline-none text-sm transition-colors resize-y"
        ></textarea>
      </div>

      {/* Terms checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={`agree-${compact ? "compact" : "full"}`}
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="w-4 h-4 text-[#ff7522] border-gray-300 rounded focus:ring-[#ff7522]"
        />
        <label htmlFor={`agree-${compact ? "compact" : "full"}`} className="text-xs text-gray-600">
          I agree to the terms and privacy policy of Nikam Scientific.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message &amp; Request Quote</span>
          </>
        )}
      </button>
    </form>
  );
}
