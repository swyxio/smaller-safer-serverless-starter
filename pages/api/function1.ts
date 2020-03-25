// https://nextjs.org/docs/basic-features/typescript#api-routes

// we have vendored https://jsonplaceholder.typicode.com/posts
import posts from "./posts.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts);
};

// // but you could do this instead
// import fetch from "node-fetch";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const posts = fetch(
//     "https://jsonplaceholder.typicode.com/posts"
//   ).then(response => response.json());
//   res.status(200).json(posts);
// };
