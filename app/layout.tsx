import type {Metadata} from "next";
import {Cinzel,Cormorant_Garamond} from "next/font/google";
import "./globals.css";
const serif=Cinzel({subsets:["latin"],variable:"--serif"});
const body=Cormorant_Garamond({subsets:["latin"],weight:["400","500","600"],style:["normal","italic"],variable:"--body"});
export const metadata:Metadata={title:"KINSTAMP | Play Your Past. Stamp Your Future.",description:"A premium cooperative heritage board game with a Family Passport, Roots Atlas, Story Cards and Memory Stamps.",manifest:"/manifest.json"};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${body.variable}`}><body>{children}</body></html>}
