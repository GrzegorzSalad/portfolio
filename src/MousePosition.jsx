import { useState, useEffect } from 'react';

export default function MousePosition() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 p-6 text-white font-mono">
            <a className={"font-[F25BankPrinterBold] inline-block scale-x-100 scale-y-50 tracking-wide"}>
                X: {pos.x}
                <br/>
                Y: {pos.y}
                {}
            </a>
        </div>
    );
}
