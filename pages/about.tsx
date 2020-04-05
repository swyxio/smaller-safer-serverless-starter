import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
          About / FAWs
        </h2>
        <div class="mt-6 border-t-2 border-gray-100 pt-10">
          <dl class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Where is the source code?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    Check this out!
                    https://github.com/sw-yx/smaller-safer-serverless-starter
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  How do you make holy water?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <div>
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  What is the least spoken language in the world?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    Sign language. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    Because the pee is silent. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-gray-500">
                    He couldn't see himself doing it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
);
