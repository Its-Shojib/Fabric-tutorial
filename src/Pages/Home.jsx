import { Canvas } from 'fabric';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if(canvasRef.current){
            const initCanvas = new Canvas (canvasRef.current, {
                width: 500,
                height: 500,
            });
            initCanvas.backgroundColor = '#f0f0f0';
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            };
        };
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-96  bg-gray-100'>
            <h1 className="text-2xl font-bold mb-4">Fabric.js Canvas Example</h1>

            <canvas  ref={canvasRef} className="border-2 z-20" />
        </div>
    );
};

export default Home;