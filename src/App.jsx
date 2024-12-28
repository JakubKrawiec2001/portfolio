import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
	// const container = useRef();
	// const sectionOne = useRef();

	const lenis = new Lenis();
	lenis.on("scroll", () => {
		ScrollTrigger.update;
	});
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	// useGSAP(() => {
	// 	gsap.to(sectionOne.current, {
	// 		scale: 0.8,
	// 		rotate: "-10deg",
	// 		backgroundColor: "blue",
	// 		scrollTrigger: {
	// 			trigger: container.current,
	// 			start: "bottom top",
	// 			end: "top" + sectionOne.current.offsetWidth,
	// 			scrub: 1,
	// 			pin: true,
	// 			pinSpacing: true,
	// 			markers: true,
	// 		},
	// 	});
	// });

	return (
		<main className="min-h-screen w-screen">
			<div className="px-4 2lg:px-12">
				<Nav />
				<MobileMenu />
				<Hero />
				<About />
			</div>
			<Projects />
			<div className="relative">
				<div className="sticky min-h-[70vh] top-0 z-10 flex  flex-col justify-center gap-12 py-12 px-4 2lg:px-12">
					<TechStack />
				</div>
				<div className="relative bg-custom-white min-h-[100vh] flex items-center justify-center z-20 px-4 2lg:px-12">
					<p className="text-6xl text-custom-white">CONTACT</p>
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default App;
