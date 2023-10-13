
import Image from "next/image";



export const SearchBox = () => {
  return (
    <div className="flex flex-row mt-2 ">
      <div className="w-[470px] h-[40px] border-2 rounded-sm border-neutral-600 flex">
        <input
          className="w-[420px] h-[35px] bg-[#121212] text-white"
          placeholder="Search"
        ></input>
        <button className="w-[50px] h-[35px] justify-center items-center flex">
        <Image src="/Explrorer11.svg" width={24} height={24}></Image>
        </button>
      </div>
      <div className="bg-[#000] rounded-full" >
        <button className="flex items-center w-[40px] h-[40px] p-[5px]">
        <Image src="/Explrorer12.svg" width={45} height={44}></Image>
        </button>
      </div>
    </div>
  );
};
