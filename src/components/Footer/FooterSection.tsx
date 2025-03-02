interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="text-center md:text-left">
      <h2 className="font-bold text-base mb-3">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="cursor-pointer text-gray-400 hover:text-white transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
