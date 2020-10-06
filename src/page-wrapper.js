import { h, cloneElement } from "preact";
import { useEffect } from "preact/hooks";
import { Helmet } from "react-helmet";

const withAmplify = async () => {
  const amplify = await import("/web_modules/amplify-esm.js");
  return amplify.default;
};

export default (props) => {
  // useEffect(async () => {
  //   console.log(amplify.default);
  // });
  return (
    <div>
      <div class="relative bg-teal-600">
        <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="pr-16 sm:text-center sm:px-16">
            <p class="font-medium text-white">
              <span class="md:hidden">The Toast Beta is here!</span>
              <span class="hidden md:inline">
                Welcome! We're excited to announce the Toast Beta!
              </span>
              <span class="block sm:ml-2 sm:inline-block">
                <a
                  href="https://chris-biscardi.ck.page/toast-beta"
                  class="text-white font-bold underline"
                >
                  Learn more &rarr;
                </a>
              </span>
            </p>
          </div>
          {props.closeButton && (
            <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                class="flex p-2 rounded-md hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
                aria-label="Dismiss"
              >
                {/* <!-- Heroicon name: x --> */}
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <Helmet>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toastdotdev" />
        <meta name="twitter:creator" content="@chrisbiscardi" />
        <meta
          name="twitter:title"
          content="Toast: The Best Place to Stack your JAM"
        />
        <meta
          name="twitter:description"
          content="Toast is an ES Modules first Jamstack metaframework built in Rust and made for people building UI"
        />
        <meta
          name="twitter:image"
          content="http://www.toast.dev/default-opengraph-image.png"
        />
      </Helmet>
      <div class="relative bg-teal-200 overflow-hidden">
        {props.children.type.sendNav ? (
          cloneElement(props.children, {
            nav: Navigation,
            navMobile: MobileMenu,
          })
        ) : (
          <div
            class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32"
            style={{
              backgroundImage:
                "linear-gradient(160deg, hsl(201.20000000000005, 100%, 60%) , transparent 100%), linear-gradient(87deg, hsl(120, 68.2%, 66.7%) 49%, transparent 90%), radial-gradient(circle at 157% 159%, #d96cd6 18%, #C49CDE 50%)",
            }}
          >
            <Navigation />
            <MobileMenu />

            {props.children}
          </div>
        )}
      </div>
    </div>
  );
};

const Navigation = (props) => (
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
      <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#" aria-label="Home">
            <img
              class="h-8 w-auto sm:h-10"
              src="/toast-icon-300.png"
              alt="Logo"
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:space-x-10">
        <a
          href="/pricing"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Pricing
        </a>

        <a
          href="https://discord.gg/m2RdVRA"
          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
        >
          Discord
        </a>
      </div>
      {/* <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span class="inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-teal-600 bg-white hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-gray-50 active:text-teal-700 transition duration-150 ease-in-out"
          >
            Log in
          </a>
        </span>
      </div> */}
    </nav>
  </div>
);

// Mobile menu, show/hide based on menu open state.
//
// Entering: "duration-150 ease-out"
//   From: "opacity-0 scale-95"
//   To: "opacity-100 scale-100"
// Leaving: "duration-100 ease-in"
//   From: "opacity-100 scale-100"
//   To: "opacity-0 scale-95"
const MobileMenu = () => (
  <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div class="rounded-lg shadow-md">
      <div
        class="rounded-lg bg-white shadow-xs overflow-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="main-menu"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="/toast-icon-300.png" alt="" />
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Close menu"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3">
          <a
            href="/pricing"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Pricing
          </a>

          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Discord
          </a>
        </div>
        {/* <div>
          <a
            href="#"
            class="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100 hover:text-teal-700 focus:outline-none focus:bg-gray-100 focus:text-teal-700 transition duration-150 ease-in-out"
            role="menuitem"
          >
            Log in
          </a>
        </div> */}
      </div>
    </div>
  </div>
);

const awsconfig = {
  Auth: {
    region: "us-west-2",
    userPoolId: "us-west-2_VlhGdjlD1",
    userPoolWebClientId: "njl7s0gq3i03qlhkt681kbckl",
    authenticationFlowType: "CUSTOM_AUTH",
  },
  API: {
    endpoints: [
      {
        name: "all-endpoint",
        endpoint: "https://azgfjq0awg.execute-api.us-west-2.amazonaws.com",
        region: "us-west-2",
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(
              await window.AMPLIFY.Auth.currentSession()
            )
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
};

function getRandomString(bytes) {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join("");
}

function intToHex(nr) {
  return nr.toString(16).padStart(2, "0");
}

const finishSignin = async (challenge) => {
  try {
    const [email, code] = challenge.split(",");
    const user = await window.AMPLIFY.Auth.signIn(email);
    await window.AMPLIFY.Auth.sendCustomChallengeAnswer(user, code);
    const currentSession = await window.AMPLIFY.Auth.currentSession();
    console.log(currentSession);
  } catch (e) {
    console.log(e);
  }
};

async function signUp({ email }) {
  try {
    const user = await window.AMPLIFY.Auth.signUp({
      username: email,
      password: getRandomString(29) + "A",
      attributes: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log("error signing up:", error);
  }
}
const login = (email) => {
  return fetch(
    "https://oew6rcrg5k.execute-api.us-west-2.amazonaws.com/dev/login",
    { method: "POST", body: JSON.stringify({ email }) }
  )
    .then((v) => {
      return v.json();
    })
    .catch((e) => {
      console.log(e);
      throw e;
    });
};
