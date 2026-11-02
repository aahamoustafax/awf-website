"use client";

import { useId, useState } from "react";

import { ButtonLink } from "@/components/ui";
import type { DonationBoxContent } from "@/content/types";

type Frequency = "once" | "monthly";

/**
 * Donation box: frequency, amount, then a Donate button whose label follows the choice.
 * Visual only until online giving launches (ADR 0004): the button leads to the ways to give today
 * and no payment details are collected. With a provider, only the button's destination changes.
 */
export function DonationBox({
  title,
  lead,
  frequency: frequencyCopy,
  amounts,
  action,
  note,
  locale,
  currency,
}: DonationBoxContent) {
  const id = useId();
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [preset, setPreset] = useState<number | null>(amounts.presets[1] ?? null);
  const [other, setOther] = useState("");

  const otherAmount = Number(other);
  const amount = other && Number.isInteger(otherAmount) && otherAmount > 0 ? otherAmount : preset;
  const money = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });
  const label = [
    action.label,
    amount && money.format(amount),
    amount && frequency === "monthly" && action.monthlySuffix,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="w-full max-w-md rounded-2xl bg-surface p-5 text-foreground shadow-2xl sm:p-6">
      <h2 className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">{title}</h2>
      <p className="mt-1.5 text-sm text-muted">{lead}</p>

      <fieldset className="mt-4">
        <legend className="sr-only">{frequencyCopy.legend}</legend>
        <div className="grid grid-cols-2 rounded-full bg-surface-muted p-1">
          {(["once", "monthly"] as const).map((value) => (
            <label key={value} className="cursor-pointer">
              <input
                type="radio"
                name={`${id}-frequency`}
                value={value}
                checked={frequency === value}
                onChange={() => setFrequency(value)}
                className="peer sr-only"
              />
              <span className="block rounded-full py-1.5 text-center text-sm font-semibold text-muted transition-colors peer-checked:bg-primary peer-checked:text-on-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {frequencyCopy[value]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-3">
        <legend className="sr-only">{amounts.legend}</legend>
        <div className="grid grid-cols-4 gap-2">
          {amounts.presets.map((value) => (
            <label key={value} className="cursor-pointer">
              <input
                type="radio"
                name={`${id}-amount`}
                value={value}
                checked={!other && preset === value}
                onChange={() => {
                  setPreset(value);
                  setOther("");
                }}
                className="peer sr-only"
              />
              <span className="flex min-h-11 items-center justify-center rounded-xl border border-border bg-background font-display font-semibold text-primary transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent hover:border-primary sm:text-lg">
                {money.format(value)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor={`${id}-other`} className="mt-2 block">
        <span className="sr-only">{amounts.other}</span>
        <span className="flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 focus-within:border-primary focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent">
          <span aria-hidden="true" className="font-semibold text-muted">
            $
          </span>
          <input
            id={`${id}-other`}
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            placeholder={amounts.other}
            value={other}
            onChange={(event) => setOther(event.target.value)}
            className="w-full bg-transparent py-2 font-semibold text-primary outline-none placeholder:font-normal placeholder:text-muted"
          />
        </span>
      </label>

      <ButtonLink href={action.href} variant="cta" size="lg" className="mt-4 w-full">
        {label}
      </ButtonLink>
      <p className="mt-2 text-center text-sm text-muted">{note}</p>
    </div>
  );
}
