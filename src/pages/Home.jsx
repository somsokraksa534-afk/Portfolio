import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Marquee from "../components/Marquee";
import { projects } from "../data/projects";
import Scrolltotop from "../components/Scrolltotop";
import Raksa from "../assets/own/Raksa.jpg";

const badges = [
  { label: "Studio Photography", icon: "bi-camera-fill" },
  { label: "Network and Server Management", icon: "bi-hdd-network-fill" },
  { label: "Web Development", icon: "bi-file-code" },
  { label: "Graphic Design", icon: "bi-palette-fill" },
  { label: "Database", icon: "bi-database-fill" },
  { label: "Video Editing", icon: "bi bi-camera-reels-fill" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mt-12 mx-auto flex max-w-[1280px] flex-col-reverse items-center gap-12 px-4 pt-16 sm:px-8 lg:flex-row lg:justify-between lg:pt-20">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[45px]">
            Welcome to my <span className="text-accent">portfolio,</span>
            <br />
            I&rsquo;m Som Sokraksa
          </h1>
          <p className="mt-4 text-2xl font-bold text-accent sm:text-[45px]">
            Junior Web Developer
            <br />& UX/UI Designer
          </p>
          <button className="mx-auto mt-8 flex h-[54px] w-[208px] items-center justify-center rounded-full bg-white font-semibold shadow-[0_0_4px_2px_rgba(0,0,0,0.15)] transition-transform hover:scale-105 lg:mx-0 dark:bg-[#272626] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.25)]">
            Dowload My CV
          </button>
        </div>

        <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-[0_0_4px_5px_rgba(0,0,0,0.15)] sm:h-80 sm:w-80 lg:h-[464px] lg:w-[454px] dark:shadow-[0_0_4px_5px_rgba(255,255,255,0.25)]">
          <img
            src={Raksa}
            alt="Som Sokraksa"
            className="size-full rounded-full object-cover"
          />
        </div>
      </section>

      {/* Badge strip */}
      <div className="mt-8 w-full bg-white py-4 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] transition-colors dark:bg-[#272626] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.2)]">
        <Marquee speed={22}>
          {badges.map((b) => (
            <span
              key={b.label}
              className="flex shrink-0 items-center gap-2 rounded-[10px] bg-[#d9d9d9] px-4 py-2 text-sm font-semibold whitespace-nowrap dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]"
            >
              <i className={`bi ${b.icon}`} />
              {b.label}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Feelings section */}
      <section className="mx-auto mt-20 max-w-[1280px] px-4 sm:px-8">
        <h2 className="text-2xl font-bold text-center sm:text-4xl sm:text-left">
          My Feeling on my Career
        </h2>
        <hr className="mt-4 mb-10 max-w-[456px] border-black/20 border-3 dark:border-white" />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="ml-13 mt-20 flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 shadow-[0_0_4px_5px_rgba(0,0,0,0.15)] sm:h-80 sm:w-80 lg:h-[464px] lg:w-[454px] dark:shadow-[0_0_4px_5px_rgba(255,255,255,0.25)]">
            <img
              src={Raksa}
              alt="Som Sokraksa"
              className="size-full rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-[40px] bg-white p-8 shadow-[0_0_4px_3px_rgba(0,0,0,0.15)] transition-colors dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]">
              <div className="flex items-center gap-3">
                <i className="bi bi-chat-dots-fill text-accent" />
                <p className="text-lg font-medium sm:text-2xl">
                  Express my feeling from me
                </p>
              </div>
              <hr className="my-4 border-3 border-black/10 dark:border-white" />
              <p className="text-sm leading-relaxed sm:text-lg">
                I love creating things that people can actually use. For me, web
                development isn&rsquo;t just about writing code, and design
                isn&rsquo;t just about making things look good—it&rsquo;s about
                solving real problems and creating experiences that feel simple,
                intuitive, and enjoyable.
              </p>
            </div>

            <div className="rounded-[40px] bg-white p-8 shadow-[0_0_4px_3px_rgba(0,0,0,0.15)] transition-colors dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]">
              <div className="flex items-center gap-3">
                <i className="bi bi-chat-dots-fill text-accent" />
                <p className="text-lg font-medium sm:text-2xl">
                  Career in the future
                </p>
              </div>
              <hr className="my-4 border-3 border-black/10 dark:border-white" />
              <p className="text-sm leading-relaxed sm:text-lg">
                I&rsquo;m building my career with one clear goal: to become a
                skilled Full-Stack Web Developer and UI/UX Designer who creates
                digital products that make a real impact. In the future, I want
                to work on challenging projects where I can continue learning,
                collaborate with talented people, and grow both technically and
                creatively. I believe technology should solve real problems, and
                I want to be part of building solutions that improve
                people&rsquo;s everyday lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto mt-24 max-w-[1280px] px-4 sm:px-8">
        <h2 className="text-center text-2xl font-bold sm:text-4xl">
          My Project
        </h2>
        <hr className="mx-auto  border-3 mt-4 mb-12 w-48 border-black/20 dark:border-white" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto mt-24 max-w-[1280px] scroll-mt-32 px-4 sm:px-8"
      >
        <h2 className="text-2xl text-center sm:text-left font-bold sm:text-4xl">Send Me a Message</h2>
        <hr className="mt-4 border-3 mb-12 max-w-[363px] border-black/20 dark:border-white" />
        <ContactForm />
      </section>
      <Scrolltotop />
    </div>
  );
}
