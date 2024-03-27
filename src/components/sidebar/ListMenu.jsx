import { useContext, useState } from "react";

// import ICONS from "@/config/icons";
import {
    HomeIcon,
    PowerIcon,
    DocumentTextIcon,
    UsersIcon,
    DocumentArrowDownIcon
 } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function ListMenu({ sidebar }) {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  const { expanded } = useContext(sidebar);

  return (
    <div>
      {list.map((item, index) => (
        <Link to={item.link} key={index}>
          <li
            className={`relative flex items-center justify-center py-2 px-3 my-4
          font-medium rounded-md cursor-pointer transition-colors group
          ${
            active || pathname == item.link
              ? "bg-secondary text-white"
              : "hover:bg-secondary text-white"
          }`}
          >
            {iconList(item.icon)}
            <span
              className={`overflow-hidden transition-all truncate text-white font-medium ${
                expanded ? "w-56 ml-3" : "w-0"
              }`}
            >
              {item.title}
            </span>

            {!expanded && (
              <div
                className={`absolute left-full rounded-md px-2 py-1 ml-6 w-max
              bg-secondary text-white text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 group-hover:z-10`}
              >
                {item.title}
              </div>
            )}
          </li>
        </Link>
      ))}
    </div>
  );
}

const list = [
  {
    title: "Dashboard",
    icon: "dashboard",
    link: "/dashboard",
  },
  {
    title: "Profile",
    icon: "member",
    link: "/member",
  },
  {
    title: "Transaction",
    icon: "transaction",
    link: "/transactions",
  },
  {
    title: "Sign Out",
    icon: "logout",
    link: "/admin",
  },
];

const iconList = (e) => {
  return (
    <>
      {e == "dashboard" && (
        <HomeIcon className="h-6 w-6 text-white"/>
      )}
      {e == "member" && (
        <UsersIcon className="h-6 w-6 text-white"/>
      )}
      {e == "transaction" && (
        <DocumentTextIcon className="h-6 w-6 text-white"/>
      )}
      {e == "redeem" && (
        <DocumentArrowDownIcon className="h-6 w-6 text-white"/>
      )}
      {e == "logout" && (
        <PowerIcon className="h-6 w-6 text-white"/>
      )}
    </>
  );
};
