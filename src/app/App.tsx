import { useState } from "react";
import { Menu, X, ChevronRight, Star, Phone, MapPin } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1781455793310-8427c96454c7?w=1920&h=1080&fit=crop&auto=format";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&h=1100&fit=crop&auto=format";

const GALLERY = [
  { url: "https://images.unsplash.com/photo-1781768526571-ef9c333279c7?w=600&h=800&fit=crop&auto=format", alt: "Classic barbershop interior with clients" },
  { url: "https://images.unsplash.com/photo-1759134198561-e2041049419c?w=600&h=500&fit=crop&auto=format", alt: "Barbers at work in a modern salon" },
  { url: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=600&h=700&fit=crop&auto=format", alt: "Barber cutting hair with scissors" },
  { url: "https://images.unsplash.com/photo-1781925856343-c97d0d44f94c?w=600&h=500&fit=crop&auto=format", alt: "Stylish barbershop lounge area" },
  { url: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=600&h=700&fit=crop&auto=format", alt: "Barber styling hair" },
  { url: "https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=600&h=800&fit=crop&auto=format", alt: "Luxurious barber chairs and sinks" },
];

const SERVICES = [
  { name: "Classic Cut", price: "300 EGP", desc: "Scissor cut tailored to your head shape and lifestyle. Includes a hot towel finish and styling." },
  { name: "Fade & Taper", price: "350 EGP", desc: "Precision skin or low fade with a sharp blend. Clean, modern, zero compromise." },
  { name: "The Full Treatment", price: "550 EGP", desc: "Haircut + straight razor shave + hot towel. The complete barbershop experience." },
  { name: "Beard Sculpt", price: "150 EGP", desc: "Shape, line, and oil. Your beard gets the same attention as your cut." },
  { name: "Hot Shave", price: "200 EGP", desc: "Open-razor hot-towel shave. Skin prep, blade, and aftershave balm. A ritual." },
  { name: "Kids Cut", price: "160 EGP", desc: "Under 12. Clean, quick, and comfortable. We take our time so they feel at ease." },
];

const TESTIMONIALS = [
  {
    name: "Maged Seif",
    quote: "Truly amazing in every way, may God bless you, Amen, and may you always go from success to success 🤩🤩",
  },
  {
    name: "Gamal Mubarak",
    quote: "A place that combines refined taste and professionalism,\nFrom the warm welcome and comfortable atmosphere to the quality of the cuts and care, and a commitment to customer satisfaction,\nWith punctuality, impeccable cleanliness, and a relaxing ambiance.\nAll respect to the staff for their skill and taste,\nand our best wishes for their continued success and brilliance.",
  },
];

const NAV_LINKS = ["Services", "About", "Gallery", "Hours", "Location"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-[#C9A84C] font-display text-lg tracking-[0.2em] uppercase">
            Hassan 1 barbershop
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f0f] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/50 text-xs tracking-[0.2em] uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 pt-24">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <img
            src={HERO_IMG}
            alt="Kingston's Barber Co. interior — vintage chairs and mirrors"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">
            Maadi, Cairo
          </p>
          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.92] mb-8 tracking-tight max-w-3xl">
            Hassan 1
            <br />
            <span className="text-[#C9A84C] italic">barbershop.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-md leading-relaxed mb-10 font-light">
            Precision cuts. Straight razor shaves. A chair you actually want to sit in.
            Maadi&apos;s home for the craft.
          </p>
          <a
            href="#services"
            className="flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-200"
          >
            Our Services <ChevronRight size={13} />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 border-b border-white/8 pb-10">
            <div>
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">What We Do</p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)]">The Craft</h2>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mt-px">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl group-hover:text-[#C9A84C] transition-colors duration-200">
                    {s.name}
                  </h3>
                  <span className="font-mono text-[#C9A84C] text-base shrink-0 ml-4">{s.price}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-36 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">Our Story</p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] mb-8 leading-tight">
                Fifteen years,
                <br />
                one standard.
              </h2>
              <p className="text-white/50 leading-relaxed mb-5 font-light">
                Hassan 1 barbershop started with a single chair, a straight razor, and a
                conviction that men deserved better than a twenty-minute assembly line. That conviction hasn&apos;t changed.
              </p>
              <p className="text-white/50 leading-relaxed mb-12 font-light">
                Today we have four chairs and a waiting list — but nothing has changed about how we work.
                Slow down. Pay attention. Do it right. That&apos;s the whole philosophy.
              </p>

            </div>
            <div className="relative bg-[#111]">
              <img
                src={ABOUT_IMG}
                alt="Barber at work — precise attention to detail"
                className="w-full h-[500px] lg:h-[650px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent p-8 pt-20">
                <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-1">Head Stylist</p>
                <p className="font-display text-xl">Hassan 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">The Shop</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] mb-14">A look inside.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`bg-[#111] overflow-hidden group${i === 0 ? " row-span-2" : ""}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className={`w-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500${i === 0 ? " h-[400px] md:h-full" : " h-[180px] md:h-[220px]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Word of Mouth</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] mb-16">What they say.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="border border-white/8 p-8 hover:border-[#C9A84C]/25 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} fill="#C9A84C" className="text-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-white/60 leading-relaxed mb-8 font-light italic text-[0.95rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section id="hours" className="py-24 md:py-36 border-t border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">When We&apos;re Open</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Open every day
            </h2>
          </div>
          <div className="border-l border-[#C9A84C]/30 pl-8 md:pl-12">
            <p className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[#C9A84C]">11 AM – 12 AM</p>
            <p className="text-white/35 text-sm mt-2 tracking-wide font-light">Seven days a week, no appointment needed</p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-24 md:py-36 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Find Us</p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] mb-3">Location</h2>
            <div className="flex justify-center items-start gap-3 text-white/50 text-base mb-10">
              <MapPin size={15} className="mt-1 text-[#C9A84C] shrink-0" />
              <a href="https://maps.app.goo.gl/oX47Nxzy7BUZzeta9" target="_blank" rel="noreferrer" className="hover:text-[#C9A84C] transition-colors duration-200">
                <span className="font-light leading-relaxed text-left inline-block">
                  كومباوند معادي جراند سيتي برجE4, Maadi Grand City Tower compound 4,<br />El-Basatin Sharkeya, El Basatin, Cairo Governorate 4064130
                </span>
              </a>
            </div>
          </div>
          <div className="w-full h-[400px] md:h-[500px] bg-[#111] overflow-hidden border border-white/8">
            <iframe
              title="Hassan 1 barbershop location"
              src="https://maps.google.com/maps?q=Hassan+1+barbershop,+Maadi+Grand+City+Tower&amp;hl=en&amp;z=18&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/6 py-14 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-[#C9A84C] font-display text-lg tracking-[0.2em] uppercase mb-1">
              Hassan 1 barbershop
            </p>
            <p className="text-white/25 text-xs font-light">Maadi, Cairo</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="tel:01008957539"
              className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone size={13} className="text-[#C9A84C]" />
              01008957539
            </a>
            <a
              href="https://wa.me/201008957539"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 px-5 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5">
          <p className="text-white/20 text-xs">© 2026 Hassan 1 barbershop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
