import { Link } from "react-router-dom";

export const Logo = () => (
  <div className="flex items-center gap-3 text-white font-medium">
    <img src="/Firmrunner.PNG" alt="FirmRunner logo" className="h-6" />
    <span>FirmRunner</span>
  </div>
);

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur border-b border-zinc-900 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="hover:opacity-80 transition-all duration-300 ease-out">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#how-it-works" className="hover:text-white transition-all duration-300 ease-out">How it works</a>
          <a href="#pricing" className="hover:text-white transition-all duration-300 ease-out">Pricing</a>
          <Link to="/investors" className="hover:text-white transition-all duration-300 ease-out">Investors</Link>
        </div>

        <Link to="/apply" className="bg-white text-black px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-all duration-300 ease-out hover:translate-y-[-2px]">
          Request early access
        </Link>

      </div>
    </nav>
  );
};
