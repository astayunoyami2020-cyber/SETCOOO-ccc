"use client";

import { useState } from "react";
import { SiteIntro, useScrollReveal } from "../components/SiteEffects";

const copy = {
  en: {
    nav: [
      ["Homepage", "/"],
      ["About SETCO", "/#about"],
      ["Smart Devices & Accessories", "/services"],
      ["Electronics", "/#fields"],
      ["E-Commerce", "/#fields"],
      ["Contact", "/contact"],
    ],
    portfolio: "BRAND PORTFOLIO",
    portfolioIntro: "In smart devices and accessories, SETCO is building HTC’s presence across the Saudi market.",
    smartphones: "Smart Phones",
    solePartner: "SETCO’S SMART DEVICE PARTNER",
    distribution: "DISTRIBUTION",
    distributionText: "SETCO connects HTC products with the Saudi market through focused channel development, reliable product movement and close retail coordination. Our approach is built to support product availability, consistent brand presentation and efficient access across key sales channels.",
    channels: [
      ["Wholesale", "Building relationships with technology wholesalers across Saudi Arabia."],
      ["Large Retail Stores", "Supporting HTC visibility and availability in major retail channels."],
      ["Warehousing", "Coordinated stock handling designed for dependable product movement."],
      ["Independent Retail", "Extending HTC access through selected independent retailers."],
    ],
    afterSales: "AFTER SALES SERVICES",
    afterSalesText: "After-sales care is central to the customer experience. SETCO supports HTC customers through clear service pathways, warranty coordination and attentive follow-up. Every interaction reflects the quality and trust associated with the HTC brand.",
    footerMenu: "MENU",
    footerTouch: "GET IN TOUCH",
    footerSocial: "STAY CONNECTED",
    location: "Jeddah, Saudi Arabia",
    enquiries: "Business & partnership enquiries",
    rights: "SETCO. ALL RIGHTS RESERVED",
  },
  ar: {
    nav: [
      ["الرئيسية", "/"],
      ["عن سيتكو", "/#about"],
      ["الأجهزة الذكية وملحقاتها", "/services"],
      ["الإلكترونيات", "/#fields"],
      ["التجارة الإلكترونية", "/#fields"],
      ["تواصل معنا", "/contact"],
    ],
    portfolio: "محفظة العلامات التجارية",
    portfolioIntro: "في مجال الأجهزة الذكية وملحقاتها، تعمل سيتكو على بناء حضور HTC في السوق السعودي.",
    smartphones: "الهواتف الذكية",
    solePartner: "شريك سيتكو للأجهزة الذكية",
    distribution: "التوزيع",
    distributionText: "تربط سيتكو منتجات HTC بالسوق السعودي من خلال تطوير القنوات وحركة المنتجات الموثوقة والتنسيق المستمر مع منافذ البيع. ويركز نهجنا على توفر المنتجات واتساق حضور العلامة وسهولة الوصول إليها عبر قنوات البيع الرئيسية.",
    channels: [
      ["الجملة", "بناء علاقات مع موزعي التقنية بالجملة في مختلف مناطق المملكة."],
      ["متاجر التجزئة الكبرى", "دعم حضور HTC وتوفر منتجاتها في قنوات التجزئة الرئيسية."],
      ["التخزين", "تنسيق إدارة المخزون لضمان حركة موثوقة وفعالة للمنتجات."],
      ["التجزئة المستقلة", "توسيع وصول HTC عبر مجموعة مختارة من متاجر التجزئة المستقلة."],
    ],
    afterSales: "خدمات ما بعد البيع",
    afterSalesText: "تمثل خدمات ما بعد البيع جزءاً أساسياً من تجربة العميل. تدعم سيتكو عملاء HTC عبر مسارات خدمة واضحة وتنسيق الضمان والمتابعة الدقيقة، بما يضمن أن تعكس كل تجربة الجودة والثقة المرتبطتين بعلامة HTC.",
    footerMenu: "القائمة",
    footerTouch: "تواصل معنا",
    footerSocial: "تابعنا",
    location: "جدة، المملكة العربية السعودية",
    enquiries: "استفسارات الأعمال والشراكات",
    rights: "سيتكو. جميع الحقوق محفوظة",
  },
};

function ChannelIcon({ index }: { index: number }) {
  const icons = [
    <path key="wholesale" d="M4 10.5 12 5l8 5.5M6 10v8h12v-8M9 18v-5h6v5" />,
    <path key="retail" d="M4 9h16l-1.5-4h-13L4 9Zm2 0v10h12V9M9 19v-5h6v5" />,
    <path key="warehouse" d="m3 10 9-5 9 5v9H3v-9Zm4 9v-6h10v6M8 9h.01M12 9h.01M16 9h.01" />,
    <path key="independent" d="M5 8h14l-1-3H6L5 8Zm1 0v11h12V8M9 19v-5h6v5M4 8h16" />,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[index]}</svg>;
}

export default function ServicesPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const text = copy[language];
  const isArabic = language === "ar";
  useScrollReveal();

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="services-page">
      <SiteIntro />
      <header className="site-header">
        <a className="brand" href="/" aria-label="SETCO homepage">
          <img src="/setco-logo-transparent.png" alt="SETCO, Smart Economy for Trade and Import" />
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {text.nav.map(([label, href], index) => (
            <a className={index === 2 ? "active" : ""} key={`${label}-${index}`} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLanguage(isArabic ? "en" : "ar")}>{isArabic ? "EN" : "العربية"}</button>
          <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
        </div>
      </header>

      <section className="portfolio-section">
        <div className="portfolio-image" role="img" aria-label="HTC smart devices in retail" />
        <div className="portfolio-content">
          <p className="section-title">{text.portfolio}</p>
          <h1>{text.portfolioIntro}</h1>
          <div className="brand-category">
            <p>{text.smartphones}</p>
            <div className="htc-brand-card reveal">
              <img src="/htc-logo.svg" alt="HTC" />
              <span>{text.solePartner}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="distribution-section">
        <div className="services-heading">
          <h2>{text.distribution}</h2>
          <span />
        </div>
        <p className="distribution-copy">{text.distributionText}</p>
        <div className="channels-grid">
          {text.channels.map(([title, body], index) => (
            <article className="reveal" key={title} style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="channel-icon"><ChannelIcon index={index} /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="after-sales-section">
        <div className="services-heading">
          <h2>{text.afterSales}</h2>
          <span />
        </div>
        <div className="after-sales-grid">
          <div className="after-sales-image" role="img" aria-label="HTC customer support and device service" />
          <div className="after-sales-copy reveal">
            <img src="/htc-logo.svg" alt="HTC" />
            <p>{text.afterSalesText}</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand"><img src="/setco-logo-transparent.png" alt="SETCO" /></div>
          <div className="footer-column footer-menu">
            <h3>{text.footerMenu}</h3>
            {text.nav.slice(1, 5).map(([label, href], index) => <a key={`${label}-${index}`} href={href}>{label}</a>)}
          </div>
          <div className="footer-column">
            <h3>{text.footerTouch}</h3>
            <p>{text.location}</p>
            <p>{text.enquiries}</p>
            <a href="mailto:Support@setco.cc">Support@setco.cc</a>
          </div>
          <div className="footer-column">
            <h3>{text.footerSocial}</h3>
            <div className="social-row" aria-label="Social media"><span>in</span><span>◎</span><span>𝕏</span></div>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {text.rights}</div>
      </footer>
    </main>
  );
}
