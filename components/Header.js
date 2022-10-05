import {
  CheckBadgeIcon,
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="m-5 flex h-auto flex-col items-center justify-between sm:flex-row">
      <section className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={BoltIcon} />
        <HeaderItem title="Verified" Icon={CheckBadgeIcon} />
        <HeaderItem title="Collections" Icon={RectangleStackIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </section>
      <Image
        className="object-contain"
        src="/hulu-white.png"
        width={200}
        height={100}
        alt="Hulu logo"
      />
    </header>
  );
}
export default Header;
