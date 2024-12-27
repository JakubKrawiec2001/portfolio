import Lenis from "@studio-freight/lenis";
import About from "./components/About";
import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
	const lenis = new Lenis();
	lenis.on("scroll", () => {});
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return (
		<main className="min-h-screen w-screen overflow-x-hidden">
			<div className="px-4 2lg:px-12">
				<Nav />
				<MobileMenu />
				<Hero />
				<About />
			</div>
			<Projects />

			<div className="h-[50vh] w-screen bg-red-500"></div>
		</main>
	);
}

export default App;
