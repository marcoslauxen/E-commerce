interface FooterSectionProps {
  title: string;
  links: string[];
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="text-center md:text-left">
      <h2 className="font-bold text-base mb-2">{title}</h2>
      <ul className="space-y-1 text-sm">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
