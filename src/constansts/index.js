import moviecineProject from "/images/project.jpg";

export const navLinks = [
	{
		id: 1,
		label: "Welcome",
		path: "/",
	},
	{
		id: 2,
		label: "About Me",
		path: "/about",
	},
	{
		id: 3,
		label: "My Projects",
		path: "/projects",
	},
	{
		id: 4,
		label: "Contact",
		path: "/contact",
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
			"tmdb api",
		],
		link: "https://moviecine-app.vercel.app/",
		img: moviecineProject,
	},
];
