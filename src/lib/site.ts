export const site = {
  name: "Sushi Tomi",
  shortName: "Sushi Tomi",
  /** WordPress text logo spelling from the live site */
  wordmark: "Sushitomi",
  tagline: "Authentic Japanese sushi in Mountain View",
  description:
    "Sushi Tomi serves fresh sushi, sashimi, and classic Japanese dishes in Mountain View, California. Call (650) 968-3227 for lunch, dinner, or takeout.",
  phone: "(650) 968-3227",
  phoneHref: "tel:+16509683227",
  address: {
    street: "635 W Dana St",
    city: "Mountain View",
    state: "CA",
    zip: "94040",
    full: "635 W Dana St, Mountain View, CA 94040",
  },
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Sushi+Tomi,+635+W+Dana+St,+Mountain+View,+CA+94040",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50744.52464896486!2d-122.0631925027736!3d37.35356828852244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb73161d008c9%3A0xf1ccd9ca251ef04!2sSushi%20Tomi!5e0!3m2!1sen!2sus!4v1680210507763!5m2!1sen!2sus",
  sourceUrl: "https://sushitomi.us/",
  yelpUrl: "https://www.yelp.com/biz/sushi-tomi-mountain-view-2",
} as const;

export const hours = [
  { day: "Monday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:00 PM"] },
  { day: "Tuesday", slots: ["Closed"] },
  { day: "Wednesday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:00 PM"] },
  { day: "Thursday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:00 PM"] },
  { day: "Friday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:30 PM"] },
  { day: "Saturday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:30 PM"] },
  { day: "Sunday", slots: ["11:30 AM - 1:30 PM", "5:00 PM - 8:00 PM"] },
] as const;

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Visit", href: "/visit" },
] as const;

export const socialLinks = [
  {
    network: "facebook" as const,
    href: "https://www.facebook.com/sushitomimtview",
    label: "Facebook",
  },
  {
    network: "instagram" as const,
    href: "https://www.instagram.com/sushitomi_tomisushi",
    label: "Instagram",
  },
  {
    network: "yelp" as const,
    href: "https://www.yelp.com/biz/sushi-tomi-mountain-view-2",
    label: "Yelp",
  },
] as const;

export const menus = [
  {
    id: "lunch",
    title: "Lunch menu",
    summary: "Weekday and weekend lunch plates, bowls, and rolls.",
    image: "/images/menu-lunch-front.jpg",
    imageAlt: "Sushi Tomi lunch menu cover with chef illustration",
    pages: [
      "/images/menu-lunch-front.jpg",
      "/images/menu-lunch-back.jpg",
    ],
    pdf: "/menus/lunch.pdf",
  },
  {
    id: "dinner",
    title: "Dinner menu",
    summary: "Full dinner service with appetizers, entrees, and chef specials.",
    image: "/images/menu-dinner-front.jpg",
    imageAlt: "Sushi Tomi dinner menu cover",
    pages: [
      "/images/menu-dinner-front.jpg",
      "/images/menu-dinner-back.jpg",
    ],
    pdf: "/menus/dinner.pdf",
  },
  {
    id: "sushi",
    title: "Sushi & maki",
    summary: "Nigiri, sashimi, and house maki from the sushi bar.",
    image: "/images/menu-sushi.jpg",
    imageAlt: "Assorted sushi and sashimi platter from Sushi Tomi",
    pages: ["/images/menu-sushi.jpg"],
    pdf: null,
  },
  {
    id: "drinks",
    title: "Drinks & sake",
    summary: "Beer, wine, soft drinks, and a curated sake list.",
    image: "/images/menu-drinks.jpg",
    imageAlt: "Sushi Tomi drinks menu",
    pages: ["/images/menu-drinks.jpg"],
    pdf: "/menus/drinks.pdf",
    extraPdf: { label: "Sake map PDF", href: "/menus/sake-map.pdf" },
  },
] as const;

export const highlights = [
  {
    title: "Fresh sushi daily",
    body: "Nigiri, sashimi, and rolls prepared to order at the bar - the heart of Sushi Tomi.",
    image: "/images/sashimi-platter.jpg",
    imageAlt: "Close-up of tuna and yellowtail sashimi with shiso",
    focal: "55% 40%",
  },
  {
    title: "Chirashi & classics",
    body: "Generous bowls and Japanese favorites that locals in Mountain View keep coming back for.",
    image: "/images/hero-chirashi.jpg",
    imageAlt: "Chirashi bowl with assorted sashimi over rice",
    focal: "50% 45%",
  },
  {
    title: "Sake & soft drinks",
    body: "Pair dinner with sake, beer, or a simple soft drink - ask the staff for a recommendation.",
    image: "/images/sake-map.jpg",
    imageAlt: "Illustrated sake pairing map",
    focal: "50% 40%",
  },
] as const;
