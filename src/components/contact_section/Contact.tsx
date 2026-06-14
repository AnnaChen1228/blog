import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact({ contact, size }: ContactProps) {
  const socialMediaLinks = [
    {
      name: "email",
      icon: "fas fa-envelope",
      link: `mailto:${contact.email}`,
      label: "Email",
      value: contact.email,
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: contact.github,
      label: "GitHub",
      value: "@AnnaChen1228",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: contact.linkedin,
      label: "LinkedIn",
      value: "Anna Chen",
    },
  ];

  // Compact, business-card style: just the email / GitHub / LinkedIn icons.
  // Used in the post-page sidebar where the full section is far too big.
  if (size === "md") {
    return (
      <div className="flex items-center justify-center gap-3 pt-1">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary flex items-center justify-center text-secondary hover:text-white transition-colors duration-200"
          >
            <i className={`${social.icon} text-base`} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 flex flex-col items-center text-center gap-5 sm:gap-8">
      {/* Section header */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl lg:text-5xl font-display font-bold section-heading text-text dark:text-dk-text">
          Get In Touch
        </h1>
        <p className="text-lg text-text/60 dark:text-dk-text/60 max-w-md mt-4">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </div>

      {/* Social links */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex-1 flex flex-col items-center gap-2 p-4 sm:p-5 bg-card-bg dark:bg-dk-card-bg border border-secondary/20 hover:border-secondary rounded-2xl hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-all duration-300">
              <i
                className={`${social.icon} text-2xl text-secondary group-hover:text-white transition-colors duration-300`}
              />
            </div>
            <div>
              <p className="font-semibold text-text dark:text-dk-text">{social.label}</p>
              <p className="text-xs text-text/50 dark:text-dk-text/50 mt-0.5">{social.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`mailto:${contact.email}`}
        className="inline-flex items-center gap-2 bg-secondary hover:bg-accent text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30 text-base lg:text-lg"
      >
        <i className="fas fa-paper-plane" />
        Send a Message
      </a>
    </div>
  );
}
