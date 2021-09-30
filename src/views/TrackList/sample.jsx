const progressBar = useRef();

useEffect(() => {
  const seconds = Math.floor(audioPlayer.current.duration);
  setDuration(seconds);
  progressBar.current.max = seconds;
}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

const whilePlaying = () => {
  progressBar.current.value = audioPlayer.current.currentTime;
  changePlayerCurrentTime();
  animationRef.current = requestAnimationFrame(whilePlaying);
};

const changeRange = () => {
  audioPlayer.current.currentTime = progressBar.current.value;
  changePlayerCurrentTime();
};

const changePlayerCurrentTime = () => {
  progressBar.current.style.setProperty(
    "--seek-before-width",
    `${(progressBar.current.value / duration) * 100}%`
  );
  setCurrentTime(progressBar.current.value);
};
