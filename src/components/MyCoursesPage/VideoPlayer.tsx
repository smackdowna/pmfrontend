import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Controls from "../Controls/Controls";

interface VideoPlayerProps {
  moduleData: {
    module: string;
    progress: string;
    duration: string;
    video: {
      title: string;
      url: string;
    };
  };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ moduleData }) => {
  const { module, video } = moduleData;
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false); // State for controls visibility

  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      setVolume(0.8);
    } else {
      setVolume(0);
    }
  };

  const handleSeek = (seconds: number) => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + seconds);
    }
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleProgress = (state: any) => {
    setProgress(state.played);
    setBuffered(state.loaded);
    setCurrentTime(state.playedSeconds);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.target.value));
      setProgress(parseFloat(e.target.value));
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    setPlaybackRate(rate);
  };

  const handleFullScreen = () => {
    if (playerContainerRef.current) {
      if (!isFullScreen) {
        playerContainerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullScreen(!isFullScreen);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (playerRef.current) {
      setDuration(playerRef.current.getDuration());
    }
  }, [video]);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div
      ref={playerContainerRef}
      className={`w-2/3 h-screen bg-[#F8FAFC] ${
        !isFullScreen ? "p-5" : ""
      } rounded-md`}
    >
      {!isFullScreen && (
        <div className="flex flex-col mb-3">
          <span className="text-2xl font-medium text-gray-900">{module}</span>
        </div>
      )}
      <div
        className="relative aspect-video rounded-lg"
        onClick={handlePlayPause}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          ref={playerRef}
          url={video?.url}
          playing={isPlaying}
          volume={volume}
          muted={isMuted}
          width="100%"
          height="100%"
          className="absolute top-0 left-0 rounded-lg?/"
          onProgress={handleProgress}
          onDuration={handleDuration}
          playbackRate={playbackRate}
        />
        {showControls && (
          <Controls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            volume={volume}
            onVolumeChange={handleVolumeChange}
            isMuted={isMuted}
            onMuteToggle={handleMuteToggle}
            onSeek={handleSeek}
            progress={progress}
            buffered={buffered}
            onProgressChange={handleProgressChange}
            duration={duration}
            currentTime={currentTime}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRateChange}
            onFullScreen={handleFullScreen}
            isFullScreen={isFullScreen}
            className="absolute bottom-0 w-full text-white"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
