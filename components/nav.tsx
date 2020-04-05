import Link from "next/link";

const Nav = () => (
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <Link href="/">
      <a>
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">
            Swyx's Smaller Safer Serverless Starter
          </span>
        </div>
      </a>
    </Link>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <Link href="/about">
          <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
        </Link>
      </div>
    </div>
  </nav>
);
// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link prefetch href="/">
//           <a>Home</a>
//         </Link>
//       </li>
//       <ul>
//         {links.map(
//           ({ key, href, label }) => (
//             <li key={key}>
//               <Link href={href}>
//                 <a>{label}</a>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//     </ul>

//     <style jsx>{`
//       :global(body) {
//         margin: 0;
//         font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
//       }
//       nav {
//         text-align: center;
//       }
//       ul {
//         display: flex;
//         justify-content: space-between;
//       }
//       nav > ul {
//         padding: 4px 16px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: #067df7;
//         text-decoration: none;
//         font-size: 13px;
//       }
//     `}</style>
//   </nav>
// );

export default Nav;
