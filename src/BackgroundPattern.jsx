import { useState, useEffect } from "react";
import "./Background.css";

function HorizontalWordAmount(word, screenWidth) {
    let letters = word.length;
    return Math.ceil(screenWidth / 20 / letters);
}

function VerticalWordAmount(word, screenHeight) {
    return Math.ceil(screenHeight / 25)
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

    const lettersPerWidth = HorizontalWordAmount(word, width);
    const lettersPerHeight = VerticalWordAmount(word, height);
    return (
        <div>
            <div className="overflow-hidden h-[100vh] w-[100vw]">
                {Array.from({ length: lettersPerHeight }).map((_, i) => (
                    <div key={i} className="flex">
                    {Array.from({ length: lettersPerWidth }).map((_, i) => (
                            <div key={i} className="hover:text-white font-bytesized text-[50px] leading-[25px] tracking-[-5px]">{ word }</div>
                        ))}
                    </div>
                ))}

            </div>
            {/*<div>*/}
            {/*    lettersPerWidth: { lettersPerWidth }*/}
            {/*    <br/>*/}
            {/*    lettersPerHeight: { lettersPerHeight }*/}
            {/*</div>*/}
        </div>
    )
}

export default BackgroundPattern;