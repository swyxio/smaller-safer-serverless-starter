import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import fetch from "node-fetch";

const head =
  process.env.NODE_ENV === "production"
    ? "https://smaller-safer-serverless-starter.now.sh"
    : "http://localhost:3000";
export async function getServerSideProps() {
  const response = await fetch(`${head}/api/function1`, {});
  const posts = await response.json();

  return { props: { posts } };
}
// potato
export default ({ posts = [] }) => (
  <div>
    <Head title="Home" />
    <Nav />
    <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div class="relative mx-auto lg:max-w-7xl">
        <div>
          <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 ">
            Press
          </h2>
          <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p class="text-xl leading-7 text-gray-500">
              Get weekly articles in your inbox on how to grow your business.
            </p>
            <form class="mt-6 flex lg:mt-0 lg:justify-end">
              <input
                aria-label="Email address"
                type="email"
                required
                class="appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out lg:max-w-xs"
                placeholder="Enter your email"
              />
              <span class="ml-3 flex-shrink-0 inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Notify me
                </button>
              </span>
            </form>
          </div>
        </div>
        <div class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
          {posts.map((post) => (
            <div key={post.id}>
              <p class="text-sm leading-5 text-gray-500">
                <time dateTime="2020-03-16">Mar 16, 2020</time>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {post.body}
                </p>
              </a>
              <div class="mt-3">
                <a
                  href="#"
                  class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
                >
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
);
