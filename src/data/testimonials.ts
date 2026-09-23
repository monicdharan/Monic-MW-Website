import { DoctorTestimonial, ReviewScreenshot } from '../types';

export const doctorTestimonials: DoctorTestimonial[] = [
  {
    id: "dr-avi-shah",
    doctorName: "Dr. Avi Shah",
    qualification: "MD, DM",
    specialty: "Medical Oncology",
    cityOrInstitution: "Ahmedabad / Mumbai",
    quote: "MedZen Writes provided outstanding support for our systematic review. Their biostatistical team handled the RevMan analysis and forest plots with remarkable precision, and the manuscript was accepted after minor revisions. Their medical insight saved us weeks of back-and-forth.",
    serviceType: "Systematic Review & Meta-Analysis",
    avatarImage: "/assets/images/team_doctor_1.jpg",
    verified: true,
  },
  {
    id: "dr-bharath-ranadeepan",
    doctorName: "Dr. Bharath Ranadeepan",
    qualification: "MS, MCh",
    specialty: "Surgical Specialties",
    cityOrInstitution: "Chennai, Tamil Nadu",
    quote: "Balancing clinical residency duties with mandatory thesis deadlines is overwhelming. The MedZen team helped structure my observational study data, formatted all Master Data tables to university standards, and delivered well before my submission date.",
    serviceType: "Postgraduate Thesis Writing",
    avatarImage: "/assets/images/team_doctor_2.jpg",
    verified: true,
  },
  {
    id: "dr-sinjith-j",
    doctorName: "Dr. Sinjith J",
    qualification: "MD (General Medicine)",
    specialty: "Internal Medicine",
    cityOrInstitution: "Kerala",
    quote: "Their biostatistical report was thorough and transparent. They explained the exact reasoning for choosing non-parametric tests over parametric models, which helped me defend my thesis results during the departmental viva with complete confidence.",
    serviceType: "Medical Statistical Analysis",
    avatarImage: "/assets/images/team_doctor_3.jpg",
    verified: true,
  },
  {
    id: "dr-priya-nair",
    doctorName: "Dr. Priya Nair",
    qualification: "MS (OBG), DNB",
    specialty: "Obstetrics & Gynaecology",
    cityOrInstitution: "Bengaluru, Karnataka",
    quote: "I wanted to convert my completed 140-page dissertation into a journal manuscript. MedZen condensed the findings down to a 3,200-word paper while preserving the primary clinical message. The paper is now published in an indexed journal.",
    serviceType: "Thesis to Manuscript Conversion",
    avatarImage: "/assets/images/team_doctor_4.jpg",
    verified: true,
  },
];

export const googleReviews: ReviewScreenshot[] = [
  {
    id: "google-avi-shah",
    image: "/assets/images/google-reviews/google-review-avi-shah.png",
    authorName: "Dr. Avi Shah",
    caption: "Google Review: Verified feedback on research publication and editorial quality.",
    type: "google",
    stars: 5,
  },
  {
    id: "google-bharath",
    image: "/assets/images/google-reviews/google-review-bharath.png",
    authorName: "Bharath Ranadeepan",
    caption: "Google Review: Timely delivery and meticulous thesis formatting.",
    type: "google",
    stars: 5,
  },
  {
    id: "google-sinjith",
    image: "/assets/images/google-reviews/google-review-sinjith.png",
    authorName: "sinjith J",
    caption: "Google Review: Medical postgraduate thesis assistance and statistics clarity.",
    type: "google",
    stars: 5,
  },
];

export const whatsappReviews: ReviewScreenshot[] = [
  {
    id: "whatsapp-feedback-1",
    image: "/assets/images/testimonials/whatsapp_feedback_card_1.png",
    authorName: "PG Resident Client",
    caption: "WhatsApp Conversation: Thesis editing, plagiarism check, and prompt delivery.",
    type: "whatsapp",
  },
  {
    id: "whatsapp-feedback-2",
    image: "/assets/images/testimonials/whatsapp_feedback_card_2.png",
    authorName: "Clinical Author",
    caption: "WhatsApp Conversation: Appreciation for writing quality and quick turnaround.",
    type: "whatsapp",
  },
  {
    id: "whatsapp-feedback-3",
    image: "/assets/images/testimonials/whatsapp_feedback_card_3.png",
    authorName: "ENT Department Fellow",
    caption: "WhatsApp Conversation: Departmental presentation & hard copy thesis formatting.",
    type: "whatsapp",
  },
];
