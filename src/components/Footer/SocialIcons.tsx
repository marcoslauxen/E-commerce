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
    <div className="flex gap-3">
      {socialLinks.map(({ icon: Icon, label }) => (
        <Icon
          key={label}
          size={24}
          stroke={1.5}
          className="cursor-pointer hover:text-gray-300 transition"
          aria-label={label}
        />
      ))}
    </div>
  );
}
