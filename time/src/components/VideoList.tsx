import Video from "./Video";

type Video = {
  url: string;
  date: string;
};

type VideoListProps = {
  list: Video[];
};
const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return list.map((item) => <Video url={item.url} date={item.date} />);
};

export default VideoList;
