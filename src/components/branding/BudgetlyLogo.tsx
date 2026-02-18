import { cn } from "@/lib/utils";

type BudgetlyLogoProps = {
  className?: string;
};

const BudgetlyLogo = ({ className }: BudgetlyLogoProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-gradient-to-br from-[#4ea9ff] via-[#2766e2] to-[#7f2bff] p-1 shadow-[0_0_40px_rgba(78,169,255,0.35)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full rounded-[14px]"
      >
        <defs>
          <linearGradient id="wf-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A8CFF" />
            <stop offset="52%" stopColor="#2A59DB" />
            <stop offset="100%" stopColor="#9A31FF" />
          </linearGradient>
          <linearGradient id="wf-cyan" x1="6" y1="50" x2="94" y2="50">
            <stop offset="0%" stopColor="#4CEBFF" />
            <stop offset="100%" stopColor="#56D4FF" />
          </linearGradient>
          <linearGradient id="wf-pink" x1="6" y1="60" x2="94" y2="60">
            <stop offset="0%" stopColor="#FF3FC5" />
            <stop offset="100%" stopColor="#FF6BD6" />
          </linearGradient>
          <filter id="wf-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100" height="100" rx="18" fill="url(#wf-bg)" />
        <path
          d="M-4 72C8 70 17 62 25 52L37 35L58 58L79 26L96 12"
          stroke="url(#wf-cyan)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#wf-glow)"
        />
        <path
          d="M-4 79C8 77 17 69 25 59L37 43L58 67L79 34L96 20"
          stroke="url(#wf-pink)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#wf-glow)"
          opacity="0.95"
        />
        <circle cx="96" cy="12" r="2.8" fill="#fff" />
      </svg>
    </div>
  );
};

export default BudgetlyLogo;
