"use client";

import { FormEvent, useState } from "react";
import { SiteIntro, useScrollReveal } from "../components/SiteEffects";

const content = {
  en: {
    nav: [["Homepage", "/"], ["About SETCO", "/#about"], ["Company Fields", "/#fields"], ["Achievements", "/#achievements"], ["Our Partners", "/#partners"], ["Contact", "/contact"]],
    language: "العربية",
    kicker: "CONTACT SETCO",
    title: "Let’s talk about your next move in Saudi Arabia.",
    intro: "Tell us what you want to achieve. Our team will connect you with the right commercial, distribution or partnership specialist.",
    imageNote: "Local insight. Direct access. Clear next steps.",
    formKicker: "BUSINESS ENQUIRIES",
    formTitle: "Start the conversation.",
    formIntro: "Complete the form and your email application will open with the enquiry ready to send.",
    locationLabel: "OUR LOCATION",
    location: "Jeddah, Saudi Arabia",
    emailLabel: "EMAIL OUR TEAM",
    email: "Support@setco.cc",
    hoursLabel: "BUSINESS HOURS",
    hours: "Sunday to Thursday, 9:00 AM to 6:00 PM",
    responseLabel: "RESPONSE TIME",
    response: "Usually within one business day",
    name: "Full name",
    emailField: "Business email",
    phone: "Phone number",
    company: "Company name",
    role: "Job title",
    website: "Company website",
    select: "What would you like to discuss?",
    options: ["Distribution in Saudi Arabia", "HTC products", "Consumer electronics", "E-commerce", "Retail partnership", "After-sales support", "General business enquiry"],
    subject: "Enquiry subject",
    message: "Tell us about your business and objectives",
    send: "Prepare enquiry",
    privacy: "Your details will only be used to respond to this business enquiry.",
    success: "Your email application is ready. Review the message and select send to complete your enquiry.",
    directKicker: "PREFER EMAIL?",
    directTitle: "Write to us directly.",
    directBody: "For distribution, retail, e-commerce or strategic partnership enquiries, contact our Jeddah team.",
    footerMenu: "MENU",
    footerTouch: "GET IN TOUCH",
    footerSocial: "STAY CONNECTED",
    rights: "SETCO. ALL RIGHTS RESERVED.",
  },
  ar: {
    nav: [["الرئيسية", "/"], ["عن سيتكو", "/#about"], ["مجالات الشركة", "/#fields"], ["إنجازاتنا", "/#achievements"], ["شركاؤنا", "/#partners"], ["تواصل معنا", "/contact"]],
    language: "EN",
    kicker: "تواصل مع سيتكو",
    title: "لنتحدث عن خطوتكم التالية في السوق السعودي.",
    intro: "شاركونا ما تريدون تحقيقه، وسيربطكم فريقنا بالمتخصص المناسب في التجارة أو التوزيع أو الشراكات.",
    imageNote: "معرفة محلية. وصول مباشر. خطوات واضحة.",
    formKicker: "استفسارات الأعمال",
    formTitle: "ابدأ الحوار.",
    formIntro: "أكمل النموذج وسيفتح تطبيق البريد برسالة جاهزة للمراجعة والإرسال.",
    locationLabel: "موقعنا",
    location: "جدة، المملكة العربية السعودية",
    emailLabel: "راسل فريقنا",
    email: "Support@setco.cc",
    hoursLabel: "ساعات العمل",
    hours: "الأحد إلى الخميس، 9:00 صباحاً إلى 6:00 مساءً",
    responseLabel: "وقت الاستجابة",
    response: "عادة خلال يوم عمل واحد",
    name: "الاسم الكامل",
    emailField: "البريد الإلكتروني للعمل",
    phone: "رقم الهاتف",
    company: "اسم الشركة",
    role: "المسمى الوظيفي",
    website: "موقع الشركة",
    select: "ما الموضوع الذي ترغب في مناقشته؟",
    options: ["التوزيع في المملكة", "منتجات HTC", "الإلكترونيات الاستهلاكية", "التجارة الإلكترونية", "شراكة التجزئة", "خدمات ما بعد البيع", "استفسار أعمال عام"],
    subject: "موضوع الاستفسار",
    message: "عرّفنا بشركتكم وأهدافكم",
    send: "تجهيز الاستفسار",
    privacy: "ستستخدم بياناتكم فقط للرد على هذا الاستفسار التجاري.",
    success: "تم تجهيز الرسالة في تطبيق البريد. راجع الرسالة ثم اختر إرسال لإكمال الاستفسار.",
    directKicker: "تفضل البريد الإلكتروني؟",
    directTitle: "راسلنا مباشرة.",
    directBody: "لاستفسارات التوزيع أو التجزئة أو التجارة الإلكترونية أو الشراكات الاستراتيجية، تواصل مع فريقنا في جدة.",
    footerMenu: "القائمة",
    footerTouch: "تواصل معنا",
    footerSocial: "تابعنا",
    rights: "سيتكو. جميع الحقوق محفوظة.",
  },
} as const;

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
}

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const text = content[language];
  const isArabic = language === "ar";
  useScrollReveal();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("type")}: ${data.get("subject")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Company: ${data.get("company")}`,
      `Role: ${data.get("role")}`,
      `Website: ${data.get("website")}`,
      `Enquiry: ${data.get("type")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:Support@setco.cc?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="premium-contact">
      <SiteIntro />
      <header className="veh-header">
        <a className="veh-brand" href="/" aria-label="SETCO homepage"><img src="/setco-logo-transparent.png" alt="SETCO" /></a>
        <nav className={menuOpen ? "veh-nav open" : "veh-nav"} aria-label="Main navigation">
          {text.nav.map(([label, href], index) => <a className={index === 5 ? "active" : ""} href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="veh-header-actions">
          <button className="veh-language" onClick={() => setLanguage(isArabic ? "en" : "ar")}>{text.language}</button>
          <button className="veh-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        </div>
      </header>

      <section className="premium-contact-hero">
        <div className="contact-hero-copy">
          <p className="contact-kicker">{text.kicker}</p>
          <h1>{text.title}</h1>
          <p className="contact-lead">{text.intro}</p>
          <a href="#enquiry" className="contact-round-link" aria-label={text.formTitle}><Arrow /></a>
        </div>
        <div className="contact-hero-visual">
          <img src="/contact-premium-support.webp" alt="SETCO customer and business support" />
          <span className="contact-image-wash" />
          <p>{text.imageNote}</p>
        </div>
      </section>

      <section id="enquiry" className="premium-enquiry">
        <aside className="premium-contact-sidebar reveal">
          <div className="contact-side-heading"><p>{text.formKicker}</p><h2>{text.formTitle}</h2><span>{text.formIntro}</span></div>
          <div className="contact-facts">
            <article><small>01</small><div><b>{text.locationLabel}</b><p>{text.location}</p></div></article>
            <article><small>02</small><div><b>{text.emailLabel}</b><a href="mailto:Support@setco.cc">{text.email}</a></div></article>
            <article><small>03</small><div><b>{text.hoursLabel}</b><p>{text.hours}</p></div></article>
            <article><small>04</small><div><b>{text.responseLabel}</b><p>{text.response}</p></div></article>
          </div>
        </aside>

        <div className="premium-form-card reveal">
          <form className="premium-form" onSubmit={submit}>
            <label><span>{text.name}</span><input name="name" autoComplete="name" required /></label>
            <label><span>{text.emailField}</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>{text.phone}</span><input name="phone" type="tel" autoComplete="tel" /></label>
            <label><span>{text.company}</span><input name="company" autoComplete="organization" required /></label>
            <label><span>{text.role}</span><input name="role" autoComplete="organization-title" /></label>
            <label><span>{text.website}</span><input name="website" type="url" placeholder="https://" /></label>
            <label className="premium-form-wide"><span>{text.select}</span><select name="type" required defaultValue=""><option value="" disabled>{text.select}</option>{text.options.map(option => <option key={option}>{option}</option>)}</select></label>
            <label className="premium-form-wide"><span>{text.subject}</span><input name="subject" required /></label>
            <label className="premium-form-wide"><span>{text.message}</span><textarea name="message" rows={6} required /></label>
            <div className="premium-form-submit premium-form-wide">
              <button type="submit">{text.send}<Arrow /></button>
              <p>{text.privacy}</p>
            </div>
            {sent && <p className="premium-form-status premium-form-wide" role="status">{text.success}</p>}
          </form>
        </div>
      </section>

      <section className="premium-direct">
        <div className="reveal"><p>{text.directKicker}</p><h2>{text.directTitle}</h2><span>{text.directBody}</span></div>
        <a className="premium-direct-mail reveal" href="mailto:Support@setco.cc">Support@setco.cc<Arrow /></a>
      </section>

      <footer className="veh-footer">
        <div className="veh-footer-brand"><img src="/setco-logo-transparent.png" alt="SETCO" /></div>
        <div className="veh-footer-col"><h3>{text.footerMenu}</h3>{text.nav.slice(0, 5).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="veh-footer-col"><h3>{text.footerTouch}</h3><p>{text.location}</p><a href="mailto:Support@setco.cc">Support@setco.cc</a></div>
        <div className="veh-footer-col"><h3>{text.footerSocial}</h3><div className="veh-social"><span>in</span><span>◎</span><span>𝕏</span></div></div>
        <div className="veh-copyright">© {new Date().getFullYear()} {text.rights}</div>
      </footer>
    </main>
  );
}
