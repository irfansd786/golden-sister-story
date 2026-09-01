import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CakeSlice,
  Camera,
  Check,
  ChevronDown,
  Gift,
  Heart,
  Mail,
  Music2,
  Play,
  RotateCcw,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Something Special — A Birthday Journey" },
      { name: "description", content: "A cinematic interactive birthday journey for a very special sister." },
      { property: "og:title", content: "Something Special — A Birthday Journey" },
      { property: "og:description", content: "A cinematic interactive birthday journey for a very special sister." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayExperience,
});

const memories = ["The Beginning", "Growing Up", "Crazy Times", "Today", "What's Next?"];
const reasons = [
  ["Kind", "You have the kindest heart", "♥"],
  ["Funny", "Your humor is the best", "☺"],
  ["Smart", "You inspire me every day", "✦"],
  ["Caring", "You care for everyone", "✿"],
  ["Strong", "You're stronger than you think", "▰"],
  ["Unique", "One of a kind, always!", "◇"],
];
const wishes = [
  "You're Amazing!", "Never stop Smiling!", "Dream Big!", "Stay Awesome!", "You're Special!",
  "Shine Bright!", "Endless Joy!", "Stay Confident!", "Always Happy!", "Best Sister Ever!",
];
const polaroidClasses = ["polaroid-a", "polaroid-b", "polaroid-c", "polaroid-d", "polaroid-e", "polaroid-f", "polaroid-g", "polaroid-h"];

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && <div className="section-kicker mb-3">{eyebrow}</div>}
      <h2 className="script-heading text-5xl text-cream sm:text-6xl">{children}</h2>
    </div>
  );
}

function Placeholder({ label = "IMAGE PLACEHOLDER", className = "" }: { label?: string; className?: string }) {
  return <div className={`placeholder-box ${className}`} aria-label={label}><span>{label}</span></div>;
}

function MusicButton() {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      type="button"
      aria-label={playing ? "Music Playing" : "Play Music"}
      onClick={() => setPlaying((value) => !value)}
      className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-cream/20 bg-night/75 px-3 py-2 text-xs text-cream backdrop-blur-md transition hover:border-pink-bright/70"
    >
      <Music2 size={15} className={playing ? "animate-pulse text-gold" : "text-cream/75"} />
      <span className="hidden sm:inline">{playing ? "Music Playing" : "Play Music"}</span>
    </button>
  );
}

function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 starfield opacity-70" aria-hidden="true">
      {[...Array(16)].map((_, index) => (
        <Star key={index} size={index % 3 === 0 ? 12 : 6} className="animate-twinkle absolute text-gold" style={{ left: `${(index * 37) % 98}%`, top: `${(index * 53) % 80}%`, animationDelay: `${index * 0.18}s` }} />
      ))}
      <span className="absolute left-[12%] top-[28%] text-lg text-pink-bright/70 animate-float-up">♥</span>
      <span className="absolute right-[18%] top-[24%] text-sm text-pink-bright/60 animate-float-up" style={{ animationDelay: "1.3s" }}>♥</span>
      <span className="absolute bottom-[20%] left-[22%] h-2 w-2 rounded-full bg-gold/50 blur-[2px] animate-float-up" />
      <span className="absolute right-[30%] top-[46%] h-3 w-3 rounded-full bg-pink-bright/30 blur-[4px] animate-float-up" style={{ animationDelay: "2.1s" }} />
    </div>
  );
}

function LandingSection() {
  return (
    <section id="landing" className="night-section starfield flex min-h-[100svh] items-center justify-center">
      <ParticleBackground />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-surface/80 to-transparent" />
      <div className="absolute bottom-0 left-0 h-28 w-1/3 rounded-full bg-lavender/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-28 w-1/3 rounded-full bg-pink-bright/15 blur-3xl" />
      <div className="relative z-10 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="mb-5 text-sm uppercase tracking-[.4em] text-gold/80">A little surprise for you</div>
          <h1 className="script-heading text-7xl text-cream drop-shadow-2xl sm:text-9xl">Something<br />Special</h1>
          <p className="mt-7 font-serif text-2xl italic text-cream/85">is waiting for you...</p>
          <motion.a href="#welcome" className="birthday-button mt-8" whileTap={{ scale: .97 }}>
            Open Your Surprise <Gift size={16} />
          </motion.a>
          <div className="mt-12 flex justify-center text-cream/70"><ArrowDown className="animate-bounce" size={21} /></div>
        </motion.div>
      </div>
      <div className="absolute bottom-[-2rem] left-1/2 h-28 w-[120%] -translate-x-1/2 rounded-[50%] bg-purple-light/40 blur-xl" />
    </section>
  );
}

