export default function Heading({ icon, title, id }) {
  return (
    <h1 id={id} className="font-Sans text-[1.5rem] md:text-[2.5rem] heading text-[var(--neon)] flex items-center">
      <div className="px-3">
        <i className={icon}></i> <span>{title}</span>
      </div>
      <div className="h-[2px] bg-[var(--neon)] flex-grow"></div>
    </h1>
  );
}
