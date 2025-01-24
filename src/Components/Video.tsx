export const Video = () => {
  return (
    <div className="-translate-y-22 shadow-[0_-20px_14px_-18px_#00000010,_0_20px_14px_-18px_#00000010,_20px_0_14px_-18px_#00000010,_-20px_0_14px_-18px_#00000010]">
      <iframe
        className="aspect-video w-75 sm:w-110 md:w-160 lg:w-210"
        src="https://www.youtube.com/embed/-ytozuXTmbo?autoplay=1&mute=1&loop=1&playlist=-ytozuXTmbo&controls=0&showinfo=0&modestbranding=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};
