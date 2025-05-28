[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

# Leger Wiki

This is the source code for the new wiki website for [Leger](https://github.com/leger-labs/leger)

## Desired specification

built in astro starlight, and to be deployed on cludflare pages using the action setup from within cloudflare dashboard - will NEVER be developed or deployed from local.

* www.leger.run main page which is VERY similar to how the fabric page is structured. we use the same animated background as fabric wiki landing page. first section has a title (Leger) and subtitle which for now is lorem ipsum. the two buttons are "Start Deploying" (uses the "Snippets gallery" icon from fabric wiki; redirects to app.leger.run) and "For Enterprise" (uses "see guide" icon which is an arrow, redirects to cal.com/leger); the What's That? section keep as is but make the subtext "lorem ipsum" for now. then the Features section keep exactly as is (six cards that behave exactly like fabric's and leave the text for now). Remove Visual Tour and Show Support sections entirely for now. 
* www.leger.run/about , www.leger.run/careers, www.leger.run/terms , www.leger.run/privacy  are "special" pages because they do not present the leftbar that we usually see in starlight. they are very simple pages with text (mdx)
* www.leger.run/changelog is inspired by the https://github.com/trueberryless-org/starlight-changelog repo which we will add on separately (it will mirror that page very very closely)
* header is uniform across the whole website: it's just the "🌍 Leger" on the left (not an icon, we use the emoji); then search bar (like fabric wiki), then on the right dark/light mode toggle button, and the Login button which is a redirect to app.leger.run (a separate deployment)
* footer is a simple piece where we list: About, Careers, Schedule Call, Changelog, Terms and Privacy. further down there is a separate section with "© 2024-2025 Leger Labs, Inc. All rights reserved." on the left along with logos redirecting to github and linkedin - as it currently is on my existing website.
* throughout the page we keep the same buttons that fabric uses (the radius of the buttons is ideal) 
* unlike fabric, i want the text of the landing page to be in black when in light mode because white-on-white is hard to read on fabric wiki


find the repo tree of fabric-wiki which this project was forked from below so that you know what files to keep as is (i have gone ahead and forked fabric-wiki already so we have a good starting point)

```
Directory structure:
└── fabric-development-fabric-wiki/
    ├── README.md
    ├── astro.config.mjs
    ├── buildsphinx.sh
    ├── LICENSE
    ├── package.json
    ├── tailwind.config.mjs
    ├── tsconfig.json
    ├── public/
    │   ├── CNAME
    │   ├── assets/
    │   │   └── 0.0.1/
    │   └── showcase/
    │       ├── axenide-ax-shell.webp
    │       ├── rubiin-hydepanel.webp
    │       └── slumberdemon-spacerice.webp
    ├── src/
    │   ├── env.d.ts
    │   ├── tailwind.css
    │   ├── assets/
    │   ├── components/
    │   │   ├── FeatureCard.astro
    │   │   ├── HeroBackground.astro
    │   │   ├── NotFoundView.astro
    │   │   ├── ParticleLogo.astro
    │   │   ├── ShowcaseCard.astro
    │   │   ├── SnippetInfoCard.astro
    │   │   ├── TypeSignature.astro
    │   │   └── assets/
    │   │       ├── dust-texture.webp
    │   │       ├── fragment.glsl
    │   │       └── vertex.glsl
    │   ├── content/
    │   │   ├── config.ts
    │   │   └── docs/
    │   │       ├── 404.mdx
    │   │       ├── index.mdx
    │   │       ├── api/
    │   │       │   └── fabric.default.mdx
    │   │       ├── contributing/
    │   │       │   ├── code-style-guide.mdx
    │   │       │   ├── development-environment.mdx
    │   │       │   └── hacking-guide.mdx
    │   │       ├── getting-started/
    │   │       │   ├── client-and-cli.mdx
    │   │       │   ├── faq.mdx
    │   │       │   ├── installation-guide.mdx
    │   │       │   ├── introduction.mdx
    │   │       │   ├── prepare.mdx
    │   │       │   └── stubs-guide.mdx
    │   │       ├── guide/
    │   │       │   ├── fabricators.mdx
    │   │       │   ├── first-widget.mdx
    │   │       │   ├── services.mdx
    │   │       │   └── styling.mdx
    │   │       └── snippets/
    │   │           ├── entry-placeholder-color.mdx
    │   │           ├── gallery.mdx
    │   │           └── property-animator.mdx
    │   ├── plugins/
    │   │   └── CorrectURL.ts
    │   └── styles/
    │       └── custom.css
    └── .github/
        └── workflows/
            └── astro.yml

```

note that there is no logo for Leger - only an emoji so do not have it in the first section landing page (unlike how fabric has its logo). In terms of typography the font used by fabric throughout is extremely nice, no need to change it at all
