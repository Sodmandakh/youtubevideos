import { SearchBox } from "@/components/searchBox";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <div className="w-auto bg-[#212121] h-[5vh] flex flew-row justify-between">
        <div className="w-1/3 flex">
          <div className="flex flex-row ml-1.5">
              <Image src="/Explrorer9.svg" width={17} height={19}></Image>
          </div>
          <div className="mt-5 ml-3">
            <Link href="../Home">
              <Image src="/Explrorer10.svg" width={90} height={20}></Image>
            </Link>
          </div>
        </div>

        <div className="w-1/2">
          <SearchBox></SearchBox>
        </div>
        <div className="mr-9">
          <div className="flex flex-row items-center mt-3">
          <Image src="/Explrorer13.svg" width={20} height={14} className="mr-[30px]"></Image>
          <Image src="/Explrorer14.svg" width={16} height={16} className="mr-[30px]"></Image>
          <Image src="/Explrorer15.svg" width={16} height={21} className="mr-[30px]"></Image>
            <img src="profile-pic.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
