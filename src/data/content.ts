export interface ServiceItem {
  id: string;
  name: string;
  starting_price_pkr: number;
  price: string;
  delivery_time: string;
  short_description: string;
  long_description: string;
  pricing_note: string;
  client_gets: string[];
  icon_suggestion: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  status: string;
  description: string;
  cta: string;
  url: string;
  image?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  business: string;
  review: string;
}

export const SITE_DATA = {
  brand: {
    name: "HALIM.DEV",
    domain: "https://halim.dev",
    location: {
      city: "Kotri",
      district: "Jamshoro",
      province: "Sindh",
      country: "Pakistan",
      formatted: "Kotri, Jamshoro, Sindh, Pakistan"
    },
    profession: "Web Developer & Digital Creator",
    positioning: "Professional website development for businesses, institutes and professionals in Pakistan"
  },

  taglines: [
    "Clean Code. Premium Design. Business Growth.",
    "Where Clean Code Meets Premium Digital Design.",
    "Building Better Websites. Growing Better Businesses."
  ],

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "WEB DEVELOPMENT & DIGITAL CREATION",
    headline: "Professional Websites That Build Trust and Grow Your Business.",
    subheadline: "I design and develop clean, modern and high-performing websites for businesses, institutes and professionals across Pakistan.",
    primary_cta: {
      text: "Hire Me",
      href: "#contact"
    },
    secondary_cta: {
      text: "View My Work",
      href: "#portfolio"
    }
  },

  about: {
    title: "About HALIM.DEV",
    content: "HALIM.DEV is a personal web development brand based in Kotri, Jamshoro, Pakistan, focused on creating professional digital experiences for businesses, educational institutes and professionals. As a Web Developer & Digital Creator, I combine clean development, modern visual design and business-focused thinking to build websites that are more than just attractive pages. Every project is designed around a clear purpose: building credibility, communicating value and helping clients establish a stronger online presence. From business websites and institute platforms to personal portfolios and high-converting landing pages, I create responsive and user-friendly digital solutions tailored to each client's goals. My approach is simple: understand the idea, plan the right solution, build it professionally, refine every detail and launch with confidence. HALIM.DEV aims to make quality web development accessible to growing businesses and professionals throughout Pakistan.",
    mission: {
      title: "Our Mission",
      content: "To help Pakistani businesses, institutes and professionals build a credible online presence through clean, modern and purpose-driven websites."
    },
    vision: {
      title: "Our Vision",
      content: "To become a trusted digital development brand in Pakistan known for premium design, reliable development and websites that create measurable business value."
    },
    core_values: [
      {
        title: "Quality",
        description: "Every website is built with attention to design, functionality and user experience."
      },
      {
        title: "Simplicity",
        description: "Clean interfaces and clear communication make websites easier to use and understand."
      },
      {
        title: "Integrity",
        description: "Transparent communication, realistic commitments and professional conduct guide every project."
      },
      {
        title: "Innovation",
        description: "Modern technologies and creative thinking are used to deliver relevant digital solutions."
      },
      {
        title: "Growth",
        description: "Every website is developed with the client's long-term digital and business goals in mind."
      }
    ] as CoreValue[]
  },

  services: [
    {
      id: "business-website",
      name: "Business Website Development",
      starting_price_pkr: 25000,
      price: "Starting From PKR 25,000",
      delivery_time: "5–10 working days",
      short_description: "A professional, responsive website designed to establish credibility, showcase your services and help potential customers easily understand and contact your business.",
      long_description: "Give your business a professional online identity with a modern website built around your brand and customers. This service is ideal for shops, clinics, salons, agencies and other growing businesses that need a credible digital presence. The website will clearly present your services, business information, contact details and key value propositions while maintaining a clean and responsive design across mobile, tablet and desktop devices. The goal is to turn your website into a useful business asset that builds trust and makes it easier for potential customers to take action.",
      pricing_note: "These are starting prices for standard projects. Final price depends on pages, features and custom requirements.",
      client_gets: [
        "Professional custom website design",
        "Mobile, tablet and desktop responsiveness",
        "Business services and information sections",
        "WhatsApp and contact integration",
        "Basic SEO-friendly structure"
      ],
      icon_suggestion: "Building2"
    },
    {
      id: "institute-website",
      name: "Institute & Coaching Center Website",
      starting_price_pkr: 30000,
      price: "Starting From PKR 30,000",
      delivery_time: "7–14 working days",
      short_description: "A structured educational website for schools, academies, coaching centers and institutes to present programs, faculty, admissions and important information professionally.",
      long_description: "Build a stronger digital presence for your educational institute with a professional and easy-to-navigate website. The platform can showcase courses, programs, faculty, admissions information, institute achievements, contact details and other important resources. Designed for schools, academies, coaching centers and training institutes, the website helps parents, students and visitors quickly find the information they need. The design can be customized to match your institute's identity while maintaining a modern, trustworthy and responsive experience on all devices.",
      pricing_note: "These are starting prices for standard projects. Final price depends on pages, features and custom requirements.",
      client_gets: [
        "Professional institute website design",
        "Courses and programs section",
        "Admissions and contact information",
        "Faculty or team presentation",
        "Mobile-responsive and SEO-friendly structure"
      ],
      icon_suggestion: "GraduationCap"
    },
    {
      id: "portfolio-website",
      name: "Personal Portfolio Website",
      starting_price_pkr: 18000,
      price: "Starting From PKR 18,000",
      delivery_time: "4–7 working days",
      short_description: "A professional personal website that presents your skills, experience, services and achievements while creating a strong digital identity for potential clients or employers.",
      long_description: "Turn your professional identity into a polished online presence with a personal portfolio website. This service is designed for teachers, lawyers, freelancers, consultants, designers and other professionals who want a dedicated platform to showcase their expertise. Your website can include an introduction, professional experience, services, skills, achievements, projects, testimonials and contact options. A clean structure and modern design will make it easier for visitors to understand your expertise and take the next step, whether that means contacting you, hiring you or learning more about your work.",
      pricing_note: "These are starting prices for standard projects. Final price depends on pages, features and custom requirements.",
      client_gets: [
        "Professional personal branding website",
        "About and professional profile section",
        "Services, skills and experience sections",
        "Portfolio or achievement showcase",
        "Direct contact and WhatsApp integration"
      ],
      icon_suggestion: "UserRound"
    },
    {
      id: "landing-page",
      name: "High-Converting Landing Page",
      starting_price_pkr: 12000,
      price: "Starting From PKR 12,000",
      delivery_time: "2–4 working days",
      short_description: "A focused landing page designed around one clear offer, strong messaging and strategic calls-to-action to turn visitors into leads, inquiries or customers.",
      long_description: "Launch a focused digital campaign with a landing page built around one specific product, service or offer. Instead of overwhelming visitors with unnecessary information, the page uses clear messaging, persuasive sections, strong visual hierarchy and strategically placed calls-to-action. It can be used for product launches, service promotions, advertising campaigns, lead generation or WhatsApp inquiries. The design will be responsive and optimized for a smooth user experience, helping your audience understand the offer quickly and take the intended action.",
      pricing_note: "These are starting prices for standard projects. Final price depends on pages, features and custom requirements.",
      client_gets: [
        "Conversion-focused page structure",
        "Clear headline and value proposition",
        "Strategic call-to-action sections",
        "Mobile-responsive design",
        "WhatsApp or lead-generation integration"
      ],
      icon_suggestion: "MousePointerClick"
    }
  ] as ServiceItem[],

  process: [
    {
      step: 1,
      title: "Idea & Plan",
      description: "We discuss your goals, audience, requirements and content, then create a clear project direction."
    },
    {
      step: 2,
      title: "Design & Build",
      description: "The website is designed and developed with a focus on clean visuals, usability, responsiveness and performance."
    },
    {
      step: 3,
      title: "Review & Launch",
      description: "We review the final website, make necessary refinements and prepare it for a professional launch."
    }
  ] as ProcessStep[],

  why_choose_me: [
    {
      title: "Professional Design",
      description: "Modern and clean interfaces designed to create a strong first impression."
    },
    {
      title: "Business-Focused Approach",
      description: "Websites are built around your goals rather than just visual appearance."
    },
    {
      title: "Mobile Responsive",
      description: "Your website will work smoothly across smartphones, tablets and desktop screens."
    },
    {
      title: "Clean Development",
      description: "Well-structured development focused on maintainability, usability and performance."
    },
    {
      title: "Clear Communication",
      description: "Simple and transparent communication throughout the project."
    },
    {
      title: "Made for Pakistan",
      description: "Solutions designed with the needs of Pakistani businesses, institutes and professionals in mind."
    }
  ] as WhyChooseItem[],

  portfolio: [
    {
      title: "The Talent Master Institute",
      category: "Institute & Coaching Center Website",
      status: "Completed / Featured Project",
      description: "A professional educational website designed to present an institute's programs, information, identity and contact options in a structured digital experience.",
      cta: "View Live Project",
      url: "https://charming-zabaione-b9ad21.netlify.app",
      image: "/src/assets/images/project_institute_mockup_1791094261069.jpg",
      featured: true
    },
    {
      title: "Coming Soon",
      category: "Upcoming Project",
      status: "Coming Soon",
      description: "A new digital project is currently being prepared. More details will be revealed soon.",
      cta: "Stay Tuned",
      url: "#",
      image: "/src/assets/images/project_abstract_minimal_1791094275885.jpg",
      featured: false
    }
  ] as PortfolioItem[],

  testimonials: [
    {
      name: "Management",
      role: "Management",
      business: "The Talent Master Institute",
      review: "HALIM.DEV understood exactly what we needed and turned our idea into a professional website. The communication was clear, the design is modern, and now our students can easily understand our institute and get in touch with us. Highly recommended!"
    }
  ] as TestimonialItem[],

  contact: {
    title: "Let's Build Your Website",
    subtitle: "Have a business, institute or personal brand that needs a professional online presence? Tell me about your project and let's discuss the right solution.",
    location: "Kotri, Jamshoro, Sindh, Pakistan",
    email: "halim.dev.official@gmail.com",
    whatsapp: {
      number: "03253045617",
      display_text: "Chat on WhatsApp",
      url: "https://wa.me/923253045617"
    }
  },

  contact_form: {
    title: "Start Your Project",
    subtitle: "Fill in the details below and I'll get back to you with the next steps.",
    fields: [
      {
        name: "full_name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },
      {
        name: "business_name",
        label: "Business Name",
        type: "text",
        placeholder: "Enter your business or organization name",
        required: false
      },
      {
        name: "whatsapp_number",
        label: "WhatsApp Number",
        type: "tel",
        placeholder: "03XX XXXXXXX",
        required: true
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "you@example.com",
        required: true
      },
      {
        name: "website_type",
        label: "What type of website do you need?",
        type: "select",
        placeholder: "Select a website type",
        options: [
          "Business Website Development",
          "Institute & Coaching Center Website",
          "Personal Portfolio Website",
          "High-Converting Landing Page"
        ],
        required: true
      },
      {
        name: "budget",
        label: "Your Budget",
        type: "select",
        placeholder: "Select your estimated budget",
        options: [
          "Under PKR 15,000",
          "PKR 15,000 – 30,000",
          "PKR 30,000 – 50,000",
          "PKR 50,000 – 100,000",
          "PKR 100,000+",
          "Not sure yet"
        ],
        required: true
      },
      {
        name: "project_details",
        label: "Project Details",
        type: "textarea",
        placeholder: "Tell me about your business, website requirements, pages, features and goals...",
        required: true
      }
    ],
    submit_button: "Send Project Request",
    success_message: "Thank you for contacting HALIM.DEV. Your project request has been received. I'll review your requirements and get back to you soon."
  },

  work_process_instructions: [
    "Submit your project requirements through the contact form.",
    "I'll review your requirements and clarify any important details.",
    "We'll finalize the website scope, features, timeline and pricing.",
    "Development begins after project confirmation and required content/assets are provided.",
    "You'll review the website, request reasonable revisions and approve the final version for launch."
  ],

  pricing_note: "These are starting prices for standard projects. Final price depends on pages, features and custom requirements.",

  social_links: {
    facebook: null,
    instagram: "https://instagram.com/thehalim.dev",
    linkedin: null,
    github: "https://github.com/halim293"
  },

  whatsapp_cta: {
    heading: "Have a Project in Mind?",
    text: "Let's discuss your website idea and find the right digital solution for your business.",
    button_text: "Hire Me on WhatsApp",
    url: "https://wa.me/923253045617"
  },

  footer: {
    text: "© 2026 HALIM.DEV. All rights reserved.",
    subtext: "Designed & developed by HALIM.DEV",
    location: "Kotri, Jamshoro, Pakistan"
  }
};
