export const VideoDemo: React.FC<{ src: string }> = ({ src }) => {
  return (
    <video className="w-full my-16 rounded-lg" autoPlay muted playsInline loop>
      <source src={src} type="video/mp4" />
    </video>
  );
};
