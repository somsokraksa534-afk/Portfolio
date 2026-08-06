export default function ProjectCard({ title, icon, color }) {
  return (
    <div className="group flex w-full max-w-[347px] flex-col items-center">
      <div className="relative w-full">
        {/* Top dots */}
        <div className="absolute -top-3 left-6 z-20 flex gap-2">
          <span className="size-2.5 rounded-full bg-red-400/80" />
          <span className="size-2.5 rounded-full bg-yellow-400/80" />
          <span className="size-2.5 rounded-full bg-green-400/80" />
        </div>

        {/* Main Card */}
        <div
          className="
            relative
            flex
            aspect-[337/201]
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-[28px]

            border
            border-black/10

            bg-white/70
            backdrop-blur-xl

            shadow-[0_20px_40px_rgba(0,0,0,0.08)]

            transition-all
            duration-500

            group-hover:-translate-y-3
            group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]

            dark:border-white/10
            dark:bg-[#181818]/80

            dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]
            dark:group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]
          "
        >
          {/* Color glow */}
          <div
            className={`
              absolute
              inset-0
              opacity-20
              blur-[80px]
              transition-all
              duration-500
              group-hover:opacity-50
              ${color}
            `}
          />

          {/* Grid pattern */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]

              bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
              bg-[size:30px_30px]

              dark:opacity-[0.05]
              dark:bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
            "
          />

          {/* Icon container */}
          <div
            className="
              relative
              z-10

              flex
              size-28
              items-center
              justify-center

              rounded-[32px]

              bg-black/[0.04]

              border
              border-black/5

              shadow-inner

              transition-all
              duration-500

              group-hover:scale-110
              group-hover:rotate-3


              dark:bg-white/[0.08]
              dark:border-white/10
            "
          >
            <i
              className={`
                bi ${icon}

                text-7xl

                text-gray-900

                dark:text-white
              `}
            />
          </div>

          {/* Shine effect */}
          <div
            className="
              absolute
              -left-20
              top-0
              h-full
              w-20

              rotate-12

              bg-white/40

              opacity-0

              transition-all
              duration-700

              group-hover:left-[120%]
              group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* Title */}
      <h3
        className="
          mt-6

          text-center

          text-2xl
          font-bold

          tracking-tight

          text-gray-900

          transition-colors

          sm:text-[30px]

          dark:text-white
        "
      >
        {title}
      </h3>
    </div>
  );
}