function WelcomeSection() {
  return (
    <section id="welcome" className="warm-section min-h-[720px] py-24 text-night">
      <div className="section-inner grid min-h-[560px] items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <FadeIn className="order-2 max-w-md lg:order-1">
          <div className="section-kicker text-birthday-pink">Chapter two · the celebration begins</div>
          <h2 className="script-heading mt-4 text-6xl text-night sm:text-7xl">Happy Birthday<br />My Dear Sister <span className="text-birthday-pink">♥</span></h2>
          <p className="mt-7 max-w-sm font-serif text-xl leading-relaxed text-night/75">To my annoying, amazing, crazy,<br />and irreplaceable sister...</p>
          <a href="#cake" className="birthday-button mt-8">Let's Celebrate <Heart size={15} fill="currentColor" /></a>
        </FadeIn>
        <FadeIn className="order-1 relative lg:order-2" delay={.12}>
          <div className="absolute -left-8 top-2 text-5xl text-birthday-pink/65">◯</div>
          <div className="absolute -right-3 bottom-12 text-4xl text-gold">●</div>
          <Placeholder className="aspect-[1.55] w-full shadow-2xl shadow-night/20" />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-4xl text-birthday-pink">✿</div>
          <div className="absolute -right-5 top-12 text-xl text-birthday-pink">♥</div>
        </FadeIn>
      </div>
    </section>
  );
}

