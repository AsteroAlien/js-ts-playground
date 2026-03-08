import { useRef, useState, useEffect } from 'react';
import './WebWorkerDemo.css';

interface IWebWorkerProps {
    counter: number | 0
}

export function WebWorkerDemo({counter}: IWebWorkerProps) {
    const [count, setCount] = useState<number>(0);
    const [workerValue, setWorkerValue] = useState<number>(0);
    const workerRef = useRef<Worker | null>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });

        workerRef.current.onmessage = function (message: MessageEvent<number>) {
            if (!message.data) return;
            setWorkerValue(message.data);
        }

        return () => {
            workerRef.current?.terminate();
        }
    }, []);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    const handleWorkEvent = () => {
        if (!workerRef.current) return;
        workerRef.current.postMessage({action: "start", count: counter});
    };

    return (
        <>
            <div>
                <h1>Web Worker Demo</h1>
                <p>This is a demo of a web worker. Click the button to see the worker in action.</p>

                <div id="count-container" className="card">
                    <button onClick={handleClick} className='spacing'>Increment</button>
                    <button onClick={handleWorkEvent}>Start Calculation</button>
                </div>
                <span className="card">
                    <p id='lb-count'>count is {count}</p>
                    <p id='lb-worker'>worker calculation value is {workerValue}</p>
                </span>
            </div>

        </>
    );
}