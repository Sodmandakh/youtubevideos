import Image from "next/image";

export default function SideBar() {
  return (
    <div className="h-[95vh] bg-[#212121] w-[10vw] text-white snap-y overflow-scroll">
      <div className="font-sans ml-5">
        <div className="border-b-2 border-[#303030] ">
          <div className="flex flex-row mb-5 ">
            <Image
              src="/Explrorer.svg"
              width={17}
              height={19}
              className="mr-2"
            ></Image>
            <p className="ml-3">Home</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer1.svg"
              width={20}
              height={22}
              className="mr-2"
            ></Image>
            <p className="ml-3">Explore</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer2.svg"
              width={20}
              height={22}
              className="mr-2"
            ></Image>

            <p className="ml-3">Subscription</p>
          </div>
        </div>
        <div className="border-b-2 border-[#303030] mt-8">
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer3.svg"
              width={20}
              height={22}
              className="mr-2"
            ></Image>
            <p className="ml-3">Library</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer4.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">History</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer5.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Your Videos</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer6.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Watch Later</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer7.svg"
              width={20}
              height={22}
              className="mr-2"
            ></Image>
            <p className="ml-5">Liked Videos</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer8.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Show More</p>
          </div>
        </div>
        <div className="py-6 flex g-6 flex-col border-b-2 border-[#303030]">
          <h1 className="ml-3 mb-5 text-zinc-400">SUBSCRIPTION</h1>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">James Gouse</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar1.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Alan Cooper</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar2.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Marcus Levin</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar3.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Alexis Sears</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar4.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Jessica Lambert</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar5.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Anna White</p>
          </div>
          <div className="flex flex-row mb-5">
            <img
              src="User-Avatar6.png"
              width={24}
              height={24}
              className="mr-2"
            ></img>{" "}
            <p className="ml-3">Skylar Dias</p>
          </div>
          <div className="flex flex-row">
            <Image
              src="/Explrorer8.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Show 13 More</p>
          </div>
        </div>
        <div className="border-b-2 border-[#303030] mb-5">
          <h1 className="ml-3 mb-5 mt-5 text-zinc-400">MORE FROM YOUTUBE</h1>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer16.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Youtube Premium</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer17.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Gaming</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer18.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Live</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer19.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Sports</p>
          </div>
        </div>
        <div className="border-b-2 border-[#303030] ">
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer20.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Settings</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer21.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Report history</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer22.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Help</p>
          </div>
          <div className="flex flex-row mb-5">
            <Image
              src="/Explrorer23.svg"
              width={24}
              height={26}
              className="mr-2"
            ></Image>
            <p className="ml-3">Send feedback</p>
          </div>
        </div>
        <div className=" text-zinc-400 mt-5">
          <p>About Press Copyright Contact us Creators Advertise Developers</p>
          <p className="mt-[12px]">Terms Privacy Policy & Safety How Youtube works Test new features</p>
          <p className="mt-[12px]">© 2021 Google LLC</p>
        </div>
      </div>
    </div>
  );
}
