export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="w-full px-6 lg:px-12 xl:px-16 py-4 flex justify-between items-center">
        <img
          src="/images/logo-icon.png"
          alt="Quellrite Logo"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        />

        <div className="flex gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-[var(--gold)]">Game</a>
          <a href="https://drive.google.com" className="hover:text-[var(--gold)]">Cards</a>
          <a href="#" className="hover:text-[var(--gold)]">Kickstarter</a>
        </div>
      </div>
    </nav>
  );
}
