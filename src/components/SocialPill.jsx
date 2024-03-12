import "./imageCards.css"

const SocialPill = ({ href, children }) => {
  return (
    <a
    href={href}
      className={"linksSocial ml-4 inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default SocialPill;