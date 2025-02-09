export default function FooterSection({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h2 className="font-bold text-lg my-4">{title}</h2>
      <ul className="space-y-1">
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
