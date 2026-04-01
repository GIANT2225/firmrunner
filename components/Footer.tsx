import { Logo } from "./Navbar";

export const Footer = () => (
  <footer className="py-24 border-t border-zinc-900 bg-black">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <Logo />
          <div className="mt-12 flex flex-col gap-3">
            <img src="/GIANT logo.PNG" alt="GIANT logo" className="h-[22px] opacity-80 w-fit" />
            <p className="text-sm text-zinc-500">Systems that run firm operations.</p>
          </div>
        </div>
        <div className="md:text-right">
          <a href="mailto:giantlabs25@gmail.com" className="text-sm text-zinc-500 hover:text-white transition-all duration-300 ease-out">giantlabs25@gmail.com</a>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-500">© 2026 GIANT. All rights reserved.</p>
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">FirmRunner by GIANT</p>
      </div>
    </div>
  </footer>
);
