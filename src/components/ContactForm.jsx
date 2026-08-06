import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your email service / backend of choice
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto w-full max-w-[550px] rounded-[40px] bg-white p-8 shadow-[0_0_4px_3px_rgba(0,0,0,0.15)] transition-colors sm:p-10 dark:bg-[#272626] dark:shadow-[0_0_4px_3px_rgba(255,255,255,0.25)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
        <div>
          <label className="mb-2 block text-lg font-medium sm:text-xl">
            Your Name
          </label>
          <div className="flex h-[42px] items-center gap-3 rounded-[10px] bg-[#f2f2f2] px-4 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] dark:bg-[#272626] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.25)]">
            <i className="bi bi-person-circle text-black/50 dark:text-white/50" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-transparent text-base outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium sm:text-xl">
            Email
          </label>
          <div className="flex h-[42px] items-center gap-3 rounded-[10px] bg-[#f2f2f2] px-4 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] dark:bg-[#272626] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.25)]">
            <i className="bi bi-envelope text-black/50 dark:text-white/50" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-transparent text-base outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium sm:text-xl">
            Message
          </label>
          <div className="flex h-[172px] items-start gap-3 rounded-[10px] bg-[#f2f2f2] px-4 py-3 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] dark:bg-[#272626] dark:shadow-[0_0_4px_2px_rgba(255,255,255,0.25)]">
            <i className="bi bi-chat-square-dots mt-1 text-black/50 dark:text-white/50" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
              rows={5}
              className="w-full resize-none bg-transparent text-base outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 flex h-[65px] w-full items-center justify-center gap-3 rounded-[10px] bg-black text-xl font-medium text-accent shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.02] dark:bg-accent dark:text-white"
        >
          {sent ? "Message Sent!" : "Send Message"}
          <i className="bi bi-send" />
        </button>
      </form>
    </div>
  );
}
