import React, {useEffect, useState} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundPattern() {
    const [cloudFrame, setCloudFrame] = useState(0);
    const [skullFrame, setSkullFrame] = useState(0);
    const cloudImage = (index) => `./src/assets/frames/background_clouds/90sclouds-${index}.png`;
    const skullImage = (index) => `./src/assets/frames/spinning_skull/frame_${index}_delay-0.1s.png`;


    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: '#scroll-area',
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    const skullsCurframe = Math.round(self.progress * 17);
                    setSkullFrame(skullsCurframe);
                },
            })
        })

        return () => ctx.revert();
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: "#scroll-area",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    const cloudsCurFrame = Math.round(self.progress * 29);
                    setCloudFrame(cloudsCurFrame);
                    console.log(cloudsCurFrame);
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="scroll-area" style={{ height: "200vh" }}>
            <img alt={"clouds"} src={cloudImage(cloudFrame)} className={"saturate-200 fixed top-0 left-0 w-full h-full pointer-events-none select-none z-[-1]"}/>
            <img alt={"skulls"} src={skullImage(skullFrame)} className="brightness-200 saturate-150 fixed top-1/2 left-1/2 pointer-events-none select-none z-10 w-[300px] h-[200px] -translate-x-1/2 -translate-y-1/2"/>
        </div>
    );
}
