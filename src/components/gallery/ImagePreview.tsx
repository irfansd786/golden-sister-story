import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "../../data/images";

interface ImagePreviewProps {
  selected: number | null;
  onClose: () => void;
}

export function ImagePreview({ selected, onClose }: ImagePreviewProps) {
  const currentPhoto = selected !== null ? IMAGES.memories[selected] : null;

  return (
    <AnimatePresence>
      {selected !== null && currentPhoto && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/90 p-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-xl rounded-lg border border-cream/15 bg-purple-surface p-5 shadow-2xl"
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close photo"
              onClick={onClose}
              className="absolute right-4 top-4 text-cream/70 transition hover:text-cream"
            >
              <X size={20} />
            </button>

            <div className="overflow-hidden rounded-md">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="aspect-video w-full object-cover"
              />
            </div>
            <p className="mt-5 font-script text-3xl text-gold">{currentPhoto.caption}</p>
            <p className="mt-2 text-sm text-cream/65">
              Every little moment becomes part of our story.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
