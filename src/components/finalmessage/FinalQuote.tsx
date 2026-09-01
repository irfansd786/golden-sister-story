import { FINAL_MESSAGES } from "../../data/messagesData";

export function FinalQuote() {
  return (
    <>
      <p className="font-serif text-xl text-cream/75 sm:text-2xl">
        {FINAL_MESSAGES.quote.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <h2 className="script-heading mt-10 text-6xl text-cream sm:text-8xl">
        Happy Birthday
        <br />
        <span className="text-gold">My Lovely Sister</span>{" "}
        <span className="text-pink-bright">♥</span>
      </h2>
      <p className="mx-auto mt-8 max-w-lg font-serif text-lg text-cream/65">
        {FINAL_MESSAGES.subtext}
      </p>
    </>
  );
}
