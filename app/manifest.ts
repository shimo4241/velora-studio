import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velora Studio",
    short_name: "Velora",
    description: "AI, Digital Marketing and Premium Web Growth",
    start_url: "/",
    display: "standalone",
    background_color: "#010101",
    theme_color: "#010101",
    icons: [
      {
        src: "/brand/velora-icon.png",
        sizes: "any",
        type: "image/png"
      }
    ]
  };
}
