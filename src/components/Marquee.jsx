export default function Marquee({ children, speed = 30, className = "" }) {
  return (
    <div
      className={`
        group relative w-full overflow-hidden
        rounded-3xl
        border border-black/5
        bg-white/50
        backdrop-blur-xl
        transition-all duration-500

        dark:border-white/10
        dark:bg-white/[0.03]

        ${className}
      `}
    >
      {/* Gradient fade */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 z-10
          w-10
          bg-gradient-to-r
          from-white
          via-white/80
          to-transparent

          dark:from-[#0a0a0a]
          dark:via-[#0a0a0a]/80
          dark:to-transparent
        "
      />

      <div
        className="
          pointer-events-none absolute inset-y-0 right-0 z-10
          w-10
          bg-gradient-to-l
          from-white
          via-white/80
          to-transparent

          dark:from-[#0a0a0a]
          dark:via-[#0a0a0a]/80
          dark:to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          flex w-max
          animate-marquee
          items-center
          gap-6
          py-2

          group-hover:[animation-play-state:paused]
        "
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <div className="flex shrink-0 items-center gap-6">{children}</div>

        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
