import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  /** What the real photo should show, so the foundation knows what to supply. */
  description: string;
  className?: string;
};

/**
 * Clearly marked stand-in for a photo we don't have yet. Replace with next/image once the
 * foundation supplies the real image (with consent). Search the code for "ImagePlaceholder"
 * to list every missing photo.
 */
export function ImagePlaceholder({ description, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Photo coming soon: ${description}`}
      className={cn(
        "flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-border",
        "bg-surface-muted p-6 text-center text-sm text-muted",
        className,
      )}
    >
      <span>
        <strong className="block font-semibold">Photo needed</strong>
        {description}
      </span>
    </div>
  );
}
