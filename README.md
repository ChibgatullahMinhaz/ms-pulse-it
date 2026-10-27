# MS Pulse IT

The MS Pulse IT website is built with Next.js 16 App Router, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.9 or newer
- pnpm

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
pnpm build
pnpm start
```

Run the TypeScript check with `pnpm lint`.

The App Router pages and metadata are in `src/app`; shared UI components are in `src/components`.

## Performance monitoring

Vercel Speed Insights is included in the root layout for all pages. Enable Speed Insights in the Vercel project dashboard and deploy the app to collect real-user Core Web Vitals. Results appear in the project's Speed Insights tab after visitors use the deployed site; this is not an on-demand speed test.
