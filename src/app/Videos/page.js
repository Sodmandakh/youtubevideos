"use client";

import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import Navigation from "../Navigations/page";
import Image from "next/image";
import data from "../Youtubeeefwefgw/data.json";
import { useSearchParams } from "next/navigation";
import Comment from "../Comment/page2";

export default function Video() {
  const [isClient, setIsClient] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [changedText, setChangedText] = useState("Subscribe");
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId");

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&t=562s&key=AIzaSyBFMgnK3bEc4DkK2xEXQnf9z_7FezRa-0M`
    )
      .then((res) => res.json())

      .then((posts) => setVideoData(posts));
  }, []);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&part=snippet&part=statistics&part=status&part=topicDetails&id=UCqt4mmAqLmH-AwXz31URJsw&key=AIzaSyBFMgnK3bEc4DkK2xEXQnf9z_7FezRa-0M"
    )
      .then((res) => res.json())

      .then((posts) => setChannelData(posts));
  }, []);
  useEffect(() => {
    setIsClient(true); 
  }, []);
  console.log(videoData);
  console.log(channelData);

  const subscribeButton = () => {
    setIsActive((current) => !current);
    setChangedText("Subscribed");
  };

  return (
    <div className="bg-[#000] w-screen h-screen">
      <div>
        <Navigation />
        <div>
          <div className="ml-[162px] mt-7 cursor-pointer">
            {isClient && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width={840}
                height={460}
                controls
                playing={true}
                loop
                muted={true}
              />
            )}
            <div className="mt-[20px]">
              <h1 className="text-white ml-2.5 font-weight-1000 text-xl">
                {videoData?.items[0]?.snippet?.title}
              </h1>
            </div>
            <div className="flex flex-row justify-between w-[840px]">
              <div>
                <h1 className=" text-gray-400 ml-2.5 mt-3">
                  {videoData?.items[0]?.statistics?.viewCount} views 3 weeks ago
                </h1>
              </div>
              <div className="flex flex-row mt-2">
                <div className="flex flex-row mr-4">
                  <Image src="/Explrorer24.svg" width={24} height={24} />
                  <h1 className="text-white">48K</h1>
                </div>
                <div className="flex flex-row mr-4">
                  <Image src="/Explrorer25.svg" width={24} height={24} />
                  <h1 className="text-white">346</h1>
                </div>
                <div className="flex flex-row mr-4">
                  <Image src="/Explrorer26.svg" width={24} height={24} />
                  <h1 className="text-white">Share</h1>
                </div>
                <div className="flex flex-row mr-4">
                  <Image src="/Explrorer27.svg" width={24} height={24} />
                  <h1 className="text-white">Save</h1>
                </div>
                <div className="flex flex-row mr-4">
                  <Image src="/Explrorer28.svg" width={24} height={24} />
                </div>
              </div>
            </div>
            <div className="mt-9 w-[840px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <Image
                    className="rounded-full"
                    src={
                      channelData?.items[0]?.snippet?.thumbnails?.default?.url
                    }
                    width={50}
                    height={50}
                  />
                  <div className="ml-2 flex items-center flex-col">
                    <h1 className="text-white mr-7">
                      {videoData?.items[0]?.snippet?.channelTitle}
                    </h1>
                    <h3 className=" text-xs text-gray-400 ">
                      {channelData?.items[0]?.statistics?.subscriberCount}{" "}
                      subscribers
                    </h3>
                  </div>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isActive ? "white" : "red",
                      color: isActive ? "black" : "white",
                      borderRadius: "2px",
                      width: "116px",
                      height: "36px",
                    }}
                    src="/Explrorer29.svg"
                    onClick={subscribeButton}
                  >
                    {changedText}
                  </button>
                </div>
              </div>
              <div>
                <div className="text-white">
                  {videoData?.items[0]?.snippet?.description}
                </div>
                <h3 className="text-gray-400"> SHOW MORE</h3>
              </div>
              <div><Comment /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
