// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://leger.run",
  trailingSlash: "ignore",
  integrations: [
    starlight({
      title: "Leger",
      plugins: [],
      editLink: false,
      sidebar: false,
      social: {
        github: "https://github.com/leger-labs",
        linkedin: "https://linkedin.com/company/leger-labs",
      },
      customCss: [
        "./src/tailwind.css",
        "./src/styles/custom.css",

        "@fontsource/jost/100.css",
        "@fontsource/jost/200.css",
        "@fontsource/jost/300.css",
        "@fontsource/jost/400.css",
        "@fontsource/jost/600.css",
        "@fontsource/jost/700.css",
        "@fontsource/jost/800.css",
        "@fontsource/jost/900.css",

        "@fontsource/readex-pro/200.css",
        "@fontsource/readex-pro/300.css",
        "@fontsource/readex-pro/400.css",
        "@fontsource/readex-pro/600.css",
        "@fontsource/readex-pro/700.css",
      ],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
      },
    }),
    tailwind({ applyBaseStyles: false }),
    react({
      include: "./src/components/*.[jsx|tsx]",
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    },
  },
});
