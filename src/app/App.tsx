import { MusicButton } from "../components/common/MusicButton";
import { BackToTop } from "../components/common/BackToTop";
import { BirthdayJourney } from "../sections/BirthdayJourney";

export function App() {
  return (
    <main className="birthday-page bg-night text-cream">
      <MusicButton />
      <BirthdayJourney />
      <BackToTop />
    </main>
  );
}

export default App;
