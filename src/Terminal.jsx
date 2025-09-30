import {useEffect, useState} from "react";

export default function Terminal(){
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const languages = navigator.languages ? navigator.languages.join(", ") : "N/A";
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const deviceMemory = navigator.deviceMemory || "N/A";
    const hardwareConcurrency = navigator.hardwareConcurrency || "N/A";
    const maxTouchPoints = navigator.maxTouchPoints || 0;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <div className={"font-[Terminal]"}>
        </div>
    )
}