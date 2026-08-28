/**
 * ============================================================
 * MAI VRIDDHASHRAM — MAIN JAVASCRIPT
 * ============================================================
 * Page-specific behaviours
 * ============================================================
 */


/* ------------------------------------------------------------
   ANIMATED IMPACT COUNTERS
------------------------------------------------------------ */
function initCounters(){

  const nums = document.querySelectorAll(
    ".stat-number[data-target]"
  );

  if(nums.length === 0) return;

  const animate = (el) => {

    const target = el.getAttribute("data-target");

    /*
     * If target is not a number, keep the original text.
     * Example: [XX]
     */
    if(!/^\d+$/.test(target)){
      el.textContent = target;
      return;
    }

    const end = parseInt(target, 10);
    const suffix = el.getAttribute("data-suffix") || "";

    let start = 0;

    const duration = 1200;
    const startTime = performance.now();

    function step(currentTime){

      const progress = Math.min(
        1,
        (currentTime - startTime) / duration
      );

      el.textContent =
        Math.floor(progress * end) + suffix;

      if(progress < 1){
        requestAnimationFrame(step);
      }

    }

    requestAnimationFrame(step);
  };


  if("IntersectionObserver" in window){

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            animate(entry.target);

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.4
      }
    );

    nums.forEach(el => observer.observe(el));

  } else {

    nums.forEach(animate);

  }

}


/* ------------------------------------------------------------
   GALLERY
------------------------------------------------------------ */
function initGallery(){

  const grid = document.getElementById("galleryGrid");

  if(!grid) return;

  const buttons =
    document.querySelectorAll(".filter-btn");

  const items =
    grid.querySelectorAll(".gallery-item");


  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      buttons.forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      const category =
        btn.getAttribute("data-filter");

      items.forEach(item => {

        const show =
          category === "all" ||
          item.getAttribute("data-cat") === category;

        item.style.display =
          show ? "" : "none";

      });

    });

  });


  const lightbox =
    document.getElementById("lightbox");

  const lightboxImg =
    document.getElementById("lightboxImg");

  const lightboxCaption =
    document.getElementById("lightboxCaption");


  items.forEach(item => {

    item.addEventListener("click", () => {

      const img = item.querySelector("img");

      if(!img || !lightbox) return;

      if(lightboxImg){

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

      }

      if(lightboxCaption){

        lightboxCaption.textContent =
          img.alt || "";

      }

      lightbox.classList.add("open");

      if(typeof lightbox.focus === "function"){
        lightbox.focus();
      }

    });

  });


  document
    .getElementById("lightboxClose")
    ?.addEventListener(
      "click",
      () => lightbox?.classList.remove("open")
    );


  lightbox?.addEventListener("click", (event) => {

    if(event.target === lightbox){

      lightbox.classList.remove("open");

    }

  });


  document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

      lightbox?.classList.remove("open");

    }

  });

}


/* ------------------------------------------------------------
   DONATION DETAILS
------------------------------------------------------------ */
function initDonationDetails(){

  if(typeof SITE_CONFIG === "undefined") return;


  /* UPI ID */
  const upiId =
    document.getElementById("upiId");

  if(upiId){

    upiId.textContent =
      SITE_CONFIG.upiId || "";

  }


  /* QR CODE */
  const qrImage =
    document.querySelector(
      'img[data-config="qrCode"]'
    );

  if(qrImage){

    qrImage.src =
      SITE_CONFIG.qrCodeImage || "";

    qrImage.alt =
      "Mai Vriddhashram UPI Donation QR Code";

  }


  /* BANK DETAILS */
  if(SITE_CONFIG.bank){

    const bankAccName =
      document.getElementById("bankAccName");

    const bankName =
      document.getElementById("bankName");

    const bankBranch =
      document.getElementById("bankBranch");

    const bankAccNum =
      document.getElementById("bankAccNum");

    const bankIfsc =
      document.getElementById("bankIfsc");


    if(bankAccName){

      bankAccName.textContent =
        SITE_CONFIG.bank.accountName || "";

    }


    if(bankName){

      bankName.textContent =
        SITE_CONFIG.bank.bankName || "";

    }


    if(bankBranch){

      bankBranch.textContent =
        SITE_CONFIG.bank.branch || "";

    }


    if(bankAccNum){

      bankAccNum.textContent =
        SITE_CONFIG.bank.accountNumber || "";

    }


    if(bankIfsc){

      bankIfsc.textContent =
        SITE_CONFIG.bank.ifsc || "";

    }

  }


  /* REGISTRATION P. NUMBER */
  const regNo =
    document.getElementById("regNo2");

  if(regNo){

    regNo.textContent =
      SITE_CONFIG.registrationPNumber || "";

  }

}


