/**
 * main.js — optional page-specific behaviours.
 * Each page calls the relevant init function from initPage().
 */

/* ---- Animated impact counters (only runs where .stat-number[data-target] exists) ---- */
function initCounters(){
  const nums = document.querySelectorAll(".stat-number[data-target]");
  if(nums.length===0) return;
  const animate = (el)=>{
    const target = el.getAttribute("data-target");
    if(!/^\d+$/.test(target)){ el.textContent = target; return; } // leave placeholders like [XX]+ as-is
    const end = parseInt(target,10);
    const suffix = el.getAttribute("data-suffix") || "";
    let start = 0;
    const dur = 1200;
    const t0 = performance.now();
    function step(t){
      const p = Math.min(1,(t-t0)/dur);
      el.textContent = Math.floor(p*end) + suffix;
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ animate(e.target); io.unobserve(e.target);} });
    }, {threshold:0.4});
    nums.forEach(el=>io.observe(el));
  } else {
    nums.forEach(animate);
  }
}

/* ---- Gallery filter + lightbox ---- */
function initGallery(){
  const grid = document.getElementById("galleryGrid");
  if(!grid) return;
  const buttons = document.querySelectorAll(".filter-btn");
  const items = grid.querySelectorAll(".gallery-item");
  buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      buttons.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");
      items.forEach(it=>{
        const show = cat==="all" || it.getAttribute("data-cat")===cat;
        it.style.display = show ? "" : "none";
      });
    });
  });
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  items.forEach(it=>{
    it.addEventListener("click", ()=>{
      const img = it.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add("open");
      lightbox.focus();
    });
  });
  document.getElementById("lightboxClose")?.addEventListener("click", ()=> lightbox.classList.remove("open"));
  lightbox?.addEventListener("click", (e)=>{ if(e.target===lightbox) lightbox.classList.remove("open"); });
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") lightbox?.classList.remove("open"); });
}
/* ---- Donation amount selector + Continue ---- */
function initDonationAmounts(){

  const wrap = document.getElementById("amountGrid");
  const custom = document.getElementById("customAmount");
  const continueButton = document.getElementById("continueDonation");
  const donationMethods = document.getElementById("donate-methods");

  if(!wrap) return;

  const buttons = wrap.querySelectorAll(".amount-btn");

  let selectedAmount = 500;


  /* Preset amount buttons */
  buttons.forEach(btn => {

    btn.addEventListener("click", function(){

      /* Remove active from all */
      buttons.forEach(b => {
        b.classList.remove("active");
      });

      /* Activate selected button */
      this.classList.add("active");

      /* Save amount */
      selectedAmount = Number(this.dataset.amount);

      /* Clear custom amount */
      if(custom){
        custom.value = "";
      }

    });

  });


  /* Custom amount */
  if(custom){

    custom.addEventListener("input", function(){

      const value = Number(this.value);

      if(value > 0){

        selectedAmount = value;

        /* Remove preset active state */
        buttons.forEach(b => {
          b.classList.remove("active");
        });

      }

    });

  }


  /* Continue button */
  if(continueButton){

    continueButton.addEventListener("click", function(){

      let amount = Number(custom ? custom.value : 0);

      /* If custom amount is empty, use selected button */
      if(!amount || amount <= 0){
        amount = selectedAmount;
      }


      /* Validate amount */
      if(!amount || amount <= 0){

        alert(
          document.documentElement.getAttribute("data-lang") === "mr"
          ? "कृपया देणगीची रक्कम निवडा."
          : "Please select a donation amount."
        );

        return;
      }


      /* Save donation amount */
      sessionStorage.setItem(
        "donationAmount",
        String(amount)
      );


      /* Scroll to UPI / Bank section */
      if(donationMethods){

        donationMethods.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  }

}
 (volunteer / CSR / contact) ---- */
function initForm(formId){
  const form = document.getElementById(formId);
  if(!form) return;
  const success = form.querySelector(".form-success");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(field=>{
      const errorEl = field.closest(".form-field")?.querySelector(".form-error");
      let msg = "";
      if(!field.value.trim()){
        msg = document.documentElement.getAttribute("data-lang")==="mr" ? "ही माहिती आवश्यक आहे." : "This field is required.";
      } else if(field.type==="email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)){
        msg = document.documentElement.getAttribute("data-lang")==="mr" ? "कृपया वैध ईमेल टाका." : "Please enter a valid email.";
      } else if(field.type==="tel" && !/^[0-9+\s-]{7,15}$/.test(field.value)){
        msg = document.documentElement.getAttribute("data-lang")==="mr" ? "कृपया वैध फोन नंबर टाका." : "Please enter a valid phone number.";
      }
      if(msg){ valid = false; }
      if(errorEl) errorEl.textContent = msg;
    });
    if(!valid) return;
    // Spam-protection placeholder: integrate a real CAPTCHA / honeypot before production use.
    form.reset();
    if(success) success.style.display = "block";
  });
}

function initPage(){
  initCounters();
  initGallery();
  initDonationAmounts();
}
