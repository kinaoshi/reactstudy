import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b min-w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="inline-block py-2 px-6 text-xl hover:text-blue-500 focus:text-blue-500 active:text-blue-500">{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};

// .anchor:hover,
// .anchor:focus,
// .anchor:active {
//   color: #0070f3;
// }

// padding: 8px 24px;
//   display: inline-block;
//   font-size: 1.2rem;

 /* width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center; */