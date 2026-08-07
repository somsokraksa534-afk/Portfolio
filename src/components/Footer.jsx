export default function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-[1280px] px-4 pb-16 text-center sm:px-8">
      <h2 className="text-xl font-bold sm:text-4xl">
        Let&rsquo;s create something{" "}
        <span className="text-accent">extraordinary</span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-sm text-black/50 sm:text-xl dark:text-white/50">
        I&rsquo;m currently avaiable for freelance work and open to new
        opportunities. Whether you have a project to discuss or just want to
        contact, you can inbox to my email is open!
      </p>

      <a
        href="mailto:somsokraksa534@gmail.com?subject=Hello&body=Hi, I'd like to get in touch!"
        className="mx-auto mt-10 flex h-[60px] w-[160px] items-center justify-center rounded-2xl bg-black font-bold text-lg text-white shadow-[0_0_4px_3px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 sm:h-[70px] sm:w-[220px] sm:text-2xl dark:bg-accent"
      >
        Say Hello
      </a>

      <hr className="mx-auto mt-16 max-w-[678px] border-black/20 dark:border-white/20" />

      <p className="mt-10 text-xl font-bold sm:text-4xl">Som Sokraksa</p>
      <p className="mt-2 text-sm text-black/50 sm:text-2xl dark:text-white/50">
        Web Developer &amp; UX/UI Designer
      </p>

      <div className="mt-8 flex items-center justify-center gap-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-2xl transition-transform hover:scale-110 hover:text-accent"
        >
          <i className="bi bi-github" />
        </a>
        <a
          href="https://t.me"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="text-2xl transition-transform hover:scale-110 hover:text-accent"
        >
          <i className="bi bi-telegram" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-2xl transition-transform hover:scale-110 hover:text-accent"
        >
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </footer>
  );
}
