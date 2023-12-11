import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

const Video = ({ url, date }: { url: string; date: string }) => {
  const HencedDateTime = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <HencedDateTime date={date} />
    </div>
  );
};

export default Video;
