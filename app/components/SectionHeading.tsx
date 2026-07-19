export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <svg
        width="72"
        height="20"
        viewBox="0 0 72 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 doodle"
      >
        <path
          d="M6,16 L6,6 L66,6"
          stroke="#3B6E8C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6,16 Q9,13 12,16"
          stroke="#3B6E8C"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-mono text-[11px] text-blue-pen tracking-[0.15em] uppercase">
        {number}
      </span>
      <h2 className="text-2xl sm:text-3xl font-display text-ink -ml-1">
        {title}
      </h2>
    </div>
  );
}
