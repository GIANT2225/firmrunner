import { Link } from "react-router-dom";

export const FinalCTA = () => (
  <section className="bg-black py-28">
    <div className="max-w-3xl mx-auto px-6 text-center">

      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Start removing admin work from your firm
      </h2>

      <p className="mt-6 text-zinc-400">
        We are onboarding a small number of firms during development.
      </p>

      <Link to="/apply" className="mt-10 inline-block bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 ease-out hover:translate-y-[-2px]">
        Request early access
      </Link>

    </div>
  </section>
);
