import {useEffect} from "react";
import Hls from "hls.js";
import {useNavigate} from "react-router-dom";

export const useCurrentVideoEffects = (videoRef, currentVideo) => {
    const navigate = useNavigate()
    useEffect(() => {
        try {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.attachMedia(videoRef.current);
                hls.loadSource(currentVideo.link);
            }
        } catch (error) {
            navigate("/error", {state: {error}})
        }
    }, [currentVideo.link])
}