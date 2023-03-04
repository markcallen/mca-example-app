This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Development

### Pre Commit Check

Using husky to create the git hooks and lint-staged to run eslint and prettier on the
files that are staged.

## Workflows

## Dependabot

Using built in dependabot to manage dependencies for the project and create PRs
when there is an update.

### Lint

This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to
ensure that the code follows the standards that
are setout in the .eslintrc file and .prettierrc file for code style and format. It also
provides static analysis of potential bugs by pretventing the developer from using
constructs or code that can lead to bugs or other issues.

The workflow [lint.yaml](.github/workflows/lint.yaml) runs eslint and prettier when
ever there is a push to a branch, including main.

## Build

As this is a nextjs project a build can be done on each new Pull Request from the
`main` branch.

The workflow [build.yaml](.github/workflows/build.yaml) runs `yarn build` when
ever there is a new PR from main.

## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

## Contact

Your Name - [@markcallen](https://mastodon.social/@markcallen) - mark@markcallen.com

Project Link: [https://github.com/markcallen/mca-example-app](https://github.com/markcallen/mca-example-app)