function CakeSection() {
  const [blown, setBlown] = useState(false);
  return (
    <section id="cake" className="night-section starfield min-h-[720px] py-24">
      <ParticleBackground />
      <div className="section-inner grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <FadeIn className="max-w-md">
          <div className="section-kicker">Chapter three · make it count</div>
          <h2 className="script-heading mt-4 text-7xl text-cream">Make a<br />Wish<span className="text-gold">...</span></h2>
          <p className="mt-7 font-serif text-2xl leading-snug text-cream/75">Blow the candles<br />and let's begin the celebration!</p>
          <button type="button" className="birthday-button mt-8" onClick={() => setBlown(true)}>
            {blown ? <><Check size={16} /> Wish Made</> : <><CakeSlice size={16} /> Blow Candles</>}
          </button>
          <AnimatePresence>{blown && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 font-script text-3xl text-gold">Make your wish! ✨</motion.p>}</AnimatePresence>
        </FadeIn>
        <FadeIn className="relative" delay={.14}>
          <div className={`absolute inset-8 rounded-full bg-gold/20 blur-3xl ${blown ? "opacity-0" : "animate-pulse-glow"}`} />
          <div className="relative mx-auto max-w-[620px]">
            <Placeholder label="CAKE IMAGE" className="aspect-[1.35] w-full" />
            <div className={`absolute left-1/2 top-[8%] flex -translate-x-1/2 gap-4 transition-opacity ${blown ? "opacity-40" : ""}`}>
              {[...Array(7)].map((_, i) => <span key={i} className="relative h-24 w-1.5 bg-pink-bright sm:h-32"><i className={`absolute -top-5 left-1/2 h-7 w-3 -translate-x-1/2 rounded-full bg-gold-bright blur-[1px] ${blown ? "opacity-0" : "animate-flicker"}`} style={{ animationDelay: `${i * .15}s` }} />{blown && <i className="animate-smoke absolute -top-5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-cream/20 blur-md" />}</span>)}
            </div>
            {blown && <div className="absolute inset-0 flex items-center justify-center text-5xl text-gold"><Sparkles /></div>}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="night-section py-24">
      <div className="section-inner"><SectionHeading eyebrow="Chapter four">Our Little Story <span className="text-pink-bright">♥</span></SectionHeading>
        <div className="relative grid gap-10 md:grid-cols-5 md:gap-3">
          <div className="absolute left-[10%] right-[10%] top-24 hidden h-px bg-pink-bright/70 md:block" />
          {memories.map((memory, index) => <FadeIn key={memory} className="relative z-10 text-center" delay={index * .08}>
            <div className="mx-auto mb-5 flex aspect-square w-28 items-center justify-center rounded-full border-2 border-pink-bright/75 bg-placeholder text-[.6rem] font-bold tracking-widest text-cream/65 shadow-[0_0_25px_color-mix(in_oklab,var(--color-birthday-pink)_25%,transparent)]">PHOTO</div>
            <h3 className="font-serif text-lg text-cream">{memory}</h3>
            <p className="mx-auto mt-2 max-w-[140px] text-xs leading-relaxed text-cream/60">{["When our story began", "The memories we made", "The fun and the chaos", "Who you are today", "The beautiful future ahead"][index]}</p>
          </FadeIn>)}
        </div>
        <div className="mt-12 flex justify-center gap-2 text-pink-bright"><ArrowLeft size={17} /><span className="h-2 w-2 rounded-full bg-pink-bright" /><span className="h-2 w-2 rounded-full bg-cream/25" /><span className="h-2 w-2 rounded-full bg-cream/25" /><ArrowRight size={17} /></div>
      </div>
    </section>
  );
}

function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section className="night-section starfield py-24">
      <ParticleBackground /><div className="section-inner"><SectionHeading eyebrow="Chapter five">Memory Gallery <Camera className="inline-block text-gold" size={29} /></SectionHeading>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
          {polaroidClasses.map((rotation, index) => <FadeIn key={rotation} delay={index * .06}><button type="button" onClick={() => setSelected(index)} className={`polaroid-frame ${rotation} block w-full text-left`}><Placeholder label="PHOTO" className="aspect-[1.2] w-full" /><span className="mt-2 block font-script text-xl">{["A little magic", "Best memories", "Just us", "The good days", "Always laughing", "Pure joy", "Our world", "Forever"] [index]}</span></button></FadeIn>)}
        </div>
        <div className="mt-12 text-center"><button type="button" className="birthday-button" onClick={() => setSelected(0)}>Click a Photo <Sparkles size={15} /></button></div>
      </div>
      <AnimatePresence>{selected !== null && <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-night/90 p-6 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
        <motion.div className="relative w-full max-w-xl rounded-lg border border-cream/15 bg-purple-surface p-5" initial={{ scale: .92, y: 20 }} animate={{ scale: 1, y: 0 }} onClick={(event) => event.stopPropagation()}>
          <button type="button" aria-label="Close photo" onClick={() => setSelected(null)} className="absolute right-4 top-4 text-cream/70 transition hover:text-cream"><X size={20} /></button>
          <Placeholder label="PHOTO" className="aspect-video w-full" /><p className="mt-5 font-script text-3xl text-gold">A memory worth keeping close.</p><p className="mt-2 text-sm text-cream/65">Every little moment becomes part of our story.</p>
        </motion.div>
      </motion.div>}</AnimatePresence>
    </section>
  );
}

function LetterSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="warm-section py-24 text-night"><div className="section-inner grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
      <FadeIn><div className="section-kicker text-birthday-pink">Chapter six · from the heart</div><h2 className="script-heading mt-4 text-7xl">A letter<br />for you<span className="text-birthday-pink">...</span></h2><button type="button" onClick={() => setOpen(true)} className="birthday-button mt-8">{open ? "Letter Opened" : "Open the Letter"} <Mail size={16} /></button></FadeIn>
      <FadeIn className="relative min-h-[420px]" delay={.15}>
        <motion.div className="absolute left-1/2 top-1/2 w-[min(100%,530px)] -translate-x-1/2 -translate-y-1/2" animate={open ? { y: 70, opacity: 0 } : { y: 0, opacity: 1 }} transition={{ duration: .65 }}>
          <div className="relative aspect-[1.45] rounded-md bg-birthday-pink shadow-2xl shadow-birthday-pink/25"><div className="absolute left-0 top-0 h-1/2 w-full origin-top bg-pink-bright/80 [clip-path:polygon(0_0,100%_0,50%_100%)]" /><div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-bright text-2xl text-cream shadow-lg">♥</div></div>
        </motion.div>
        <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: 50, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 1 }} className="absolute left-1/2 top-1/2 max-h-[420px] w-[min(100%,500px)] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-cream p-8 shadow-2xl shadow-night/30 sm:p-10"><div className="font-script text-3xl text-birthday-pink">My Dearest Sister,</div><p className="mt-5 whitespace-pre-line font-serif text-lg leading-relaxed text-night/80">{`I may not say it every day,\nbut having you as my sister is\none of the best things in my life.\nYou are my first friend,\nmy partner in crime,\nand my forever support system.\nThank you for always being\nthere and for making every\nmoment so special.\n\nHappy Birthday! ♥`}</p><div className="mt-5 text-right font-script text-2xl text-birthday-pink">— Your Brother</div></motion.div>}</AnimatePresence>
      </FadeIn>
    </div></section>
  );
}

