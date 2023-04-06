// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { Integrations as TracingIntegrations } from '@sentry/tracing';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

const appServerHostname = new URL('http://localhost:3000').hostname;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://7605b4d3726f43e98f2668f72499df78@o418388.ingest.sentry.io/4504968759803904',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  integrations: [
    new TracingIntegrations.BrowserTracing({
      tracingOrigins: [appServerHostname]
    })
  ]

  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
