import Image from "next/image";
import SideNav from "./ui/sidenav";
import Main from "./ui/main";
import SearchBar from "@/app/ui/search-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <div className="flex flex-row"><SideNav/></div>
      <div className="flex flex-row ">
        <Main/>
      </div>
    </main>
  );
}
