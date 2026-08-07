export default function ProjectCard({ title, description, image, category }) {
  return (
    <div className="group h-full w-full">
      <div
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          border-zinc-200
          bg-white
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          dark:border-zinc-800
          dark:bg-[#111111]
          dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            {category}
          </span>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-zinc-200
              transition-all
              duration-300
              group-hover:rotate-45
              group-hover:bg-black
              group-hover:text-white
              dark:border-zinc-700
              dark:group-hover:bg-white
              dark:group-hover:text-black
            "
          >
            ↗
          </div>
        </div>

        {/* Image */}
        <div className="px-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="
                h-[240px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-3 flex-1 text-[15px] leading-7 text-zinc-500 dark:text-zinc-400">
            {description}
          </p>

          <button
            className="
              mt-6
              flex
              items-center
              gap-2
              font-medium
              text-black
              transition-all
              group-hover:gap-4
              dark:text-white
            "
          >
            View Project
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
