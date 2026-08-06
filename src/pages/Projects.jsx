import ProjectCard from "../components/ProjectCard";
import ScrollToTop from "../components/Scrolltotop";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="mt-15 mx-auto max-w-[1280px] px-4 pt-16 sm:px-8 sm-mt-15">
      <section className="text-center">
        <p className="text-xl font-bold text-accent sm:text-2xl">
          WELCOME TO MY PROJECT PORTFOLIO
        </p>
        <p className="mt-6 text-2xl font-bold sm:text-4xl">Scroll Down</p>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-accent sm:text-2xl">
          Here you can explore some of the projects I&rsquo;ve worked on,
          showcasing my skills in frontend development and design. Each
          project reflects my passion for creating beautiful and functional
          digital experiences.
        </p>
        <i className="bi bi-chevron-double-down mt-6 block animate-bounce text-3xl text-accent" />
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold sm:text-4xl">View My Project</h2>
        <hr className="mt-4 mb-14 max-w-[292px] border-black/20 dark:border-white/20" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
      <ScrollToTop/>
    </div>
  );
}
