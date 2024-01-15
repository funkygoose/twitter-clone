import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <div className="hidden sm:flex flex-col fixed">
        <div className="py-3">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>
        <nav className="space-y-1">
          <SidebarLink Icon={HomeIcon} text={"Home"} />
          <SidebarLink Icon={HashtagIcon} text={"Explore"} />
          <SidebarLink Icon={BellIcon} text={"Notifications"} />
          <SidebarLink Icon={InboxIcon} text={"Messages"} />
          <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
          <SidebarLink Icon={UserIcon} text={"Profile"} />
          <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
          
        </nav>
        <div>User</div>
      </div>
    </>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-6 mx-3 items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className=" hidden xl:inline">{text}</span>
    </li>
  );
}
