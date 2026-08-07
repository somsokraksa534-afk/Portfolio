import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  category,
  image,
  description,
  path,
}) {
  return (
    <Link to={path} className="group block">
      <div
        className="
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-zinc-200
          bg-white
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
          dark:border-zinc-800
          dark:bg-zinc-900
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <span
            className="
              rounded-full
              bg-zinc-100
              px-4
              py-2
              text-sm
              font-medium
              text-zinc-700
              dark:bg-zinc-800
              dark:text-zinc-300
            "
          >
            {category}
          </span>

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-zinc-300
              text-lg
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
        <div className="overflow-hidden px-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="
                h-64
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
        <div className="flex flex-col p-6">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-3 text-[15px] leading-7 text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          )}

          <div
            className="
              mt-6
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              group-hover:gap-4
              dark:text-white
            "
          >
            View Project
            <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
