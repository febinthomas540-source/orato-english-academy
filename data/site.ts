export const site = {
  name: "ORATO English Academy",
  tagline: "Speak with Confidence. Lead with Excellence.",
  location: "Trivandrum, Kerala, India",
  founder: {
    name: "Meenakshi Sethulekshmi",
    role: "Founder & English Language Trainer",
    experience: "6 Years of Teaching Experience",
    qualifications: [
      "MA in English Language & Literature",
      "PG Diploma in Counselling Psychology",
      "MA in Clinical Psychology",
    ],
  },
  contact: {
    phone: "+91 7510149574",
    whatsapp: "917510149574",
    email: "meenakshilekshmi7447@gmail.com",
    maps: "https://maps.google.com/?q=Trivandrum,Kerala,India",
    instagram: "",
    facebook: "",
    youtube: "",
  },
  courses: [
    {
      title: "One-to-One English Coaching",
      fee: "₹2,000",
      cta: "Book One-to-One Consultation",
      features: ["5 live sessions", "45 minutes per session", "Online coaching", "Personalised assessment", "Individual learning plan", "Direct trainer attention", "Confidence and communication focus"],
    },
    {
      title: "Group English Coaching",
      fee: "₹2,000",
      cta: "Join a Group Consultation",
      features: ["8 live sessions", "Maximum 10 learners", "Online coaching", "Interactive group practice", "Guided speaking activities", "Small-batch attention", "Supportive learning environment"],
    },
  ],
};

export const navItems = ["Home", "About", "Founder", "Why ORATO", "Assessment", "Courses", "Testimonials", "FAQ", "Contact"];

export const features = [
  ["Brain", "Psychology-Informed Teaching", "Learning methods that consider confidence, mindset, and emotional comfort."],
  ["ShieldCheck", "Confidence-First Approach", "Communicate without fear of making mistakes."],
  ["UserRound", "Personal Attention", "Coaching adapted to individual needs, goals, and pace."],
  ["CalendarClock", "Flexible Scheduling", "Convenient online sessions designed around learners’ availability."],
  ["MessagesSquare", "Interactive Classes", "Conversation, guided practice, activities, and real-world situations."],
  ["Leaf", "No Stressful Homework", "Meaningful practice without overwhelming academic pressure."],
  ["BriefcaseBusiness", "Practical Communication", "English for conversations, interviews, studies, and workplaces."],
  ["UsersRound", "Small Batch Learning", "Limited groups ensure participation and individual support."],
] as const;

export const journey = ["Book a Free Consultation", "Initial Assessment", "Personalised Learning Plan", "Live Interactive Sessions", "Guided Practice", "Confidence Development", "Fluent and Effective Communication"];

export const skills = ["Spoken English", "Grammar", "Vocabulary", "Public Speaking", "Interview Preparation", "Communication Skills", "Confidence Building", "Mindfulness", "Personality Development", "Professional English"];

export const testimonials: { name: string; text: string; detail?: string }[] = [
  // Add real learner testimonials here, e.g.:
  // { name: "Priya S.", text: "I finally feel confident speaking in meetings.", detail: "Software Engineer, Trivandrum" },
];

export const assessmentQuestions = [
  { q: "Choose the correct sentence.", options: ["She don't like tea.", "She doesn't like tea.", "She not liking tea.", "She not likes tea."], correct: 1 },
  { q: "Fill the blank: \"I ___ to the market yesterday.\"", options: ["go", "gone", "went", "goes"], correct: 2 },
  { q: "Which word means \"very happy\"?", options: ["Furious", "Ecstatic", "Anxious", "Indifferent"], correct: 1 },
  { q: "Choose the correct question form.", options: ["Where you are going?", "Where are you going?", "Where you going are?", "You are going where?"], correct: 1 },
  { q: "\"He has been working here ___ 2019.\" Choose the right word.", options: ["for", "since", "from", "at"], correct: 1 },
  { q: "Pick the correctly spelled word.", options: ["Recieve", "Receive", "Receeve", "Receve"], correct: 1 },
  { q: "Choose the more natural sentence for a job interview.", options: ["I am having five years experience.", "I have five years of experience.", "I having experience five years.", "Since five years I have experience."], correct: 1 },
  { q: "\"Although it was raining, ___ we went out.\" What best completes this?", options: ["so", "but", "we", "(no word needed)"], correct: 3 },
] as const;

export const confidenceAreas = [
  "Speaking with strangers or new people",
  "Understanding fast, natural conversation",
  "Writing emails or messages professionally",
  "Speaking confidently in interviews or meetings",
] as const;

export const faqs = [
  ["Who can join ORATO English Academy?", "ORATO welcomes students, professionals, job seekers, homemakers, beginners, and anyone who wants to improve spoken or professional English."],
  ["Are the classes conducted online?", "Yes. Classes are conducted online, allowing learners to attend from anywhere."],
  ["Do I need to be fluent before joining?", "No. Programmes can support beginners as well as learners who understand English but want to communicate more confidently."],
  ["What happens during the free consultation?", "The consultation helps ORATO understand your current level, communication challenges, goals, availability, and preferred learning format."],
  ["Is homework compulsory?", "ORATO avoids stressful or excessive homework. Learners may receive simple, practical activities that support confidence and real-world communication."],
  ["How many learners are included in group classes?", "Group programmes are limited to a maximum of 10 learners."],
  ["What is the difference between one-to-one and group coaching?", "One-to-one coaching provides a fully personalised experience, while group coaching helps learners practise communication with others in a supportive small-batch environment."],
  ["Are IELTS and OET classes available?", "IELTS and OET programmes are planned for the future. Contact ORATO for updates."],
  ["How do I book a class?", "Book a free consultation through the website or contact ORATO directly on WhatsApp."],
] as const;
