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
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const lenis = new Lenis();
	lenis.on("scroll", () => {
		ScrollTrigger.update;
	});
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return (
		// TODO: overflow-x-hidden niszczy nachodzący scroll w techstack i contact
		<main className="min-h-screen w-screen">
			<div className="px-4 2lg:px-12 overflow-x-hidden">
				<Nav />
				<MobileMenu />
				<Hero />
				<About />
			</div>
			<Projects />
			<div className="relative">
				<div className="md:sticky 2lg:min-h-[60vh] top-0 z-10 flex flex-col justify-center gap-12 py-12 px-4 2lg:px-12 overflow-x-hidden">
					<TechStack />
				</div>
				<Contact />
			</div>
			<Footer />
		</main>
	);
}

export default App;
