This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Description 

What we did so far  * Skip to 3rd approach for final output*

-Created V4 folder into the main folder of public listing
- built the app using yarn create next-app --example with-apollo with-apollo-app --typescript
-TS command didn't work, so we had to change the types manually as in docs 
https://nextjs.org/learn/excel/typescript

-Following the example in https://dev.to/ivanms1/next-js-graphql-typescript-setup-5bog:

while configuring the TS into the app we ran into an error Error: [object Object] is not a PostCSS plugin
we looked into issue https://github.com/postcss/autoprefixer/issues/1358
and followed the steps to solve it by adding the following:yarn add -D postcss
||yarn add @rollup/plugin-typescript
yarn add postcss-import-resolver
yarn add rollup-plugin-postcss ||


-None of that worked so we tried a 3rd approach, creating the out of the box TS Next App with standard settings then configure it manually to have TS and Apollo. [ this was done in  a stand-alone folder outside the public-listings repo, since it kept breaking the code.
- used the pkg to solve windows/linux env issues npm install -g win-node-env

 We followed the steps in t this article to configure TS and Apollo with small adjustments: 

https://dev.to/ivanms1/next-js-graphql-typescript-setup-5bog

-At the final step to configure the query, we created a query.js file:
inside of it we added 

import {gql} from "@apollo/client";

export const  query =gql 
query {
    countries {
       name
  }
}

also updated the API endpoint to be https://countries.trevorblades.com/

example repo (private repo ask Arwa for permission if needed) : https://github.com/arwa1996/Next-ts-gql

3
