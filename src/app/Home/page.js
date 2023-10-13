import Navigation from "../Navigations/page";
import SideBar from "../SideBars/page";
import YoutubeVideo from "../Youtubeeefwefgw/Page";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-row">
        <SideBar></SideBar>
        <YoutubeVideo></YoutubeVideo>
      </div>
    </div>
  );
}
