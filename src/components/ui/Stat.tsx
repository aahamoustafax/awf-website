import { cn } from "@/lib/cn";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

/** A large impact figure with its label, e.g. "120+" / "children in weekend classes". */
export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <dt className="order-2 text-base opacity-85">{label}</dt>
      <dd className="order-1 font-display text-display-lg font-semibold">{value}</dd>
    </div>
  );
}

/** Wrap a group of <Stat>s so they form a single description list. */
export function StatList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4", className)}>
      {children}
    </dl>
  );
}
