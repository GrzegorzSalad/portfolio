import { useState, useEffect } from "react";

function CalculateWordAmount(word, screenWidth) {
    let letters = word.length;
    return Math.ceil(screenWidth / 20 / letters);
}


const BackgroundPattern = ({word}) => {
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);



    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth)
            setHeight(document.documentElement.clientHeight);
        };
        window.addEventListener("resize", () => {
            handleResize();
        })
        return () => {document.removeEventListener("resize", handleResize)}
    }, [])

    const lettersPerWidth = CalculateWordAmount(word, width, height);

    return (
        <div>
            <div>
                {Array.from({ length: lettersPerWidth }).map((_, i) => (
                    <span key={i} className="hover:text-purple-800 font-bytesized text-[50px] leading-[25px] tracking-[-5px]">{ word }</span>

                ))}
            </div>
            <div>
                width: { width }
                height: { height }
                lettersPerWidth: { lettersPerWidth }
            </div>
        </div>
    )
}

export default BackgroundPattern;