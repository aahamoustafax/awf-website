/**
 * Joins class names, skipping falsy values: cn("a", isOn && "b") → "a b".
 * Primitives own their visual styles; a `className` passed in should only add layout
 * (margin, width, grid placement), so no conflict-merging library is needed.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
