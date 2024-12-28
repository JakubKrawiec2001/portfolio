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
				<div className="relative bg-custom-black min-h-[90vh] flex flex-col justify-center gap-24 z-20 py-12 px-4 2lg:px-12">
					<Contact />
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default App;
