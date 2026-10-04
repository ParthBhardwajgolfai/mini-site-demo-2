interface FlagProps {
  code: string; // ISO 2-letter flag file code, e.g. "in"
  cc?: string; // 3-letter country code for alt text
  className?: string;
}

export function Flag({ code, cc, className = "h-3.5 w-auto" }: FlagProps) {
  return (
    <img
      src={`/images/flags/${code}.png`}
      alt={cc || code}
      title={cc}
      loading="lazy"
      className={`${className} inline-block rounded-[2px] object-cover`}
    />
  );
}
