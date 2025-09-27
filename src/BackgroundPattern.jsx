import {useState, useEffect} from "react";
import "./Background.css";

function HorizontalWordAmount(word, screenWidth) {
    let letters = word.length;
    return Math.ceil(screenWidth / 20 / letters);
}

function VerticalWordAmount(word, screenHeight) {
    return Math.ceil(screenHeight / 25)
}

function RandomWordGenerator() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];

}

function RandomColor(row, col, allRows, allCols) {
    const r = Math.floor((row / (allRows - 1)) * 255); // row goes from 0 → 255
    const g = Math.floor((col / (allCols - 1)) * 255);
    return 'rgb(' + r + ', ' + g + ', ' + r + ')';
}

const BackgroundPattern = ({word}) => {
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const [pos, setPos] = useState({x: 0, y: 0});

    useEffect(() => {
        const handlePos = (e) => {
            setPos({x: e.clientX, y: e.clientY});
        }
        window.addEventListener("mousemove", handlePos);

        return () => {
            window.removeEventListener("mousemove", handlePos)
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth)
            setHeight(document.documentElement.clientHeight);
        };
        window.addEventListener("resize", () => {
            handleResize();
        })
        return () => {
            document.removeEventListener("resize", handleResize)
        }
    }, [])

    const lettersPerWidth = HorizontalWordAmount(word, width);
    const lettersPerHeight = VerticalWordAmount(word, height);
    return (
        <div>
            <div className="overflow-hidden h-[100vh] w-[100vw] z-[-1] absolute">
                {Array.from({length: lettersPerHeight}).map((_, row) => (
                    <div key={row} className="flex">
                        {Array.from({length: lettersPerWidth}).map((_, col) => {
                                const cellWidth = width / lettersPerWidth;
                                const cellHeight = height / lettersPerHeight;
                                const centerX = col * cellWidth + cellWidth / 2;
                                const centerY = row * cellHeight + cellHeight / 2;
                                const dx = pos.x - centerX;
                                const dy = pos.y - centerY;
                                const distance = Math.sqrt(dx * dx + dy * dy);

                                let content = "";

                                //let distances = [100, 200, 300, 400, 500, 600, 700, 800, 900];



                                if (distance < 100) {
                                    content = word;
                                } else if (distance < 200) {
                                    content = "a";
                                } else {
                                    content = RandomWordGenerator();
                                }


                                return (
                                    <div key={col}
                                         className="font-bytesized text-[50px] leading-[25px] tracking-[-5px] decoration-amber-200s"
                                         style={{
                                             color: RandomColor(col, row, lettersPerWidth, lettersPerHeight),

                                         }}
                                    >
                                        {content}
                                    </div>
                                )
                            }
                        )
                        }
                    </div>
                ))}

            </div>
            {/*<div className="bg-white" ref={ref}>*/}
            {/*    x: {pos.x}*/}
            {/*    <br/>*/}
            {/*    y: {pos.y}*/}
            {/*    <br/>*/}
            {/*</div>*/}
        </div>
    )
}

export default BackgroundPattern;