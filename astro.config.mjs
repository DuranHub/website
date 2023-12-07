import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');
const {PUBLIC_ENV} = loadEnv("", process.cwd(), 'PUBLIC_ENV');
const environment = process.env.PUBLIC_ENV || PUBLIC_ENV;

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    bridge: environment === 'preview' || environment === 'development',
    accessToken: env.STORYBLOK_TOKEN,
    enableFallbackComponent: true,
    components: {
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      page: 'storyblok/Page',
      title: 'storyblok/Title',
      hero: 'storyblok/Hero',
      heroImage: 'storyblok/HeroImage'
    },
    apiOptions: {
      region: 'us'
    }
  }), tailwind()],
  output: environment === 'preview' ? 'server' : 'static',
  adapter: environment === 'preview' ? vercel() : undefined,
});