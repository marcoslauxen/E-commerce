interface FooterSectionProps {
  title: string;
  links: string[];
  onLinkClick?: (link: string) => void;
}

export default function FooterSection({
  title,
  links,
  onLinkClick,
}: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <button
              className="text-gray-400 hover:text-white transition"
              onClick={() => onLinkClick?.(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
