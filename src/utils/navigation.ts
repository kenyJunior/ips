// An array of links for navigation bar
const navBarLinks = [
  { name: "Acceuil", url: "/" },
  { name: "Services", url: "/blog" },
  { name: "Solutions", url: "/products" },
  //{ name: "Industries", url: "/services" },
 
  //{ name: "Réalisations", url: "/products" },
  { name: "Docs", url: "/welcome-to-docs/" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [

  {
    section: "Nos Services",
    links: [
      { name: "Internet des objets", url: "/insights/insight-1" },
      { name: "Analyse de données", url: "/insights/insight-2" },
      { name: "IA & Automatisation", url: "/insights/insight-3" },
    ],
  },

  {
    section: "Nos Solutions",
    links: [
      { name: "Gestion de projets technologiques", url: "/products/item-t845" },
      { name: "Infrastructures", url: "/products/item-a765" },
      { name: "Cybersécurité", url: "/products/item-b203" },
      { name: "Formations", url: "/products/item-f303" },
    ],
  },

  {
    section: "Company",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Contact", url: "/contact" },
      //{ name: "Services", url: "/services" },
      //{ name: "Nos réalisations", url: "/products" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.linkedin.com/company/industrial-power-solutions-ips-energy-it-experts/",
  slack: "https://slack.com/",
  linkedin: "https://www.linkedin.com/company/industrial-power-solutions-ips-energy-it-experts/"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};