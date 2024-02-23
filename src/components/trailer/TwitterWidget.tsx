// "use client"
// import React, { useEffect } from "react";
// export function TwitterWidget() {
//     useEffect(() => {
//         // Check if the Twitter script is already loaded
//         let isScriptLoaded = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
//         if (!isScriptLoaded) {
//             const script = document.createElement("script");
//             script.src = "https://platform.twitter.com/widgets.js";
//             script.async = true;
//             document.body.appendChild(script);
//         }
//         // Cleanup function to remove script if component unmounts
//         return () => {
//             let script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
//             if (script) {
//                 document.body.removeChild(script);
//             }
//         };
//     }, []);
//     return <></>;
// }
