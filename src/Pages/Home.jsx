import { Canvas, Circle, Rect } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { PiRectangleFill } from 'react-icons/pi';

const Home = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    console.log(canvas);

    const addCircle = () => {
        if (canvas) {
            const circle = new Circle({
                radius: 50,
                fill: 'red',
                left: 100,
                top: 100,
            });
            canvas.add(circle);
            canvas.renderAll();
        }}

        const addRectangle = () => {
        if (canvas) {
            const rectangle = new Rect({
                fill: 'blue',
                left: 50,
                top: 100,
                width: 100,
                height: 50,
            });
            canvas.add(rectangle);
            canvas.renderAll();
        }}

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
        <div className='flex flex-col items-center justify-center h-96'>
            <div className='mb-4 my-16 w-32 flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-md gap-4'>
                <PiRectangleFill className='text-3xl' onClick={addRectangle} />
                <FaCircle className='text-3xl' onClick={addCircle} />
            </div>
            <canvas  ref={canvasRef} className="border-2 z-20" />
        </div>
    );
};

export default Home;