import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react';

const socialLinks = [
  { icon: IconBrandInstagram, label: 'Instagram' },
  { icon: IconBrandLinkedin, label: 'Linkedin' },
  { icon: IconBrandYoutube, label: 'Youtube' },
  { icon: IconBrandWhatsapp, label: 'Whatsapp' },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center md:justify-start mt-4">
      {socialLinks.map(({ icon: Icon, label }) => (
        <a key={label} aria-label={label} target="_blank">
          <Icon
            size={28}
            stroke={1.5}
            className="cursor-pointer text-gray-400 hover:text-white transition"
          />
        </a>
      ))}
    </div>
  );
}
