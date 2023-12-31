/**
 * Summary. Attribution for Frontend Mentor and Sean Hill.
 */

export default function Attribution() {
  return (
    <footer
      className="px-4 py-3 text-center text-sm text-scheme-light-400 dark:text-scheme-dark-500"
      aria-label="Site"
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className=" text-brand-bright-blue underline hover:no-underline focus:no-underline"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.seanhillweb.com"
        className=" text-brand-bright-blue underline hover:no-underline focus:no-underline"
      >
        Sean Hill
      </a>
      .
    </footer>
  );
}
