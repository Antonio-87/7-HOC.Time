import DateTime from "./DateTime";

const Video = ({ url, date }: { url: string; date: string }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTime date={date} />
    </div>
  );
};

export default Video;
