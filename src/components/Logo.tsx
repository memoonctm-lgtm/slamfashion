interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

export function Logo({ size = "md", showTagline = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 36, title: "text-lg", tagline: "text-[7px]" },
    md: { icon: 44, title: "text-xl", tagline: "text-[8px]" },
    lg: { icon: 60, title: "text-3xl", tagline: "text-[10px]" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="60" height="60" rx="4" fill="#121212" />
        <path
          d="M6 8 L6 52 L14 52 L14 30 L22 52 L30 52 L20 28 L30 8 L22 8 L14 26 L14 8 Z"
          fill="var(--color-gold, #D4AF37)"
        />
        <path
          d="M32 8 L32 52 L40 52 L40 34 L48 52 L56 52 L46 28 L56 8 L48 8 L40 24 L40 8 Z"
          fill="#FFFFFF"
        />
        <rect x="6" y="8" width="3" height="44" fill="var(--color-gold, #D4AF37)" opacity="0.15" />
      </svg>
      <div className="flex flex-col">
        <span
          className={`${s.title} font-black tracking-[0.2em] text-white leading-none`}
        >
          S.L.A.M.
        </span>
        {showTagline && (
          <span
            className={`${s.tagline} font-bold tracking-[0.3em] text-gold uppercase leading-tight mt-1`}
          >
            Submit Like A Man
          </span>
        )}
      </div>
    </div>
  );
}
