"use client";
import {useEffect,useState} from "react";
import DownloadModal from "@/components/DownloadModal";
import * as S from "@/components/Sections";
export default function Page(){const [m,setM]=useState(false);
useEffect(()=>{if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("/sw.js").catch(()=>{})},[]);
const k=()=>setM(true);
return <main><S.Hero onKit={k}/><S.Problem/><S.Journeys/><S.Product/><S.Gameplay/><S.Passport/><S.Atlas/><S.StoryCards/><S.Generations/><S.Prototype/><S.Vision/><S.Footer onKit={k}/><DownloadModal open={m} onClose={()=>setM(false)}/></main>}
