import { h, Fragment } from "preact";
import { Helmet } from "react-helmet";

const Page = ({ nav, navMobile, ...props }) => (
  <Fragment>
    <div
      class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
      style={{
        backgroundImage:
          "linear-gradient(160deg, hsl(201.20000000000005, 100%, 60%) , transparent 100%), linear-gradient(87deg, hsl(120, 68.2%, 66.7%) 49%, transparent 90%), radial-gradient(circle at 157% 159%, #d96cd6 18%, #C49CDE 50%)",
      }}
    >
      {h(nav)}
      {h(navMobile)}
      <style
        dangerouslySetInnerHTML={{
          __html: `.custom-shape-divider-bottom-1601755347 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1601755347 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1601755347 .shape-fill {
    fill: #FFFFFF;
}
.blur-far {
    filter: url(#blurFar);
}
.blur-close {
    filter: url(#blurClose);
}`,
        }}
      />
      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center pb-32">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            The best place to <br class="xl:hidden" />
            stack your <span class="text-teal-600">JAM</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
            Toast is an ES Modules based Jamstack framework for prebuilding
            large sites
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#why-toast"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Why Toast?
              </a>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1601755347">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <filter id="blurFar" filterUnits="userSpaceOnUse">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
              ></feGaussianBlur>
            </filter>
            <filter id="blurClose" filterUnits="userSpaceOnUse">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
              ></feGaussianBlur>
            </filter>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill blur-far"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill blur-close"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </main>
    </div>

    <BelowFold />

    <div class="bg-gray-50">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span class="text-teal-600">Join the Beta.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

Page.sendNav = true;

export default Page;

const BelowFold = (props) => (
  <div class="py-12 bg-white" id="why-toast">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
          Why Toast?
        </p>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          A bet on the future
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Toast is not competing for the mantle of the Next Big Webpack
          Framework. It is not trying to be Rails.
        </p>
      </div>

      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* <!-- Heroicon name: trending-up --> */}
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Build Speed Built-in
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  According to{" "}
                  <a
                    href="https://cloud.google.com/blog/products/devops-sre/the-2019-accelerate-state-of-devops-elite-performance-productivity-and-scaling"
                    class="no-underline hover:underline text-teal-500"
                  >
                    the DORA report
                  </a>
                  , elite performing teams "have 208 times more frequent code
                  deployments". Build performance is a core feature, not an
                  add-on.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* <!-- Heroicon name: scale --> */}
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  ES Modules
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  ESM allows us to ship unbundled applications with different
                  performance characteristics than their bundled counterparts.
                  All modern browsers and node support native ESM.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* <!-- Heroicon name: lightning-bolt --> */}
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Familiar APIs
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Write your site as you would any other React application.
                  Toast takes care of compiling, pre-rendering, and more
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  {/* <!-- Heroicon name: annotation --> */}
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  Incremental Compilation
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Toast is built for incremental compilation from day one. Less
                  work done on each build means faster builds.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
