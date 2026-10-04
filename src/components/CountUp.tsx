import { useCountUp } from "@/hooks/useGolf";

export function CountUp({ value, prefix = "", suffix = "", duration, locale = "en-US" }: { value: number; prefix?: string; suffix?: string; duration?: number; locale?: string }) {
  const { ref, value: v } = useCountUp(value, duration);
  return (
    <span ref={ref} className="tabular">
      {prefix}
      {v.toLocaleString(locale)}
      {suffix}
    </span>
  );
}
