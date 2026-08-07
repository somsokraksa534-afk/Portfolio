import { ArrowUpRight, Palette, Eye } from "react-bootstrap-icons";

const uxuiProjects = [
  {
    title: "Zando App",
    url: "https://www.figma.com/proto/cpGbCF408gXxQbF0wMUoed/Final_UX-UI?node-id=3343-24&t=jONEaff5W5ku6LxF-1",
    embedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcpGbCF408gXxQbF0wMUoed%2FFinal_UX-UI%3Fnode-id%3D3343-24%26t%3DjONEaff5W5ku6LxF-1",
    description:
      "A comprehensive UX/UI redesign prototype for the Zando mobile app, focusing on modern aesthetics and user-friendly navigation.",
    type: "Mobile App",
  },

  {
    title: "ABA App",
    url: "https://www.figma.com/proto/jwToLuXKx6LrPpkP6BbiXX/Final-ABA-Project?node-id=0-1&t=d6ngL1j1BopdqOly-1",
    embedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjwToLuXKx6LrPpkP6BbiXX%2FFinal-ABA-Project%3Fnode-id%3D0-1%26t%3Dd6ngL1j1BopdqOly-1",
    description:
      "An improved user interface and experience prototype for the ABA banking application.",
    type: "Banking App",
  },

  {
    title: "LibreShelf Website",
    url: "https://www.figma.com/proto/AfuGpZ2XMmjhj907EhSdRj/LibreShelf?node-id=0-1&t=PiKilnUXCzJbvECk-1",
    embedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAfuGpZ2XMmjhj907EhSdRj%2FLibreShelf%3Fnode-id%3D0-1%26t%3DPiKilnUXCzJbvECk-1",
    description:
      "A user-centered website design improving online book shopping experience.",
    type: "Website Design",
  },

];

export default function UxUiPage() {
  return (
    <section className="px-6 py-20 mt-15">
      {/* Header */}

      <div className="mx-auto max-w-7xl px-6">
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
          <Palette size={16} />
          UX / UI Design
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
          My UX/UI Projects
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
          Interactive prototypes designed with Figma, focusing on usability,
          modern interfaces, and user experience.
        </p>
      </div>

      {/* Project Cards */}

      <div
        className="
mx-auto
mt-12
grid
max-w-7xl
gap-8
md:grid-cols-2
xl:grid-cols-3
"
      >
        {uxuiProjects.map((project) => (
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
            {/* Preview */}

            <div
              className="
relative
h-64
overflow-hidden
bg-zinc-100
dark:bg-zinc-800
"
            >
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="
h-full
w-full
transition
duration-700
group-hover:scale-105
"
              />

              <div
                className="
absolute
right-4
top-4
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-white/80
backdrop-blur
dark:bg-black/50
"
              >
                <Eye size={18} />
              </div>
            </div>

            {/* Content */}

            <div className="p-6">
              <div
                className="
mb-5
flex
items-center
justify-between
"
              >
                <span
                  className="
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
                  {project.type}
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
transition
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

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="
mt-8
flex
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
                <Palette size={17} />
                Open Figma
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
