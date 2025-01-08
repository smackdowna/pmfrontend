const VideoPlayer = () => {
  const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <div className="w-2/3 bg-neutral-80 max-h-[620px] overflow-y-hidden flex items-center justify-center ">
      <div className='flex flex-col relative '>
        <div className='absolute top-0 left-0 p-5 pl-10 w-full h-[150px] '
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) -14.5%, rgba(0, 0, 0, 0.00) 87.5%)',
        }}>
          <h1 className="text-2xl  font-semibold text-neutral-60">Module 1</h1>
          <p className="text-lg text-neutral-60">Introduction to the course</p>
        </div>
        <video
        src={videoUrl}
        controls
        className="w-full rounded-lg "
        >
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  )
}

export default VideoPlayer
