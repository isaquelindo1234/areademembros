
'use client';

import { PlayCircle, PauseCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import type { YouTubePlayer } from 'react-youtube';

type AudioPlayerProps = {
  title: string;
  description: string;
  audioSrc: string;
  isMain?: boolean;
};

export function AudioPlayer({ title, description, audioSrc, isMain = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);

  const getYoutubeVideoId = (url: string) => {
    if (!url || !url.includes('youtu')) return null;
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
  };

  const videoId = isMain ? '_kVeHPLHudo' : getYoutubeVideoId(audioSrc);

  const togglePlayPause = () => {
    if (videoId && playerRef.current) {
      const playerState = playerRef.current.getPlayerState();
      if (playerState === 1) { // playing
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    setDuration(event.target.getDuration());
  };

  const onPlayerStateChange = (event: { data: number, target: YouTubePlayer }) => {
    if (event.data === 0) { // ended
      setIsPlaying(false);
      setCurrentTime(0);
      if (playerRef.current) {
        playerRef.current.seekTo(0);
        playerRef.current.pauseVideo();
      }
    }
    if (event.data === 1) { // playing
        setIsPlaying(true);
    }
    if (event.data === 2) { // paused
        setIsPlaying(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (videoId && isPlaying) {
      interval = setInterval(() => {
        if(playerRef.current) {
            const time = playerRef.current.getCurrentTime();
            setCurrentTime(time);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [videoId, isPlaying]);


  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isMain) {
    return (
        <div className="bg-gradient-to-br from-white/10 to-transparent border border-primary/50 rounded-2xl p-6 md:p-8 shadow-2xl glowing-shadow text-center">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-3">{title}</h2>
            <p className="text-white/70 font-body mb-6 max-w-xl mx-auto">{description}</p>
            
            <div className={`aspect-video mb-4 rounded-lg overflow-hidden ${isPlaying ? 'block' : 'hidden'}`}>
              {videoId && (
                  <YouTube
                      videoId={videoId}
                      opts={{ width: '100%', height: '100%' }}
                      onReady={onPlayerReady}
                      onStateChange={onPlayerStateChange}
                      className="w-full h-full"
                  />
              )}
            </div>

            <div className="flex flex-col items-center">
                {!isPlaying && (
                  <button 
                      onClick={togglePlayPause} 
                      className="mb-4 text-primary hover:text-white transition-colors duration-300 transform hover:scale-105"
                      aria-label="Escuchar ahora"
                  >
                      <PlayCircle size={64} />
                  </button>
                )}
                <div className="w-full max-w-md bg-white/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="text-xs text-white/50 mt-2 w-full max-w-md flex justify-between">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
  }

  // Bonus Frequencies
  if (videoId) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:border-primary/50">
          <h3 className="text-lg font-headline font-bold text-white mb-2 flex-grow">{title}</h3>
          <p className="text-white/60 font-body text-sm mb-4 flex-grow">{description}</p>

          <div className={`aspect-video mb-4 rounded-lg overflow-hidden ${isPlaying ? 'block' : 'hidden'}`}>
            <YouTube
                videoId={videoId}
                opts={{ width: '100%', height: '100%' }}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
                className="w-full h-full"
            />
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
              <button 
                  onClick={togglePlayPause} 
                  className="text-primary hover:text-white transition-colors"
                  aria-label="Play/Pause"
              >
                  {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
              </button>
              <div className="w-full">
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="text-xs text-white/50 mt-1 flex justify-between">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  // Fallback for non-youtube audio
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:border-primary/50">
        <h3 className="text-lg font-headline font-bold text-white mb-2 flex-grow">{title}</h3>
        <p className="text-white/60 font-body text-sm mb-4 flex-grow">{description}</p>
        <audio ref={audioRef} src={audioSrc} preload="metadata" className="hidden"></audio>
        
        <div className="flex items-center gap-4 mt-auto">
            <button 
                onClick={togglePlayPause} 
                className="text-primary hover:text-white transition-colors"
                aria-label="Play/Pause"
            >
                {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
            </button>
            <div className="w-full">
                <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="text-xs text-white/50 mt-1 flex justify-between">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    </div>
  );
}
