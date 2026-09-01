export function LetterPaper() {
  return (
    <div className="relative font-serif text-night/85">
      {/* Pink floral branch accent on right corner */}
      <div className="absolute -right-4 -top-4 text-3xl text-birthday-pink">🌸</div>
      <div className="font-script text-4xl text-birthday-pink font-semibold">
        My Dearest Sister,
      </div>
      <p className="mt-5 whitespace-pre-line text-lg leading-relaxed">
        {`I may not say it every day,
but having you as my sister is
one of the best things in my life.

You are my first friend,
my partner in crime,
and my forever support system.

Thank you for always being
there and for making every
moment so special.

I love you more than words
can ever say.

Happy Birthday! ❤️`}
      </p>
      <div className="mt-6 text-right font-script text-3xl text-birthday-pink font-semibold">
        — Your Brother
      </div>
    </div>
  );
}