function GiftBox({ index, onOpen, opened }: { index: number; onOpen: () => void; opened: boolean }) {
  return <button type="button" onClick={onOpen} className="group flex flex-col items-center gap-4 text-center"><motion.div className={`gift-box gift-${["purple", "pink", "gold", "teal", "dark"][index]} ${opened ? "open" : ""}`} animate={opened ? { rotate: [0, -5, 5, 0] } : { y: [0, -4, 0] }} transition={{ duration: opened ? .45 : 3.5, repeat: opened ? 0 : Infinity }}><span className="gift-lid" /><span className="gift-bow" />{opened && <Sparkles className="absolute -right-5 -top-8 text-gold-bright" size={24} />}</motion.div><span className="text-sm text-cream/75">{index === 4 ? "Final Gift" : `Gift #${index + 1}`}</span></button>;
}

function GiftSection() {
  const [opened, setOpened] = useState<number | null>(null);
  return <section className="night-section starfield py-24"><ParticleBackground /><div className="section-inner"><SectionHeading eyebrow="Chapter seven">Which one will<br />you open? <Gift className="inline-block text-gold" size={28} /></SectionHeading><div className="mx-auto grid max-w-3xl grid-cols-2 gap-12 sm:grid-cols-5 sm:gap-6">{[0, 1, 2, 3, 4].map((index) => <GiftBox key={index} index={index} opened={opened === index} onOpen={() => setOpened(index)} />)}</div><AnimatePresence>{opened !== null && <motion.p className="mt-12 text-center font-script text-3xl text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>A little surprise, just for you! ✨</motion.p>}</AnimatePresence></div></section>;
}

function BalloonGame() {
  const [started, setStarted] = useState(false); const [popped, setPopped] = useState<number[]>([]);
  const score = popped.length;
  const pop = (index: number) => { if (started && !popped.includes(index)) setPopped((items) => [...items, index]); };
  return <section className="night-section py-24"><div className="section-inner"><SectionHeading eyebrow="Chapter eight">Pop the balloons and<br />collect your birthday wishes!</SectionHeading><div className="mb-8 flex flex-wrap items-center justify-center gap-5"><span className="rounded-full border border-cream/15 bg-purple-surface px-5 py-2 text-sm text-cream">Score: {score} / 10</span><button type="button" className="birthday-button" onClick={() => { setStarted(true); setPopped([]); }}>{started ? "Restart Game" : "Start Game"} <Play size={14} fill="currentColor" /></button></div><div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-5 sm:gap-x-8">{wishes.map((wish, index) => <motion.button key={wish} type="button" onClick={() => pop(index)} className={`balloon-shape balloon-${["purple", "pink", "gold", "blue", "magenta", "teal"][index % 6]} flex items-center justify-center px-2 text-center font-serif text-xs text-cream ${popped.includes(index) ? "balloon-popped" : ""}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 3 + index * .2, repeat: Infinity, delay: index * .15 }}>{wish}</motion.button>)}</div><AnimatePresence>{score === 10 && <motion.div className="mt-14 text-center font-script text-4xl text-gold" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }}>You're the star of today! ✨</motion.div>}</AnimatePresence></div></section>;
}

function ReasonsSection() {
  return <section className="night-section starfield py-24"><ParticleBackground /><div className="section-inner grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]"><FadeIn><div className="section-kicker">Chapter nine · just because</div><h2 className="script-heading mt-4 text-7xl text-cream">Reasons<br />You're<br />Special <span className="text-pink-bright">♥</span></h2><p className="mt-6 max-w-xs font-serif text-lg leading-relaxed text-cream/65">Just a few of the million reasons why you mean so much.</p></FadeIn><div className="grid grid-cols-2 gap-4 sm:grid-cols-3">{reasons.map(([title, desc, icon], index) => <FadeIn key={title} delay={index * .06}><div className="group rounded-lg border border-cream/10 bg-purple-surface/80 p-5 text-center transition hover:-translate-y-1 hover:border-pink-bright/65"><div className="mb-3 text-3xl text-pink-bright transition group-hover:text-gold">{icon}</div><h3 className="font-serif text-xl text-cream">{title}</h3><p className="mt-2 text-xs leading-relaxed text-cream/55">{desc}</p></div></FadeIn>)}</div></div></section>;
}

function PhotoWall() {
  return <section className="night-section py-24"><div className="section-inner"><SectionHeading eyebrow="Chapter ten">Moments We'll Always Remember <span className="text-pink-bright">♥</span></SectionHeading><div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-7 px-3 sm:grid-cols-4 sm:gap-10">{[...Array(12)].map((_, index) => <FadeIn key={index} delay={index * .035}><div className={`relative ${polaroidClasses[index % polaroidClasses.length]} animate-sway`}><div className="absolute -top-5 left-1/2 z-10 h-7 w-3 -translate-x-1/2 rounded-sm bg-gold/80 shadow" /><div className="polaroid-frame"><Placeholder label="PHOTO" className="aspect-[1.1] w-full" /></div></div></FadeIn>)}</div><div className="mt-14 text-center"><button type="button" className="birthday-button">More Memories <Heart size={15} fill="currentColor" /></button></div></div></section>;
}

function FinalWish() {
  return <section className="night-section starfield py-28"><ParticleBackground /><div className="section-inner grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]"><FadeIn><div className="section-kicker">Chapter eleven · one more wish</div><h2 className="script-heading mt-4 text-8xl text-cream">Happy<br />Birthday<span className="text-gold">!</span></h2><p className="mt-7 font-serif text-2xl leading-snug text-cream/70">May your day be as beautiful and<br />amazing as you are! <span className="text-pink-bright">♥</span></p></FadeIn><FadeIn className="relative" delay={.12}><div className="absolute inset-10 rounded-full bg-gold/20 blur-3xl animate-pulse-glow" /><Placeholder label="BIRTHDAY CAKE IMAGE" className="relative aspect-[1.45] w-full" /><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-4xl text-pink-bright">✿</div></FadeIn></div></section>;
}

function FinalMessage() {
  return <section className="night-section starfield flex min-h-[100svh] items-center justify-center py-24 text-center"><ParticleBackground /><div className="absolute right-[12%] top-[13%] text-6xl text-gold/85">☾</div><div className="relative z-10 px-6"><FadeIn><p className="font-serif text-xl text-cream/75 sm:text-2xl">No matter where life takes us,<br />I'll always be your brother.</p><h2 className="script-heading mt-10 text-6xl text-cream sm:text-8xl">Happy Birthday<br /><span className="text-gold">My Lovely Sister</span> <span className="text-pink-bright">♥</span></h2><p className="mx-auto mt-8 max-w-lg font-serif text-lg text-cream/65">You deserve all the happiness in the world. <span className="text-pink-bright">♥</span></p><a href="#landing" className="birthday-button mt-10"><RotateCcw size={15} /> Replay This Journey</a></FadeIn></div><div className="floral-corner left">✿</div><div className="floral-corner right">✿</div></section>;
}

function BirthdayExperience() {
  return <main className="birthday-page bg-night text-cream"><MusicButton /><LandingSection /><WelcomeSection /><CakeSection /><TimelineSection /><MemoryGallery /><LetterSection /><GiftSection /><BalloonGame /><ReasonsSection /><PhotoWall /><FinalWish /><FinalMessage /></main>;
}