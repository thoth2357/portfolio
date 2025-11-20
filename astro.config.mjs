import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";
import swup from "@swup/astro";
import partytown from "@astrojs/partytown";


// https://astro.build/config
export default defineConfig({
	site: "https://thoth2357.github.io",
	base: "portfolio",
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		robotsTxt(),
		swup({
			theme: "fade",
			animationClass: "transition-",
			cache: true,
			preload: true,
			accessibility: true,
			forms: false,
			morph: ["#visible", "#w-[700px] relative rounded-md drop-shadow-lg hidden"],
			parallel: false,
			progress: false,
			routes: false,
			smoothScrolling: true,
			updateBodyClass: true,
			updateHead: true,
			reloadScripts: true,
			debug: false,
			loadOnIdle: true,
			globalInstance: false,
		}),
		partytown({
			config: {
				forward: ["dataLayer.push", "gtag"],
				resolveUrl: (url) => {
					if (url.hostname === 'www.googletagmanager.com') {
						const proxyUrl = new URL(url);
						proxyUrl.hostname = url.hostname;
						return proxyUrl;
					}
					return url;
				},
			},
		}),
	],
});
