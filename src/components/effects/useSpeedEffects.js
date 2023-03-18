import {useEffect} from "react";

export const useSpeedEffects = (videoRef) => {
    const getSpeed = (code, ref) => {
        switch (code) {
            case "Digit1": ref.current.playbackRate = 1;
                break;
            case "Digit2": ref.current.playbackRate = 0.25;
                break;
            case "Digit3": ref.current.playbackRate = 0.5;
                break;
            case "Digit4": ref.current.playbackRate = 0.75;
                break;
            case "Digit5": ref.current.playbackRate = 1.25;
                break;
            case "Digit6": ref.current.playbackRate = 1.5;
                break;
            case "Digit7": ref.current.playbackRate = 1.75;
                break;
            case "Digit8": ref.current.playbackRate = 2;
                break;
            default: ref.current.playbackRate = 1;
        }
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            getSpeed(event.code, videoRef)
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};
