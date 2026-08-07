import { FileEarmarkPdf, Image } from "react-bootstrap-icons";

// Import all files from GDFolder
const files = import.meta.glob(
  "../assets/GDFolder/**/*.{png,jpg,jpeg,webp,pdf}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

// Convert files
const graphicItems = Object.entries(files).map(([path, url]) => {
  const file = path.split("/").pop();
  const fileName = file.split(".")[0];

  const folder = path.split("/")[path.split("/").length - 2];

  return {
    name: fileName,
    folder,
    url,
    type: path.endsWith(".pdf") ? "pdf" : "image",
  };
});

export default function GraphicPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div>
          <span
            className="
            rounded-full
            bg-zinc-100
            px-4
            py-2
            text-sm
            font-semibold
            text-zinc-700
            dark:bg-zinc-800
            dark:text-zinc-300
            "
          >
            Graphic Design
          </span>

          <h1
            className="
            mt-6
            text-5xl
            font-bold
            text-zinc-900
            dark:text-white
            "
          >
            My Graphic Works
          </h1>

          <p
            className="
            mt-4
            max-w-2xl
            text-zinc-600
            dark:text-zinc-400
            "
          >
            Collection of my graphic design projects including posters, banners,
            brochures, calendars and plans.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          mt-12
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >
          {graphicItems.map((item) => (
            <div
              key={item.url}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-zinc-200
              bg-white
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
              dark:border-zinc-800
              dark:bg-zinc-900
              "
            >
              {/* Preview Click */}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="
                  relative
                  h-72
                  overflow-hidden
                  bg-zinc-100
                  dark:bg-zinc-800
                  "
                >
                  {/* Folder Badge */}
                  <div
                    className="
                    absolute
                    left-4
                    top-4
                    z-10
                    rounded-full
                    bg-black/80
                    px-4
                    py-1
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur
                    "
                  >
                    {item.folder}
                  </div>

                  {item.type === "pdf" ? (
                    <iframe
                      src={item.url}
                      title={item.name}
                      className="
                      h-full
                      w-full
                      pointer-events-none
                      "
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                      "
                    />
                  )}

                  {/* Hover View */}
                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/40
                    opacity-0
                    transition
                    group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                      rounded-xl
                      bg-white
                      px-5
                      py-2
                      text-sm
                      font-bold
                      text-black
                      "
                    >
                      View {item.type === "pdf" ? "PDF" : "Image"}
                    </span>
                  </div>
                </div>
              </a>

              {/* Content */}

              <div className="p-6">
                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-zinc-500
                  "
                >
                  {item.type === "pdf" ? (
                    <FileEarmarkPdf size={18} />
                  ) : (
                    <Image size={18} />
                  )}

                  {item.folder}
                </div>

                <h2
                  className="
                  mt-3
                  text-xl
                  font-bold
                  capitalize
                  text-zinc-900
                  dark:text-white
                  "
                >
                  {item.name}
                </h2>

                <p
                  className="
                  mt-2
                  text-sm
                  text-zinc-500
                  "
                >
                  {item.type === "pdf" ? "PDF Document" : "Graphic Image"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
