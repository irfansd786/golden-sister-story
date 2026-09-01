import { Heart } from "lucide-react";

export function WelcomeContent() {
  return (
    <>
      <div className="section-kicker text-birthday-pink">Chapter two · the celebration begins</div>
      <h2 className="script-heading mt-4 text-6xl text-night sm:text-7xl">
        Happy Birthday
        <br />
        My Dear Sister <span className="text-birthday-pink">♥</span>
      </h2>
      <p className="mt-7 max-w-sm font-serif text-xl leading-relaxed text-night/75">
        To my annoying, amazing, crazy,
        <br />
        and irreplaceable sister...
      </p>
      <a href="#cake" className="birthday-button mt-8">
        Let's Celebrate <Heart size={15} fill="currentColor" />
      </a>
    </>
  );
}
