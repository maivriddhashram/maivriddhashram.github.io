/**
 * common.js — injects the shared header, mobile nav, sticky bottom bar
 * and footer on every page, and drives language switching (मराठी | English).
 * Loaded after config.js on every page.
 */
(function(){
  const NAV_LINKS = [
    { href:"index.html", mr:"मुख्यपृष्ठ", en:"Home" },
    { href:"about.html", mr:"आमच्याविषयी", en:"About" },
    { href:"mothers.html", mr:"आमच्या माता", en:"Our Mothers" },
    { href:"facilities.html", mr:"काळजी", en:"Care" },
    { href:"activities.html", mr:"उपक्रम", en:"Activities" },
    { href:"gallery.html", mr:"गॅलरी", en:"Gallery" },
    { href:"stories.html", mr:"कथा", en:"Stories" },
    { href:"csr.html", mr:"सीएसआर", en:"CSR" },
    { href:"contact.html", mr:"संपर्क", en:"Contact" }
  ];

  function currentPage(){
    const p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  function buildHeader(){
    const page = currentPage();
    const links = NAV_LINKS.map(l =>
      `<a href="${l.href}" data-mr="${l.mr}" data-en="${l.en}" class="${page===l.href?'active':''}">${l.mr}</a>`
    ).join("");
    return `
    <a href="#main" class="skip-link" data-mr="मुख्य मजकुरावर जा" data-en="Skip to main content">मुख्य मजकुरावर जा</a>
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="brand">
  <img
  src="images/logo/home-logo.png"
  class="brand-mark"
  alt="माई वृद्धाश्रम Logo"
>
>
          <span class="brand-name" data-mr="माई वृद्धाश्रम" data-en="Mai Vriddhashram">माई वृद्धाश्रम<small data-mr="बोधी ट्री एज्युकेशनल फाउंडेशन" data-en="Bodhi Tree Educational Foundation">बोधी ट्री एज्युकेशनल फाउंडेशन</small></span>
        </a>
        <nav class="main-nav" aria-label="Primary">${links}</nav>
        <div class="header-actions">
          <div class="lang-switch" role="group" aria-label="Language / भाषा">
            <button type="button" data-set-lang="mr">मराठी</button>
            <button type="button" data-set-lang="en">English</button>
          </div>
          <a href="donate.html" class="btn btn-primary btn-sm" data-mr="देणगी द्या ❤️" data-en="Donate Now ❤️">देणगी द्या ❤️</a>
          <button class="menu-toggle" aria-label="Menu" aria-expanded="false" id="menuToggle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobile">${links}</nav>
    </header>`;
  }

  function buildBottomBar(){
    const wa = (SITE_CONFIG.whatsapp || "").replace(/[^0-9]/g,"");
    const waHref = wa ? `https://wa.me/${wa}` : "#contact-form";
    const telHref = /^\[/.test(SITE_CONFIG.phone) ? "contact.html" : `tel:${SITE_CONFIG.phone}`;
    return `
    <div class="mobile-bottom-bar">
      <div class="row">
        <a href="donate.html" class="donate">❤️ <span data-mr="देणगी" data-en="Donate">देणगी</span></a>
        <a href="${telHref}">📞 <span data-mr="कॉल करा" data-en="Call">कॉल करा</span></a>
        <a href="${waHref}" target="_blank" rel="noopener">💬 <span data-mr="व्हॉट्सअ‍ॅप" data-en="WhatsApp">व्हॉट्सअ‍ॅप</span></a>
      </div>
    </div>`;
  }

  function buildFooter(){
    const y = SITE_CONFIG.currentYear;
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="brand" style="margin-bottom:12px;">
              <svg class="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="23" fill="#FBF3E7"/>
                <path d="M12 27 L24 15 L36 27" stroke="#3B2A20" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="brand-name" style="color:var(--ivory);" data-mr="माई वृद्धाश्रम" data-en="Mai Vriddhashram">माई वृद्धाश्रम</span>
            </div>
            <p data-mr="बोधी ट्री एज्युकेशनल फाउंडेशन द्वारा संचालित" data-en="Run by Bodhi Tree Educational Foundation">बोधी ट्री एज्युकेशनल फाउंडेशन द्वारा संचालित</p>
            <div class="social-row">
              <a href="${/^\[/.test(SITE_CONFIG.instagram)?'#':SITE_CONFIG.instagram}" aria-label="Instagram">📷</a>
              <a href="${/^\[/.test(SITE_CONFIG.facebook)?'#':SITE_CONFIG.facebook}" aria-label="Facebook">📘</a>
            </div>
          </div>
          <div>
            <h3 style="color:var(--ivory); font-size:1rem;" data-mr="द्रुत दुवे" data-en="Quick Links">द्रुत दुवे</h3>
            <p><a href="index.html" data-mr="मुख्यपृष्ठ" data-en="Home">मुख्यपृष्ठ</a></p>
            <p><a href="about.html" data-mr="आमच्याविषयी" data-en="About">आमच्याविषयी</a></p>
            <p><a href="mothers.html" data-mr="आमच्या माता" data-en="Our Mothers">आमच्या माता</a></p>
            <p><a href="donate.html" data-mr="देणगी द्या" data-en="Donate">देणगी द्या</a></p>
            <p><a href="volunteer.html" data-mr="स्वयंसेवक व्हा" data-en="Volunteer">स्वयंसेवक व्हा</a></p>
          </div>
          <div>
            <h3 style="color:var(--ivory); font-size:1rem;" data-mr="धोरणे" data-en="Policies">धोरणे</h3>
            <p><a href="privacy.html" data-mr="गोपनीयता धोरण" data-en="Privacy Policy">गोपनीयता धोरण</a></p>
            <p><a href="terms.html" data-mr="अटी व शर्ती" data-en="Terms &amp; Conditions">अटी व शर्ती</a></p>
            <p><a href="donation-policy.html" data-mr="देणगी धोरण" data-en="Donation Policy">देणगी धोरण</a></p>
            <p><a href="csr.html" data-mr="सीएसआर भागीदारी" data-en="CSR Partnership">सीएसआर भागीदारी</a></p>
          </div>
          <div>
            <h3 style="color:var(--ivory); font-size:1rem;" data-mr="संपर्क" data-en="Contact">संपर्क</h3>
            <p>${SITE_CONFIG.address}</p>
            <p>${SITE_CONFIG.phone}</p>
            <p>${SITE_CONFIG.email}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${y} Mai Vriddhashram. <span data-mr="सर्व हक्क राखीव." data-en="All Rights Reserved.">सर्व हक्क राखीव.</span></span>
          <span data-mr="नोंदणी क्रमांक" data-en="Registration No.">नोंदणी क्रमांक</span>&nbsp;${SITE_CONFIG.registrationNumber}
        </div>
      </div>
    </footer>`;
  }

  function applyLang(lang){
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "mr" ? "mr" : "en");
    document.querySelectorAll("[data-mr]").forEach(el=>{
      const val = el.getAttribute(lang === "mr" ? "data-mr" : "data-en");
      if(val !== null){
        if(el.hasAttribute("data-html")) el.innerHTML = val;
        else el.textContent = val;
      }
    });
    document.querySelectorAll("[data-set-lang]").forEach(btn=>{
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
    });
    try{ localStorage.setItem("mv_lang", lang); }catch(e){}
  }

  function initLangSwitch(){
    document.querySelectorAll("[data-set-lang]").forEach(btn=>{
      btn.addEventListener("click", ()=> applyLang(btn.getAttribute("data-set-lang")));
    });
    let saved = "mr";
    try{ saved = localStorage.getItem("mv_lang") || "mr"; }catch(e){}
    applyLang(saved);
  }

  function initMobileMenu(){
    const btn = document.getElementById("menuToggle");
    const nav = document.getElementById("mobileNav");
    if(!btn || !nav) return;
    btn.addEventListener("click", ()=>{
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initReveal(){
    const items = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window) || items.length===0){
      items.forEach(el=>el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold:0.15 });
    items.forEach(el=>io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", function(){
    const headerMount = document.getElementById("site-header");
    const footerMount = document.getElementById("site-footer");
    if(headerMount) headerMount.outerHTML = buildHeader();
    if(footerMount) footerMount.outerHTML = buildFooter() + buildBottomBar();
    initLangSwitch();
    initMobileMenu();
    initReveal();
    if(typeof initPage === "function") initPage();
  });
})();
