import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./components/TechStack";

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
			<div className="relative h-[200vh] px-4 2lg:px-12">
				<TechStack />
				<div className="h-screen relative bg-custom-black z-20 flex items-center justify-center">
					<p className="text-6xl">CONTACT</p>
				</div>
			</div>
		</main>
	);
}

export default App;
