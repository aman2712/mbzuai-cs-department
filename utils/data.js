import { FileText, University, Users } from "lucide-react";

export const POSTS = [
  {
    id: "1",
    title: "Inside the New AI & Systems Lab",
    excerpt:
      "A look at the research problems our lab is exploring—from reliable LLMs to green data centers.",
    cover:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    date: "2025-03-06",
    readMins: 6,
    author: {
      name: "Chun Jason Xue",
      avatar: "https://ui-avatars.com/api/?name=CJX",
    },
    tags: ["Research", "AI", "Systems"],
    layout: "wide",
  },
  {
    id: "2",
    title: "Why Computer Science? A Student Perspective",
    excerpt:
      "Four reasons our undergrads say CS transforms how they think and build.",
    cover:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1600&auto=format&fit=crop",
    date: "2025-02-21",
    readMins: 4,
    author: {
      name: "A. Mahmoud",
      avatar: "https://ui-avatars.com/api/?name=AM",
    },
    tags: ["Student Life", "Opinion"],
    layout: "tall",
  },
  {
    id: "3",
    title: "How We Teach: From Theory to Practice",
    excerpt:
      "Our studio-style courses blend fundamentals with projects for real partners.",
    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    date: "2024-12-10",
    readMins: 7,
    author: {
      name: "Dept. Teaching Team",
      avatar: "https://ui-avatars.com/api/?name=DT",
    },
    tags: ["Teaching", "Curriculum"],
    layout: "wide",
  },
];

export const CHAIR = {
  name: "Prof. Xiaosong Ma",
  title: "Department Chair, Computer Science",
  email: "chair@university.edu",
  linkedin: "#",
  profile: "#",
  portrait: "/faculty/xiaosong.jpg",
  intro:
    "Our department stands at the intersection of algorithms, systems, and intelligence. We are committed to research that advances the state of the art - and education that empowers students to build responsibly at scale.",
  message:
    "This year we're focused on three pillars: strengthening rigorous fundamentals in theory and systems; advancing interdisciplinary AI with scientists and society; and fostering an open, collaborative culture that accelerates discovery. We invite you to explore our programs, join our seminars, and collaborate with our labs as we deliver learning that blends theory with real-world projects, prioritize responsible, energy-aware AI systems, and grow open research through strong industry partnerships.",
  stats: [
    { label: "Faculty", value: "24+", icon: Users },
    { label: "Graduate Students", value: "120+", icon: University },
    { label: "Top-venue papers", value: "85", icon: FileText },
  ],
};

export const faculty = [
  {
    name: "Abdulrahman Mahmoud",
    title: "Assistant Professor of Computer Science",
    image: "/faculty/abdulrahman.jpg",
  },
  {
    name: "Apostolos Papadopoulos",
    title: "Visiting Professor of Practice",
    image: "/faculty/apostolos.png",
  },
  {
    name: "Chun Jason Xue",
    title: "Professor of Computer Science",
    image: "/faculty/chun.jpg",
  },
  {
    name: "David Basin",
    title: "Professor of Computer Science",
    image: "/faculty/david.jpg",
  },
  {
    name: "Joshua Bakita",
    title: "Assistant Professor of Computer Science",
    image: "/faculty/joshua.png",
  },
  {
    name: "Lingqi Yan",
    title: "Associate Professor of Computer Science",
    image: "https://sites.cs.ucsb.edu/~lingqi/images/lingqi_v5.jpg",
  },
  {
    name: "Saravanan Thirumuruganathan",
    title: "Associate Professor of Practice",
    image: "/faculty/saravanan.png",
  },
  {
    name: "Steve Liu",
    title:
      "Associate Vice President of Research and Professor of Computer Science and Machine Learning",
    image: "/faculty/steve.png",
  },
  {
    name: "Ting Yu",
    title:
      "Program Director, Master of Applied AI and Professor of Computer Science",
    image: "/faculty/ting.jpg",
  },
  {
    name: "Xiaosong Ma",
    title: "Department Chair and Professor of Computer Science",
    image: "/faculty/xiaosong.jpg",
  },
  {
    name: "Youcheng Sun",
    title: "Assistant Professor of Computer Science",
    image: "/faculty/youcheng.png",
  },
];

export const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Programs", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "Research", href: "#" },
  { label: "Admissions", href: "#" },
  { label: "Blog", href: "#" },
];

export const resources = [
  { label: "Undergraduate Handbook", href: "#" },
  { label: "Graduate Handbook", href: "#" },
  { label: "Course Catalog", href: "#" },
  { label: "Advising", href: "#" },
  { label: "Jobs & Internships", href: "#" },
  { label: "Contact", href: "#" },
];

export const NEWS = [
  {
    id: "n1",
    title: "CS Lab Wins Best Paper at NeurIPS 2025",
    summary:
      "Our AI Systems group received the Best Paper award for work on memory-efficient LLM training.",
    date: "2025-03-08",
    tag: "Research",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n2",
    title: "New Robotics Studio Opens for Student Projects",
    summary:
      "A hands-on space with motion capture, edge GPUs, and rapid prototyping tools.",
    date: "2025-02-17",
    tag: "Campus",
    image:
      "https://staticcdn.mbzuai.ac.ae/mbzuaiwpprd01/2025/04/sidekicks-top-10-6809f653dadd6.jpg",
    href: "#",
  },
  {
    id: "n3",
    title: "Five CS PhD Candidates Receive Prestigious Fellowships",
    summary:
      "Funding supports work in NLP robustness, green computing, and human-AI collaboration.",
    date: "2025-02-02",
    tag: "Awards",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n4",
    title: "Partnership Announced with National Research Center",
    summary:
      "Joint programs will accelerate research on trustworthy AI for science.",
    date: "2025-01-20",
    tag: "Partnerships",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "n5",
    title: "CS Department Launches Responsible AI Certificate",
    summary:
      "A new cross-disciplinary certificate focusing on safety, ethics, and energy-aware AI design.",
    date: "2025-03-25",
    tag: "Announcement",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    href: "#",
  },
];

export const EVENTS = [
  {
    id: "e1",
    title: "Distinguished Lecture: Efficient AI Systems",
    date: "2025-03-28T15:00:00",
    duration: "60 min",
    location: "Auditorium A",
    type: "Lecture",
    href: "#",
  },
  {
    id: "e2",
    title: "Seminar: Data-centric Evaluation for Robust NLP",
    date: "2025-03-14T11:00:00",
    duration: "45 min",
    location: "Room 3.210 / Zoom",
    type: "Seminar",
    href: "#",
  },
  {
    id: "e3",
    title: "Grad Open House & Lab Tours",
    date: "2025-04-05T10:00:00",
    duration: "3 hrs",
    location: "Engineering Building",
    type: "Open House",
    href: "#",
  },
  {
    id: "e4",
    title: "Workshop: Responsible, Energy-Aware AI",
    date: "2025-04-18T09:30:00",
    duration: "Half-day",
    location: "Innovation Hub",
    type: "Workshop",
    href: "#",
  },
];
