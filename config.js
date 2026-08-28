/**
 * ============================================================
 * MAI VRIDDHASHRAM — CENTRAL SITE CONFIGURATION
 * ============================================================
 * Central configuration for the entire website.
 * Edit this file when you need to update organisation,
 * contact, donation or social-media information.
 * ============================================================
 */

const SITE_CONFIG = {

  // ------------------------------------------------------------
  // ORGANISATION
  // ------------------------------------------------------------
  organizationName: {
    mr: "माई वृद्धाश्रम",
    en: "Mai Vriddhashram"
  },

  legalOrganizationName: {
    mr: "बोधी ट्री एज्युकेशनल फाऊंडेशन",
    en: "Bodhi Tree Educational Foundation"
  },

  runBy: {
    mr: "बोधी ट्री एज्युकेशनल फाऊंडेशन द्वारा संचालित",
    en: "Run by Bodhi Tree Educational Foundation"
  },

  establishedDate: "11-09-2015",

  city: {
    mr: "छत्रपती संभाजीनगर, महाराष्ट्र",
    en: "Chhatrapati Sambhajinagar, Maharashtra, India"
  },


  // ------------------------------------------------------------
  // MAI VRIDDHASHRAM INFORMATION
  // ------------------------------------------------------------
  vriddhashram: {

    establishedYear: 2020,

    currentMothers: 25,

    currentCapacity: 25,

    futureCapacity: 100,

    availableAreaSqFt: 2400,

    ownership: {
      mr: "संस्थेच्या मालकीची",
      en: "Owned by the organisation"
    },

    futureVision: {
      mr: "100 वृद्ध आजी-आजोबांसाठी सुरक्षित, सन्मानपूर्वक आणि सर्वसमावेशक निवास व काळजी सुविधा निर्माण करणे.",
      en: "To create safe, dignified and inclusive residential and care facilities for 100 elderly women and men."
    }

  },


  // ------------------------------------------------------------
  // CONTACT DETAILS
  // ------------------------------------------------------------
  address: "माई वृद्धाश्रम, प्लॉट क्र. 49, गल्ली नं. 8, आनंद नगर (शिवाजी नगर), गरखेडा परिसर, छत्रपती संभाजीनगर, महाराष्ट्र, भारत - 431009",

  phone: "8888125610",

  alternatePhone: "8421141104",

  whatsapp: "918888125610",

  email: "bodhitef@gmail.com",

  website: "https://ngobtefoundationindia.org",

  googleMapsLink: "https://maps.app.goo.gl/ZShVipRaBq5jzbAy8?g_st=aw",

  googleMapsEmbed: "",


  // ------------------------------------------------------------
  // REGISTRATION / LEGAL DETAILS
  // ------------------------------------------------------------
  registrationNumber: "705/15",

  registrationPNumber: "F-23015",

  ngoDarpanNumber: "MH/2022/0310125",

  panNumber: "AAETB1944J",

  registration12A: "AAETB1944JE2022101",

  registration80G: "AAETB1944JF2022101",

  csr1Number: "CSR00039216",

  isoCertificateNumber: "AQC21031125",

  taxBenefitStatus: {
    mr: "80G कर सवलत उपलब्ध",
    en: "80G Tax Benefit Available"
  },


  // ------------------------------------------------------------
  // GOVERNING BODY
  // ------------------------------------------------------------
  governingBody: {

    president: "श्री. रामदास आर. वाघमारे",

    vicePresident: "श्री. ऋत्विक आर. वाघमारे",

    secretary: "श्रीमती. मीरा के. अचलखांब",

    jointVicePresident: "श्रीमती. प्रेरणा एस. आझादे",

    treasurer: "श्री. अंशीराम आर. वाघमारे"

  },


  // ------------------------------------------------------------
  // DONATION — UPI
  // ------------------------------------------------------------
  upiId: "MAB.037326017310014@AXISBANK",

  qrCodeImage: "images/qr/upi-qr.png",


  // ------------------------------------------------------------
  // DONATION — BANK ACCOUNT
  // ------------------------------------------------------------
  bank: {

    accountName: "Mai Vriddhaashram",

    bankName: "Axis Bank",

    branch: "Garkheda Branch",

    accountNumber: "925020022604888",

    ifsc: "UTIB0001731"

  },


  // ------------------------------------------------------------
  // DONATION AMOUNTS
  // ------------------------------------------------------------
  donationAmounts: [
    500,
    1000,
    2500,
    5000
  ],


  // ------------------------------------------------------------
  // PAYMENT GATEWAY
  // ------------------------------------------------------------
  // Razorpay will be added later.
  onlinePaymentGatewayUrl: "",


  // ------------------------------------------------------------
  // SOCIAL MEDIA
  // ------------------------------------------------------------
  instagram: "https://www.instagram.com/maivridhashram?igsi=bTJhMnIydW5mbGhy",

  facebook: "https://www.facebook.com/share/1LNocfsJxi/",

  youtube: "https://youtube.com/@ngobtefoundationaurangabad3105?si=3gP6t1oPZurx1W5u",


  // ------------------------------------------------------------
  // IMPACT NUMBERS
  // ------------------------------------------------------------
  impact: {

    mothersSupported: "25",

    currentCapacity: "25",

    futureCapacity: "100",

    availableArea: "2400",

    yearsOfService: "6",

    mealsServed: "[XX]",

    healthActivities: "[XX]",

    volunteers: "[XX]"

  },


  // ------------------------------------------------------------
  // CURRENT YEAR
  // ------------------------------------------------------------
  currentYear: new Date().getFullYear()

};
