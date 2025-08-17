import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Luis Felipe",
  lastName: "Gutiérrez Rodríguez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer – Systems Engineering",
  avatar: "/images/pfpp.jpeg",
  email: "elpipegutierrez@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/luisfgutierrezr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/luisfgutierrezr/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building innovative solutions and participating in collaborative teams to deliver high quality products</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Crossword Solver with AI</strong></>,
    href: "/work/crossword-solver-app",
  },
  subline: (
    <>
      I'm Luis Felipe, a software and systems engineer student, specializing in web development, artificial intelligence, and data visualization.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a software and systems engineer student, specializing in web development, artificial intelligence, and data visualization. In my career I am cultivating my passion for technology and development, while also continuously learning new skills in developing innovative solutions and participating in collaborative teams to deliver high quality products. I have abilities in problem solving, decision making and acting in teamwork.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Pontificia Universidad Javeriana",
        timeframe: "February 2025 – May 2025",
        role: "Full-stack developer",
        achievements: [
          <>
            User story approach
          </>,
          <>
            App design with Figma
          </>,
          <>
            Connection to the database from the backend with Spring boot
          </>,
          <>
            Definition of the frontend with Angular
          </>,
          <>
            Unit, E2E, and automated testing
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Freelance",
        timeframe: "February 2025 – May 2025",
        role: "Software developer",
        achievements: [
          <>
            Database manipulation
          </>,
          <>
            App design with Next.js
          </>,
          <>
            Connection to AI APIs
          </>,
          <>
            Deployment with Vercel
          </>,
        ],
        images: [],
      },
      {
        company: "Pontificia Universidad Javeriana",
        timeframe: "August 2024 – Present",
        role: "Academic monitoring",
        achievements: [
          <>
            Resolve technical questions
          </>,
          <>
            Assist in the development of academic projects
          </>,
          <>
            Explain algorithms, data structures, and programming fundamentals
          </>,
          <>
            Support the teacher in the evaluation of laboratories and projects
          </>,
          <>
            Assertive communication and problem solving
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Pontificia Universidad Javeriana",
        description: <>Career in Systems Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>JavaScript, TypeScript, Java, Python, C++, C#, Kotlin, R</>,
        images: [],
      },
      {
        title: "Web Technologies",
        description: <>Angular, React.js, Node.js, Next.js, HTML, CSS, Spring Boot, JPA, Cypress.io, UX/UI design, Figma</>,
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: <>AWS, Vercel, Firebase</>,
        images: [],
      },
      {
        title: "DevOps Tools",
        description: <>Docker, Kubernetes, Jenkins, GitHub, Postman, JMeter, SonarQube</>,
        images: [],
      },
      {
        title: "Database Systems",
        description: <>MySQL, PostgreSQL, MongoDB, Supabase</>,
        images: [],
      },
      {
        title: "Soft Skills",
        description: <>Communication, Problem Solving, Team Collaboration, Scrum methodology, Agile methodology, Continuous Learning</>,
        images: [],
      },
      {
        title: "Certifications",
        description: <>AWS Cloud Practitioner - Foundational</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
