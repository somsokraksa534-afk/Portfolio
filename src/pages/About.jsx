import SkillCard from "../components/SkillCard";
import { frontendSkills, backendSkills, databaseSkills, tools } from "../data/skills";
import Raksa from "../assets/own/Raksa.jpg";
import ScrollToTop from "../components/Scrolltotop";

export default function About() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 pt-12 sm:px-8 mt-15 sm:mt-20">
      {/* Intro card */}
      <div className="flex flex-col items-center gap-10 rounded-[30px] bg-white p-8 shadow-[0_0_4px_3px_rgba(0,0,0,0.15)] transition-colors sm:p-12 lg:flex-row lg:items-start lg:justify-between dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-2xl font-semibold sm:text-[32px]">About Me</h1>
          <p className="mt-6 text-sm leading-relaxed sm:text-lg ">
            I&rsquo;m a passionate Web Developer and UI/UX Designer dedicated to
            creating modern, responsive, and user-friendly digital experiences.
            I enjoy transforming ideas into clean, functional, and visually
            engaging products through thoughtful design and efficient code.
            Always learning, always building, and always striving to create
            solutions that make a meaningful impact.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <a
              href="https://github.com/somsokraksa534-afk"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl transition-transform hover:scale-110 hover:text-accent"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="https://t.me/somsokraksa217721setec"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="text-2xl transition-transform hover:scale-110 hover:text-accent"
            >
              <i className="bi bi-telegram" />
            </a>
            <a
              href="https://www.linkedin.com/in/som-sokraksa-b3751a428/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl transition-transform hover:scale-110 hover:text-accent"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>

        <div className="flex h-56 w-56 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-[0_0_4px_5px_rgba(0,0,0,0.15)] sm:h-72 sm:w-72 lg:h-[343px] lg:w-[336px] dark:shadow-[0_0_4px_5px_rgba(255,255,255,0.25)]">
          <img
            src={Raksa}
            alt="Som Sokraksa"
            className="size-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Skills */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Technologies that I have learnt
        </h2>
        <hr className="mt-4 mb-12 border-2 max-w-[572px] border-black/20 dark:border-white/20" />

        <SkillGroup title="Frontend Languages" skills={frontendSkills} />
        <SkillGroup title="Backend Languages" skills={backendSkills} />
        <SkillGroup title="Database" skills={databaseSkills} />
        <SkillGroup title="Tools" skills={tools} />
      </section>
      <ScrollToTop />
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div className="mb-14">
      <h3 className="mb-6 text-2xl font-bold text-accent">{title}</h3>
      <div className="flex flex-wrap gap-6">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
