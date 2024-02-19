"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function YoutubeVideo() {
  const [videos, setVideos] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=44&regionCode=US&type=video&key=AIzaSyB1adqN5FlI_mKhPGVDxfrYgDGKU_UQaHI"
    )
      .then((res) => res.json())

      .then((posts) => setVideos(posts));
  }, []);

  console.log(videos);

  const jumpToVideoPlayer = (videoId) => {
    router.push("Videos?videoId=" + videoId);
  };

  return (
    <div className="flex gap-6 bg-[#000] w-screen h-screen p-10 overflow-y-scroll"  style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}> 
      {videos?.items?.map(({ snippet, id, statistics }) => (
        <div className='flex flex-col'>
          <div style={{ width: 471, height: 300 }}>
            <div>
              <Image
                onClick={() => jumpToVideoPlayer(id)}
                width={350}
                height={200}
                src={snippet?.thumbnails?.standard?.url}
              />
              <div className="flex bg-[#000]">
                <div className="rounded-full pt-8 mr-3">
                  <Image
                    width={21}
                    height={21}
                    src={snippet?.thumbnails?.default?.url}
                  />
                </div>
                <div className="text-white flex flex-col">
                  <div>{snippet?.localized?.title}</div>
                  <div className="flex flex-row">
                    <h1 className="text-white text-xs pt-3 text-gray-400">
                      {snippet?.channelTitle}
                    </h1>
                    <div className="text-white pl-9">
                      <p className="text-white text-xs pt-3 text-gray-400">
                        {statistics?.viewCount} {snippet?.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
