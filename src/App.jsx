import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden px-4 2lg:px-12">
      <Nav />
      <MobileMenu />
      <Hero />
    </main>
  );
}

export default App;
