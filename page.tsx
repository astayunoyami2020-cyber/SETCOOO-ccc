"use client";

import { useState } from "react";
import { SiteIntro, useScrollReveal } from "./components/SiteEffects";

type Language = "en" | "ar";

const content = {
  en: {
    nav: [["Homepage", "#top"], ["About SETCO", "#about"], ["Company Fields", "#fields"], ["Achievements", "#achievements"], ["Our Partner", "#partners"], ["Contact", "/contact"]],
    language: "العربية",
    heroKicker: "SMART ECONOMY FOR TRADE AND IMPORT",
    hero: "WHERE GLOBAL INNOVATION MEETS THE SAUDI MARKET.",
    heroSub: "SETCO helps technology brands enter and grow in Saudi Arabia through distribution, retail development, e-commerce and after-sales support.",
    discover: "Discover SETCO",
    about: "ABOUT SETCO",
    aboutTitle: "A Saudi growth partner for ambitious technology brands.",
    aboutBody: "SETCO is a Jeddah-based trade and market-development company helping global technology brands establish, scale and thrive in Saudi Arabia. We translate strong products into real market presence through local insight, disciplined planning and dependable execution.",
    aboutBody2: "From distribution and retail visibility to e-commerce and after-sales coordination, we bring every stage of the customer journey together. The result is a clearer route to market, stronger brand confidence and growth designed to last.",
    since: "JEDDAH / SAUDI ARABIA",
    fields: "COMPANY FIELDS",
    fieldsSub: "THREE CAPABILITIES. ONE SEAMLESS ROUTE TO MARKET.",
    cards: [
      ["Smart Devices & Accessories", "We build availability, visibility and customer confidence through focused distribution and strong retail execution.", "/field-devices.jpg"],
      ["Consumer Electronics", "We connect carefully selected products with the right positioning, sales channels and commercial support.", "/field-electronics.jpg"],
      ["E-Commerce", "We create accessible digital buying journeys that expand reach and turn product discovery into confident purchase decisions.", "/field-ecommerce.jpg"],
    ],
    learn: "Explore field",
    achievements: "PROGRESS BUILT THROUGH PARTNERSHIP",
    achievementsSub: "Every milestone reflects stronger access, sharper execution and lasting market value.",
    moments: ["Strategic brand partnership", "Saudi channel development", "Retail visibility", "Digital market reach", "Reliable product flow", "Integrated execution", "Customer care", "Long-term growth"],
    partners: "OUR PARTNERS",
    partnerText: "BUILDING HTC'S PRESENCE ACROSS THE SAUDI MARKET",
    partnerCta: "Explore our partnership",
    finalKicker: "LET'S MOVE FORWARD",
    finalTitle: "Ready to grow in Saudi Arabia? Let’s build the route together.",
    finalCta: "Start a conversation",
    menu: "MENU",
    touch: "GET IN TOUCH",
    social: "STAY CONNECTED",
    location: "Jeddah, Saudi Arabia",
    rights: "SETCO. ALL RIGHTS RESERVED.",
  },
  ar: {
    nav: [["الرئيسية", "#top"], ["عن سيتكو", "#about"], ["مجالات الشركة", "#fields"], ["إنجازاتنا", "#achievements"], ["شريكنا", "#partners"], ["تواصل معنا", "/contact"]],
    language: "EN",
    heroKicker: "سمارت إيكونومي للتجارة والاستيراد",
    hero: "حيث يلتقي الابتكار العالمي بالسوق السعودي.",
    heroSub: "تبني سيتكو المسار من دخول السوق إلى النمو المستدام، وتربط العلامات التقنية بالقنوات والعملاء والدعم اللازم للنجاح.",
    discover: "اكتشف سيتكو",
    about: "عن سيتكو",
    aboutTitle: "شريك نمو سعودي للعلامات التقنية الطموحة.",
    aboutBody: "سيتكو شركة سعودية مقرها جدة ومتخصصة في التجارة وتطوير الأسواق، وتساعد العلامات التقنية العالمية على تأسيس حضورها والتوسع والنجاح في المملكة. نحوّل المنتجات القوية إلى حضور حقيقي من خلال المعرفة المحلية والتخطيط المنضبط والتنفيذ الموثوق.",
    aboutBody2: "نجمع التوزيع والظهور في نقاط البيع والتجارة الإلكترونية وتنسيق خدمات ما بعد البيع في رحلة واحدة متكاملة. والنتيجة هي مسار أوضح إلى السوق، وثقة أقوى بالعلامة، ونمو مصمم للاستمرار.",
    since: "جدة / المملكة العربية السعودية",
    fields: "مجالات الشركة",
    fieldsSub: "ثلاث قدرات. مسار واحد متكامل إلى السوق.",
    cards: [
      ["الأجهزة الذكية وملحقاتها", "نبني التوفر والظهور وثقة العملاء من خلال توزيع مركز وتنفيذ قوي في نقاط البيع.", "/field-devices.jpg"],
      ["الإلكترونيات الاستهلاكية", "نربط المنتجات المختارة بعناية بالموقع السوقي والقنوات والدعم التجاري المناسب.", "/field-electronics.jpg"],
      ["التجارة الإلكترونية", "نصمم رحلات شراء رقمية سهلة توسع الوصول وتحول اكتشاف المنتج إلى قرار شراء واثق.", "/field-ecommerce.jpg"],
    ],
    learn: "اكتشف المجال",
    achievements: "تقدم نصنعه بالشراكة",
    achievementsSub: "كل محطة تعكس وصولاً أقوى وتنفيذاً أدق وقيمة مستدامة في السوق.",
    moments: ["شراكة استراتيجية للعلامة", "تطوير القنوات السعودية", "الظهور في نقاط البيع", "الوصول الرقمي للسوق", "تدفق موثوق للمنتجات", "تنفيذ متكامل", "العناية بالعملاء", "نمو طويل المدى"],
    partners: "شركاؤنا",
    partnerText: "نبني حضور HTC في السوق السعودي",
    partnerCta: "اكتشف شراكتنا",
    finalKicker: "لنمضِ إلى الأمام",
    finalTitle: "جاهزون للنمو في المملكة؟ لنبنِ المسار معاً.",
    finalCta: "ابدأ الحوار",
    menu: "القائمة",
    touch: "تواصل معنا",
    social: "تابعنا",
    location: "جدة، المملكة العربية السعودية",
    rights: "سيتكو. جميع الحقوق محفوظة.",
  },
} as const;

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];
  const isArabic = language === "ar";
  useScrollReveal();

  return (
    <main className="veh-home" dir={isArabic ? "rtl" : "ltr"}>
      <SiteIntro />
      <header className="veh-header">
        <a className="veh-brand" href="#top" aria-label="SETCO homepage"><img src="/setco-logo-transparent.png" alt="SETCO" /></a>
        <nav className={menuOpen ? "veh-nav open" : "veh-nav"} aria-label="Main navigation">
          {copy.nav.map(([label, href], index) => <a className={index === 0 ? "active" : ""} href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="veh-header-actions">
          <button className="veh-language" onClick={() => setLanguage(isArabic ? "en" : "ar")}>{copy.language}</button>
          <button className="veh-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        </div>
      </header>

      <section id="top" className="veh-hero">
        <div className="veh-hero-image" />
        <div className="veh-hero-shade" />
        <div className="veh-geometry" aria-hidden="true">
          <span className="geo-a" /><span className="geo-b" /><span className="geo-c" /><span className="geo-d" />
        </div>
        <div className="veh-hero-content">
          <p>{copy.heroKicker}</p>
          <h1>{copy.hero}</h1>
          <span className="veh-hero-sub">{copy.heroSub}</span>
          <a className="veh-button" href="#about">{copy.discover}<Arrow /></a>
        </div>
        <div className="veh-scroll"><span>SCROLL</span><i /></div>
      </section>

      <section id="about" className="veh-about">
        <img className="veh-about-mark" src="/setco-s-logo.png" alt="" aria-hidden="true" />
        <div className="veh-section-head reveal">
          <p>{copy.about}</p><span />
          <h2>{copy.aboutTitle}</h2>
        </div>
        <div className="veh-about-copy reveal">
          <p>{copy.aboutBody}</p><p>{copy.aboutBody2}</p>
          <span className="veh-location">{copy.since}</span>
        </div>
      </section>

      <section id="fields" className="veh-fields">
        <div className="veh-centered-head reveal"><p>{copy.fields}</p><span /><h2>{copy.fieldsSub}</h2></div>
        <div className="veh-field-grid">
          {copy.cards.map(([title, body, image], index) => (
            <a className="veh-field reveal" href={index === 0 ? "/services" : "#fields"} style={{ transitionDelay: `${index * 100}ms` }} key={title}>
              <img src={image} alt="" />
              <span className="veh-field-overlay" />
              <span className="veh-field-index">0{index + 1}</span>
              <span className="veh-field-copy"><h3>{title}</h3><p>{body}</p><i>{copy.learn}<Arrow /></i></span>
            </a>
          ))}
        </div>
      </section>

      <section id="achievements" className="veh-achievements">
        <div className="veh-centered-head reveal"><p>{copy.achievements}</p><span /><h2>{copy.achievementsSub}</h2></div>
        <div className="veh-mosaic">
          {copy.moments.map((moment, index) => {
            const images = [
              "/achievement-tech-launch.webp",
              "/achievement-distribution.webp",
              "/hero-building.jpg",
              "/achievement-ecommerce.webp",
              "/field-solar.jpg",
              "/field-devices.jpg",
              "/contact-premium-support.webp",
              "/field-electronics.jpg",
            ];
            return <article className={`veh-moment moment-${index + 1} reveal`} style={{ transitionDelay: `${(index % 4) * 70}ms` }} key={moment}><img src={images[index]} alt="" /><span /><p><b>0{index + 1}</b>{moment}</p></article>;
          })}
        </div>
      </section>

      <section id="partners" className="veh-partners">
        <div className="veh-centered-head reveal"><p>{copy.partners}</p><span /></div>
        <a className="veh-partner-only reveal" href="/services" aria-label={copy.partnerCta}>
          <img src="/htc-logo.svg" alt="HTC" />
        </a>
      </section>

      <section className="veh-final">
        <div className="veh-final-geometry" aria-hidden="true"><span /><span /></div>
        <div className="reveal"><p>{copy.finalKicker}</p><h2>{copy.finalTitle}</h2></div>
        <a className="veh-button veh-button-light reveal" href="/contact">{copy.finalCta}<Arrow /></a>
      </section>

      <footer className="veh-footer">
        <div className="veh-footer-brand"><img src="/setco-logo-transparent.png" alt="SETCO" /></div>
        <div className="veh-footer-col"><h3>{copy.menu}</h3>{copy.nav.slice(1, 5).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="veh-footer-col"><h3>{copy.touch}</h3><p>{copy.location}</p><a href="mailto:Support@setco.cc">Support@setco.cc</a></div>
        <div className="veh-footer-col"><h3>{copy.social}</h3><div className="veh-social"><span>in</span><span>◎</span><span>𝕏</span></div></div>
        <div className="veh-copyright">© {new Date().getFullYear()} {copy.rights}</div>
      </footer>
    </main>
  );
}
