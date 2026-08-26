/**
 * ============================================================
 * MAI VRIDDHASHRAM — CENTRAL SITE CONFIGURATION
 * ============================================================
 * Edit ONLY this file to update contact details, donation
 * information, and impact numbers across the entire website.
 * Every page reads from this single source of truth.
 *
 * IMPORTANT: Do not delete a key. If real data is not yet
 * available, leave the "[VERIFIED ...]" placeholder in place —
 * the design is built to display placeholders clearly until
 * they are replaced with confirmed information.
 * ============================================================
 */
const SITE_CONFIG = {
  organizationName: {
    mr: "माई वृद्धाश्रम",
    en: "Mai Vriddhashram"
  },
  runBy: {
    mr: "बोधी ट्री एज्युकेशनल फाउंडेशन द्वारा संचालित",
    en: "Run by Bodhi Tree Educational Foundation"
  },
  city: {
    mr: "छत्रपती संभाजीनगर, महाराष्ट्र",
    en: "Chhatrapati Sambhajinagar, Maharashtra, India"
  },

  // --- Contact details (replace placeholders with verified info) ---
  address: "[VERIFIED ADDRESS]",
  phone: "[VERIFIED PHONE NUMBER]",
  whatsapp: "[VERIFIED WHATSAPP NUMBER]", // digits only with country code, e.g. 919999999999
  email: "[VERIFIED EMAIL]",
  googleMapsLink: "[VERIFIED GOOGLE MAP LINK]",
  googleMapsEmbed: "", // paste a verified Google Maps embed src URL here when available

  // --- Registration / legal (do not fill until verified) ---
  registrationNumber: "[VERIFIED REGISTRATION NUMBER]",
  taxBenefitStatus: "[VERIFIED 80G/12A/FCRA STATUS]",

  // --- Social ---
  instagram: "[VERIFIED INSTAGRAM]",
  facebook: "[VERIFIED FACEBOOK]",

  // --- Donation details ---
  upiId: "MAB.037326017310014@AXISBANK",
qrCodeImage: "images/qr/upi-qr.png",
  bank: {
    accountName: "[VERIFIED ACCOUNT NAME]",
    bankName: "[VERIFIED BANK NAME]",
    accountNumber: "[VERIFIED ACCOUNT NUMBER]",
    ifsc: "[VERIFIED IFSC]"
  },
  donationAmounts: [500, 1000, 2500, 5000],
  onlinePaymentGatewayUrl: "", // add a verified payment gateway checkout link when ready

  // --- Impact numbers (leave as [XX] until confirmed by the organization) ---
  impact: {
    mothersSupported: "[XX]",
    mealsServed: "[XX]",
    healthActivities: "[XX]",
    yearsOfService: "[XX]",
    volunteers: "[XX]"
  },

  currentYear: new Date().getFullYear()
};
