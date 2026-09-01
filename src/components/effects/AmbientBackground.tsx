import { StarField } from "./StarField";
import { FloatingHearts } from "./FloatingHearts";
import { FloatingParticles } from "./FloatingParticles";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 starfield opacity-70" aria-hidden="true">
      <StarField />
      <FloatingHearts />
      <FloatingParticles />
    </div>
  );
}
