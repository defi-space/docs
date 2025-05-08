import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "@docusaurus/eslint-plugin";
const math = require("remark-math");
const katex = require("rehype-katex");

require("dotenv").config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME, ALGOLIA_SITE_VERIFICATION } = process.env;
if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX_NAME || !ALGOLIA_SITE_VERIFICATION) {
  throw new Error("Missing Algolia environment variables (ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME)");
}

const config: Config = {
  title: "defi.space | Documentation",
  tagline: "Quick Start & Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://defi-space.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "defi-space", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Development configuration
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Development server configuration
  // customFields: {
  //   projectConfig: {
  //     port: 3371,
  //   },
  // },

  // Add markdown theme for Mermaid support

  // Add Mermaid theme
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: "/",
          // showLastUpdateTime: true,
          sidebarPath: "./src/components/doc-sidebars.ts",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: "https://github.com/defi-space/docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: process.env.GOOGLE_TAG_MANAGER_ID || "none",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: "announcement-bar",
    //   content: "🅳🅾🅲🆂 🆂🆄🅱🅹🅴🅲🆃 🆃🅾 🅲🅷🅰🅽🅶🅴 • 🆄🅿🅳🅰🆃🅴🆂 🆀🆄🅴🆄🅴🅳 🅵🅾🆁 🅽🅴🆇🆃 🆆🅴🅴🅺",
    //   backgroundColor: "#1C1C1D",
    //   textColor: "#ffffff",
    //   isCloseable: false,
    // },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    // Add Mermaid configuration
    mermaid: {
      theme: {
        light: "dark",
        dark: "dark",
      },
      options: {
        fontFamily: "JetBrains Mono",
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "DEFI.SPACE",
      logo: {
        alt: "defi.space Logo",
        src: "img/ds-logo-white-red-eye.png",
      },
      items: [
        {
          to: "/quick-start",
          label: "Quick Start",
          position: "left",
          className: "V3_active",
        },
        {
          to: "/overview",
          label: "Protocol Overview",
          position: "left",
          className: "V3_active",
        },
        {
          to: "/faq",
          label: "FAQ",
          position: "right",
          className: "V3_active",
        },
        {
          href: "https://github.com/defi-space",
          position: "right",
          className: "header-github-link persistent",
          "aria-label": "GitHub repository",
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: ALGOLIA_APP_ID,
      // Public API key: it is safe to commit it
      apiKey: ALGOLIA_API_KEY,
      indexName: ALGOLIA_INDEX_NAME,
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "GitHub",
          items: [
            {
              label: "ds-agents",
              href: "https://github.com/defi-space/ds-agents",
            },
            {
              label: "ds-indexer",
              href: "https://github.com/defi-space/ds-indexer",
            },
            {
              label: "ds-docs",
              href: "https://github.com/defi-space/ds-docs",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "X",
              href: "https://x.com/defidotspace",
            },
            {
              label: "Discord",
              href: "https://discord.gg/c322bJQ7Fp",
            },
            {
              label: "Site",
              href: "https://defi.space",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} defi.space`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      defaultLanguage: "typescript",
      additionalLanguages: ["solidity"],
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: ALGOLIA_SITE_VERIFICATION,
      },
    },
  ],
};

export default config;
