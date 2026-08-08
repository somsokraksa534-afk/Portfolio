import { Image, FileEarmarkPdf } from "react-bootstrap-icons";
import ScrollToTop from "../components/Scrolltotop";

// Import all files from Studio
const files = import.meta.glob(
  "../assets/Studio/**/*.{png,jpg,jpeg,webp,pdf}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

// Convert files
const photoItems = Object.entries(files).map(([path, url]) => {
  const file = path.split("/").pop();
  const fileName = file.split(".")[0];

  const folder = path.split("/")[path.split("/").length - 2];

  return {
    name: fileName.replaceAll("-", " "),
    folder,
    url,
    type: file.endsWith(".pdf") ? "pdf" : "image",
  };
});

export default function Photopage() {
  return (
    <section className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 mt-15">
        {/* Header */}
        <div>
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
            Studio Photography
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
            My Studio Photography Works
          </h1>

          <p
            className="
            mt-4
            max-w-2xl
            text-zinc-600
            dark:text-zinc-400
            "
          >
            Collection of my studio photography projects including studio photos, creative 
            shots and visual works.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          mt-12
          grid
          grid-cols-1
          justify-items-center
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {photoItems.map((item, index) => (
            <div
              key={index}
              className="
              w-full
              max-w-[380px]
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-lg
              transition
              hover:-translate-y-2
              hover:shadow-xl
              dark:bg-zinc-900
            "
            >
              {/* Preview */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="
                  relative
                  h-72
                  overflow-hidden
                  bg-zinc-100
                  dark:bg-zinc-800
                "
                >
                  {/* Folder Name */}
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

                  {/* Image / PDF Preview */}
                  {item.type === "pdf" ? (
                    <div
                      className="
                      flex
                      h-full
                      items-center
                      justify-center
                    "
                    >
                      <FileEarmarkPdf size={80} className="text-red-500" />
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                    />
                  )}

                  {/* Hover */}
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
                    duration-300
                    group-hover:opacity-100
                  "
                  >
                    <span
                      className="
                      rounded-full
                      bg-white
                      px-5
                      py-2
                      text-sm
                      font-semibold
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
                  {item.type === "pdf" ? <FileEarmarkPdf /> : <Image />}

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
                  {item.type === "pdf" ? "PDF Document" : "Photography Image"}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-zinc-900
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-zinc-700
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-zinc-200
                "
                >
                  {item.type === "pdf" ? (
                    <>
                      <FileEarmarkPdf />
                      View PDF
                    </>
                  ) : (
                    <>
                      <Image />
                      View Image
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}
