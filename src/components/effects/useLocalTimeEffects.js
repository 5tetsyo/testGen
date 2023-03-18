import {useEffect} from "react";

export const useLocalTimeEffects = (currentVideo, videoRef) => {
    const handleTimeUpdate = () => {
        const currentTime = videoRef?.current?.currentTime;
        if (currentTime > 1) {
            localStorage.setItem(`video-${currentVideo.id}`, currentTime);
        }
    };

    useEffect(() => {
        const time = localStorage.getItem(`video-${currentVideo.id}`);
        if (time) {
            videoRef.current.currentTime = time;
        }
    }, [currentVideo.id]);

    useEffect(() => {
        videoRef?.current?.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            videoRef?.current?.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [currentVideo.id]);
}