import CardScroller from "../components/CardScroller";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-32 bg-black text-white">
      <img
        src="/images/background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      />
      <div className="relative z-10">
        {/* HERO */}
        <section
          id="hero"
          className="text-center max-w-none mx-auto px-6 lg:px-12 xl:px-16 min-h-[calc(100vh-8rem)] flex flex-col justify-center py-32 2xl:py-40 relative"
        >
          <img
            src="/images/wordmark-white.png"
            alt="Quellrite"
            className="mx-auto mb-8 w-80 md:w-96 lg:w-[28rem] 2xl:w-[36rem]"
          />

          <p
            className="text-white/90 text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-10 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A competitive strategy card game set in a world where aura is power
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <a
              href="https://www.kickstarter.com"
              target="_blank"
              className="flex items-center gap-4 px-12 py-5 border-2 border-[var(--gold)] text-[var(--gold)] text-xl md:text-2xl font-semibold hover:bg-[var(--gold)] hover:text-black transition shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <img
                src="/images/kickstarter.png"
                alt="Kickstarter"
                className="w-10 h-10"
              />
              Kickstarter
            </a>
          </div>

        {/* DISCORD CTA */}
        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          {/* Selling Copy */}
          <p className="text-white/90 text-base md:text-lg max-w-xl leading-relaxed">
            Get early access to updates, and exclusive community rewards.
          </p>
          {/* Discord Button (Kickstarter-style) */}
          <a
            href="https://discord.gg/7jhjYDbpJt"
            target="_blank"
            className="flex items-center gap-4 px-12 py-5 border-2 border-[var(--gold)] text-[var(--gold)] text-xl md:text-2xl font-semibold hover:bg-[var(--gold)] hover:text-black transition shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <img
              src="/images/socials/discord.png"
              alt="Discord"
              className="w-10 h-10"
            />
            Join our Discord
          </a>


        </div>

        </section>

        {/* SEPARATOR */}
        <div className="my-24 w-full h-px bg-[var(--gold)] opacity-30" />

        {/* COLORS */}
        <section className="max-w-none mx-auto px-6 lg:px-12 xl:px-16 pb-32">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)] text-center mb-12">
            The Six Colors
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Azure",
                "Scry",
                "See beyond the present and shape the future.",
                "azure",
              ],
              [
                "Jade",
                "Rescue",
                "Preserve life and recover what was lost.",
                "jade",
              ],
              [
                "Mindaro",
                "Cycle",
                "Rotate resources to maintain tempo.",
                "mindaro",
              ],
              [
                "Kajah",
                "Forge",
                "Build forces and overwhelm your foes.",
                "kajah",
              ],
              [
                "Crimson",
                "Challenge",
                "Force confrontation and decisive combat.",
                "crimson",
              ],
              [
                "Regalia",
                "Fade",
                "Exploit decay and inevitability.",
                "regalia",
              ],
            ].map(([name, keyword, desc, icon]) => (
                <div
                  key={name}
                  className="
                    border border-white/10 p-6 bg-black/40 flex gap-4 items-start
                    transition-all duration-300 ease-out
                    hover:scale-[1.04]
                    hover:border-[var(--gold)]
                    hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]
                  "
                >
                <img
                  src={`/images/colors/${icon}.png`}
                  alt={name}
                  className="w-10 h-10"
                />

                <div>
                  <h3 className="text-lg text-[var(--gold)]">
                    {name} — <span className="text-white/70">{keyword}</span>
                  </h3>
                  <p className="text-sm text-white/60 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-[var(--gold)] opacity-30"></div>

        {/* CARD SHOWCASE */}
        <section className="max-w-none px-6 lg:px-12 xl:px-16 py-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)] text-center mb-8">
            Card Showcase
          </h2>

          <CardScroller
            images={[
              "/images/cards/nalani.png",
              "/images/cards/thera.png",
              "/images/cards/duke.png",
              "/images/cards/colossea.png",
              "/images/cards/akihiko.png",
              "/images/cards/maynard.png",
            ]}
          />
        </section>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-[var(--gold)] opacity-30"></div>

        {/* ONLINE SIMULATOR */}
        <section
          id="simulator"
          className="max-w-none mx-auto px-6 lg:px-12 xl:px-16 py-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)] text-center mb-12">
            Play Online Now
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* VIDEO PLACEHOLDER */}
            <div className="relative aspect-video bg-black/60 border border-white/10 rounded-lg overflow-hidden mb-12">
              <video
                className="w-full h-full"
                poster="/images/simulator-thumbnail.jpg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/simulator-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* DOWNLOAD BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="https://drive.google.com/file/d/1tvlmCXk22Su1f8doE-LZE_iGx-_MbG6D/view?usp=sharing"
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition rounded-lg"
              >
                <img
                  src="/images/windows.png"
                  alt="Windows"
                  className="w-6 h-6"
                />
                <span className="font-medium">Download for Windows</span>
              </a>

              <a
                href="https://www.dropbox.com/scl/fi/cc24bb0sgsz65x229v4w3/QuellriteOnlineSimulator.apk?rlkey=5i4x430mk0smwble51rwoydsn&st=igqmeru5&dl=0"
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition rounded-lg"
              >
                <img
                  src="/images/android.png"
                  alt="Android"
                  className="w-6 h-6"
                />
                <span className="font-medium">Download for Android</span>
              </a>
            </div>
          </div>
        </section>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-[var(--gold)] opacity-30"></div>

        {/* FAQ SECTION */}
        <section
          id="faq"
          className="py-24"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)] text-center mb-16">
              FAQ
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* FAQ ACCORDION */}
              <div className="space-y-4">
                {[
                  {
                    q: "What is Quellrite?",
                    a: "Quellrite is a competitive strategy trading card game set in a world where aura is power. Battle with unique characters and master the six colors of combat.",
                  },
                  {
                    q: "Where do I get cards?",
                    a: "The game is currently being crowdfunded on Kickstarter. Production with product delivery is planned for July 2026.",
                  },
                  {
                    q: "How do I play?",
                    a: "Check out our comprehensive How to Play guide (link in navigation) or try the online simulator to learn the mechanics hands-on.",
                  },
                ].map((item, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                  >
                    <summary className="cursor-pointer px-5 py-4 text-base font-medium text-white hover:text-[var(--gold)] transition list-none flex justify-between items-center">
                      {item.q}
                      <span className="text-2xl group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-4 text-sm text-white/70 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* EMAIL SIGNUP */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src="/images/card-back.png"
                  alt="Card Back"
                  className="w-40 h-auto rounded-lg mb-6"
                />

                <h3 className="text-xl font-bold text-white mb-3">
                  Sign Up For News
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Get release updates and events!
                </p>

                <div className="w-full flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)] text-sm"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    className="w-full px-6 py-3 bg-black text-white hover:bg-[var(--gold)] hover:text-black transition rounded font-medium text-center block"
                  >
                    Subscribe
                  </a>
                </div>
              </div>

              {/* QR FEEDBACK */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Got any suggestions?
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Let us know! Scan the QR code or click it below.
                </p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfZr4s6K4f2NMDR07dBkkjvdB3pQiHANRIVQywZYuhSa3nBfg/viewform"
                  target="_blank"
                  className="block"
                >
                  <img
                    src="/images/qr-feedback.png"
                    alt="Feedback QR Code"
                    className="w-40 h-40 bg-white p-1 rounded mx-auto hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
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
                [
                  "Discord",
                  "https://discord.gg/7jhjYDbpJt",
                  "/images/socials/discord.png",
                ],
                ["X", "https://x.com/quellrite", "/images/socials/x.png"],
                [
                  "Instagram",
                  "https://instagram.com/quellrite/",
                  "/images/socials/instagram.png",
                ],
                [
                  "YouTube",
                  "https://youtube.com/@quellrite",
                  "/images/socials/youtube.png",
                ],
                [
                  "Facebook",
                  "https://www.facebook.com/quellrite",
                  "/images/socials/facebook.png",
                ],
                [
                  "Bluesky",
                  "https://bsky.app/profile/quellrite.bsky.social",
                  "/images/socials/bluesky.png",
                ],
                [
                  "Threads",
                  "https://www.threads.com/@quellrite",
                  "/images/socials/threads.png",
                ],
                [
                  "TikTok",
                  "https://www.tiktok.com/@quellrite",
                  "/images/socials/tiktok.png",
                ],
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
