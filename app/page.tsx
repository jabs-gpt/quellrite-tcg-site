export default function Home() {
  return (
    <main className="relative min-h-screen pt-32 bg-black text-white">
      <img
        src="/images/maynard.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      />
      <div className="relative z-10">
      {/* HERO */}
      <section className="text-center max-w-none mx-auto px-6 lg:px-12 xl:px-16 min-h-[calc(100vh-8rem)] flex flex-col justify-center py-32 2xl:py-40 relative">
        <img
          src="/images/wordmark-white.png"
          alt="Quellrite"
          className="mx-auto mb-8 w-80 md:w-96 lg:w-[28rem] 2xl:w-[36rem]"
        />

        <p className="text-white/80 text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-10 max-w-3xl mx-auto">
          Quellrite is a competitive strategy card game set in a world where aura is power.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <button className="px-8 py-3 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition">
            Kickstarter — Coming Soon
          </button>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 transition"
          >
            View Cards
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-6">
          {[
            ["Discord", "https://discord.gg/7jhjYDbpJt", "/images/socials/discord.png"],
            ["X", "https://x.com/quellrite", "/images/socials/x.png"],
            ["YouTube", "https://youtube.com/@quellrite", "/images/socials/youtube.png"],
          ].map(([name, link, icon]) => (
            <a
              key={name}
              href={link}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 shadow-md transition"
              aria-label={name}
            >
              <img src={icon} alt={name} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </section>

      {/* COLORS */}
      <section className="max-w-none mx-auto px-6 lg:px-12 xl:px-16 pb-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)] text-center mb-12">
          The Six Colors
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            ["Azure", "Scry", "See beyond the present and shape the future.", "azure"],
            ["Jade", "Rescue", "Preserve life and recover what was lost.", "jade"],
            ["Mindaro", "Cycle", "Rotate resources to maintain tempo.", "mindaro"],
            ["Kajah", "Forge", "Build forces and overwhelm your foes.", "kajah"],
            ["Crimson", "Challenge", "Force confrontation and decisive combat.", "crimson"],
            ["Regalia", "Fade", "Exploit decay and inevitability.", "regalia"],
          ].map(([name, keyword, desc, icon]) => (
            <div
              key={name}
              className="border border-white/10 p-8 bg-black/40 flex gap-6 items-start"
            >
              <img
                src={`/images/colors/${icon}.png`}
                alt={name}
                className="w-12 h-12"
              />

              <div>
                <h3 className="text-lg md:text-xl text-[var(--gold)]">
                  {name} — <span className="text-white/70">{keyword}</span>
                </h3>
                <p className="text-sm md:text-base text-white/60 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-6">
        <div className="max-w-none mx-auto px-6 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* Left: Wordmark */}
          <div className="flex justify-start">
            <img
              src="/images/wordmark-white.png"
              alt="Quellrite"
              className="w-36 md:w-40"
            />
          </div>

          {/* Center: Copyright (centered on page) */}
          <p className="text-white/50 text-sm md:text-base text-center">
            © 2026 Quellrite. All rights reserved.
          </p>

          {/* Right: Social icons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {[
              ["Discord", "https://discord.gg/7jhjYDbpJt", "/images/socials/discord.png"],
              ["X", "https://x.com/quellrite", "/images/socials/x.png"],
              ["Instagram", "https://instagram.com/quellrite/", "/images/socials/instagram.png"],
              ["YouTube", "https://youtube.com/@quellrite", "/images/socials/youtube.png"],
              ["Facebook", "https://www.facebook.com/quellrite", "/images/socials/facebook.png"],
              ["Bluesky", "https://bsky.app/profile/quellrite.bsky.social", "/images/socials/bluesky.png"],
              ["Threads", "https://www.threads.com/@quellrite", "/images/socials/threads.png"],
              ["TikTok", "https://www.tiktok.com/@quellrite", "/images/socials/tiktok.png"],
            ].map(([name, link, icon]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 shadow-md transition"
                aria-label={name}
              >
                <img src={icon} alt={name} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
