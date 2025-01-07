// import moviecineProject from "/images/project.jpg";
import moviecineVideo from "/videos/moviecine-video.mp4";
import splitsyVideo from "/videos/splitsy-video.mp4";
import mernstoreyVideo from "/videos/mernstore-video.mp4";

export const navLinks = [
  {
    id: 1,
    label: "Welcome",
    path: "#",
  },
  {
    id: 2,
    label: "About Me",
    path: "#about",
  },
  {
    id: 3,
    label: "My Projects",
    path: "#projects",
  },
  {
    id: 4,
    label: "Contact",
    path: "#contact",
  },
];

export const projects = [
  {
    id: 1,
    label: "Movicine",
    tech: [
      "next.js",
      "typescript",
      "appwrite",
      "tailwindcss",
      "zod",
      "react hook form",
      "shadcn",
      "tmdb api",
    ],
    link: "https://moviecine-app.vercel.app/",
    video: moviecineVideo,
  },
  {
    id: 2,
    label: "Splitsy",
    tech: [
      "react.js",
      "typescript",
      "firebase",
      "tailwindcss",
      "tanstack query",
      "shadcn",
      "react hook form",
      "zod",
    ],
    link: "https://splitsy-app.vercel.app/",
    video: splitsyVideo,
  },
  {
    id: 3,
    label: "Mernstore",
    tech: [
      "react.js",
      "typescript",
      "mongodb",
      "node.js",
      "express.js",
      "sass",
      "stripe",
    ],
    link: "https://mern-store-app.netlify.app/",
    video: mernstoreyVideo,
  },
];

export const techStack = [
  "react.js",
  "next.js",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "sass",
  "tailwindcss",
  "git",
  "tanstack query",
  "firebase",
  "appwrite",
  "shadcn/ui",
  "mongodb",
  "react hook form",
  "zod",
];
