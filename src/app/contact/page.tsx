"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/I18nContext";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Channels & Help */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
                {t.contactPage.title}
              </h1>
              <p className="text-text-muted text-base leading-relaxed">
                {t.contactPage.desc}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-main text-sm">{t.contactPage.emailTitle}</h4>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="text-primary font-medium text-sm hover:underline">
                    {siteConfig.supportEmail}
                  </a>
                  <p className="text-xs text-text-muted mt-0.5">{t.contactPage.emailSub}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-white text-slate-700 flex items-center justify-center shrink-0 border border-black/5">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-main text-sm">{t.contactPage.faqCalloutTitle}</h4>
                  <p className="text-xs text-text-muted mt-0.5 mb-1.5">
                    {t.contactPage.faqCalloutSub}
                  </p>
                  <Link href="/#faq" className="text-primary font-semibold text-xs hover:underline inline-flex items-center gap-1">
                    {t.contactPage.faqLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Topic Selector */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-black/5 shadow-xl shadow-black/5">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-text-main">{t.contactPage.successTitle}</h3>
                <p className="text-text-muted max-w-md mx-auto text-sm leading-relaxed">
                  {t.contactPage.successDesc}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  {t.contactPage.newMsgBtn}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold text-text-main mb-2">{t.contactPage.formTitle}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {t.contactPage.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactPage.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-text-main"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {t.contactPage.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contactPage.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-text-main"
                    />
                  </div>
                </div>

                {/* Topic / Category Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {t.contactPage.subjectLabel}
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-text-main cursor-pointer"
                    >
                      <option value="" disabled>
                        {t.contactPage.subjectPlaceholder}
                      </option>
                      <option value="support">{t.contactPage.subjectOptions.support}</option>
                      <option value="bug">{t.contactPage.subjectOptions.bug}</option>
                      <option value="feature">{t.contactPage.subjectOptions.feature}</option>
                      <option value="partnership">{t.contactPage.subjectOptions.partnership}</option>
                      <option value="other">{t.contactPage.subjectOptions.other}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-text-muted">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t.contactPage.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-text-main resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full py-3.5 flex items-center justify-center gap-2">
                  <Send size={18} />
                  {t.contactPage.submitBtn}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
