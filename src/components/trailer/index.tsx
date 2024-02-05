"use client";
import React from "react";

export function Trailer() {

    React.useEffect(() => {
        const s = document.createElement("script");
        s.setAttribute("src", "https://platform.twitter.com/widgets.js");
        s.setAttribute("async", "true");
        document.head.appendChild(s);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center relative mb-24 text-black">
            <h1 className="text-3xl font-medium tracking-widest uppercase text-black">Watch the Trailer</h1>
            <blockquote className="twitter-tweet" data-media-max-width="560">
                <p lang="en" dir="ltr">🎮<a href="https://t.co/BQE1YWmNHr">pic.twitter.com/BQE1YWmNHr</a>
                </p>&mdash; Metacube (@MetacubeGames)
                <a href="https://twitter.com/MetacubeGames/status/1714343398247682273?ref_src=twsrc%5Etfw">October 17, 2023
                </a>
            </blockquote>
        </div>
    );
}