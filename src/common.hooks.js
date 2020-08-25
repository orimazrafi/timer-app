
import { useEffect, useRef } from 'react';


export const useTimer = (callback, activeTask, sec) => {
    const savedCallback = useRef()
    savedCallback.current = callback

    const isRunning = activeTask !== null;

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() =>
                savedCallback.current()
                , sec)
            return (() =>
                clearInterval(interval)
            )
        }
    }, [isRunning, sec])
}