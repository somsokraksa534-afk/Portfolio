import { Link } from "react-router-dom";

import { ArrowUpRight, Github, Globe, CodeSlash } from "react-bootstrap-icons";

import EcommerceImg from "../assets/webimage/ecommerce.png";
import MovieImg from "../assets/webimage/movie.png";
import PhoneImg from "../assets/webimage/phone.png";

const projects = [
  {
    title: "Ecommerce Website",
    category: "React Project",
    image: EcommerceImg,
    description:
      "A modern ecommerce platform with responsive design, product browsing, shopping cart, and clean user experience.",
    github: "https://github.com/somsokraksa534-afk/e_commerce",
    demo: "https://e-commerce-delta-vert.vercel.app/",
    tech: ["React", "Tailwind CSS", "Responsive"],
  },

  {
    title: "Movie Website",
    category: "React + API",
    image: MovieImg,
    description:
      "Movie browsing application featuring search, trending movies, responsive layout, and modern UI design.",
    github: "https://github.com/somsokraksa534-afk/website-movie",
    demo: "https://website-movie1-owr19yfp8-iis-projects-b635ff52.vercel.app/",
    tech: ["React", "Movie API", "Tailwind CSS"],
  },

  {
    title: "Sell Phone Website",
    category: "Ecommerce UI",
    image: PhoneImg,
    description:
      "Responsive online phone store with product showcase, modern interface, and optimized shopping experience.",
    github: "https://github.com/somsokraksa534-afk/Website-phone-",
    demo: "https://website-phone.vercel.app/",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
];

export default function WebPage() {
  return (
    <section className="min-h-screen bg-zinc-50 py-20 transition-colors dark:bg-[#272626]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 mt-10">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-700
              dark:bg-blue-900/40
              dark:text-blue-300
            "
          >
            <CodeSlash size={16} />
            Web Development
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-zinc-900
              dark:text-white
            "
          >
            My Web Projects
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-zinc-600
              dark:text-zinc-400
            "
          >
            A collection of modern web applications built with React, Tailwind
            CSS, APIs, and responsive design.
          </p>
        </div>

        {/* Project Grid */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
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
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category + Arrow */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-zinc-100
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      dark:bg-zinc-800
                      dark:text-zinc-300
                    "
                  >
                    <CodeSlash size={14} />
                    {project.category}
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
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-zinc-900
                    dark:text-white
                  "
                >
                  {project.title}
                </h2>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-lg
                        bg-zinc-100
                        px-3
                        py-1
                        text-sm
                        dark:bg-zinc-800
                        dark:text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-black
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-zinc-800
                      dark:bg-white
                      dark:text-black
                    "
                  >
                    <Globe size={17} />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-zinc-300
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      transition
                      hover:bg-zinc-100
                      dark:border-zinc-700
                      dark:text-white
                      dark:hover:bg-zinc-800
                    "
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
