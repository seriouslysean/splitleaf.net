import { defineConfig, envField } from 'astro/config';

export default defineConfig({
  // `astro:env` is not available during config load, so `site` reads from process.env directly.
  site: process.env.PUBLIC_SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_BUSINESS_NAME: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_BUSINESS_PHONE: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_BUSINESS_PHONE_E164: envField.string({ context: 'client', access: 'public' }),
    },
  },
});