/* ------------------------------------------------------------
   DONATION AMOUNTS
------------------------------------------------------------ */
function initDonationAmounts(){

  const wrap =
    document.getElementById("amountGrid");

  const custom =
    document.getElementById("customAmount");

  const continueButton =
    document.getElementById("continueDonation");

  const donationMethods =
    document.getElementById("donate-methods");


  if(!wrap) return;


  /*
   * Get donation amounts from SITE_CONFIG
   */
  let configuredAmounts = [
    500,
    1000,
    2500,
    5000
  ];


  if(
    typeof SITE_CONFIG !== "undefined" &&
    Array.isArray(SITE_CONFIG.donationAmounts) &&
    SITE_CONFIG.donationAmounts.length > 0
  ){

    configuredAmounts =
      SITE_CONFIG.donationAmounts;

  }


  /*
   * Create amount buttons dynamically
   */
  wrap.innerHTML = "";


  configuredAmounts.forEach((amount, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "amount-btn" +
      (index === 0 ? " active" : "");

    button.dataset.amount =
      amount;

    button.textContent =
      "₹" + Number(amount).toLocaleString("en-IN");


    wrap.appendChild(button);

  });


  let selectedAmount =
    Number(configuredAmounts[0]) || 500;


  const getButtons = () =>
    wrap.querySelectorAll(".amount-btn");


  /*
   * PRESET AMOUNT
   */
  getButtons().forEach(button => {

    button.addEventListener("click", function(){

      getButtons().forEach(btn =>
        btn.classList.remove("active")
      );

      this.classList.add("active");

      selectedAmount =
        Number(this.dataset.amount);

      if(custom){

        custom.value = "";

      }

    });

  });


  /*
   * CUSTOM AMOUNT
   */
  if(custom){

    custom.addEventListener("input", function(){

      const value =
        Number(this.value);

      if(value > 0){

        selectedAmount =
          value;

        getButtons().forEach(btn =>
          btn.classList.remove("active")
        );

      }

    });

  }


  /*
   * CONTINUE
   */
  if(continueButton){

    continueButton.addEventListener(
      "click",
      function(){

        let amount =
          Number(custom ? custom.value : 0);


        /*
         * If custom amount is empty,
         * use selected preset amount.
         */
        if(!amount || amount <= 0){

          amount =
            selectedAmount;

        }


        /*
         * Validate
         */
        if(!amount || amount <= 0){

          const isMarathi =
            document.documentElement
              .getAttribute("data-lang") === "mr";


          alert(
            isMarathi
              ? "कृपया देणगीची रक्कम निवडा."
              : "Please select a donation amount."
          );

          return;

        }


        /*
         * Save donation amount
         */
        sessionStorage.setItem(
          "donationAmount",
          String(amount)
        );


        /*
         * Display selected amount if
         * an element exists.
         */
        const selectedAmountDisplay =
          document.getElementById(
            "selectedDonationAmount"
          );


        if(selectedAmountDisplay){

          selectedAmountDisplay.textContent =
            "₹" +
            Number(amount).toLocaleString("en-IN");

        }


        /*
         * Scroll to donation methods
         */
        if(donationMethods){

          donationMethods.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }
    );

  }

}


/* ------------------------------------------------------------
   GENERAL FORM VALIDATION
------------------------------------------------------------ */
function initForm(formId){

  const form =
    document.getElementById(formId);

  if(!form) return;


  const success =
    form.querySelector(".form-success");


  form.addEventListener(
    "submit",
    function(event){

      event.preventDefault();

      let valid = true;


      form
        .querySelectorAll("[required]")
        .forEach(field => {

          const errorEl =
            field
              .closest(".form-field")
              ?.querySelector(".form-error");


          let message = "";


          if(!field.value.trim()){

            message =
              document.documentElement
                .getAttribute("data-lang") === "mr"
                ? "ही माहिती आवश्यक आहे."
                : "This field is required.";

          }


          else if(
            field.type === "email" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
              field.value
            )
          ){

            message =
              document.documentElement
                .getAttribute("data-lang") === "mr"
                ? "कृपया वैध ईमेल टाका."
                : "Please enter a valid email.";

          }


          else if(
            field.type === "tel" &&
            !/^[0-9+\s-]{7,15}$/.test(
              field.value
            )
          ){

            message =
              document.documentElement
                .getAttribute("data-lang") === "mr"
                ? "कृपया वैध फोन नंबर टाका."
                : "Please enter a valid phone number.";

          }


          if(message){

            valid = false;

          }


          if(errorEl){

            errorEl.textContent =
              message;

          }

        });


      if(!valid) return;


      form.reset();


      if(success){

        success.style.display =
          "block";

      }

    }
  );

}


/* ------------------------------------------------------------
   PAGE INITIALIZATION
------------------------------------------------------------ */
function initPage(){

  initCounters();

  initGallery();

  initDonationDetails();

  initDonationAmounts();

}
