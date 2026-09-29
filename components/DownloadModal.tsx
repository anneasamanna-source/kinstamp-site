"use client";
import {useEffect,useState} from "react";
import {JOURNEYS,STEPS,PASSPORT} from "@/lib/content";
const OPTS=[["rules","How to play","The six-step gameplay loop"],["prompts","Story prompts","One real-life interaction per journey"],["passport","Passport pages","Printable Family Passport sections"]] as const;
function build(sel:string[]){
const s=(t:string,b:string)=>`<section><h2>${t}</h2>${b}</section>`;
let h=`<!doctype html><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>KINSTAMP Offline Kit</title><style>body{font:18px/1.6 Georgia,serif;max-width:720px;margin:auto;padding:32px;background:#f6efe2;color:#1b1410}h1,h2{font-variant:small-caps;letter-spacing:.08em}section{margin:32px 0;padding-bottom:16px;border-bottom:1px solid #c9a45c}.d{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px}@media print{body{background:#fff}}</style><h1>KINSTAMP</h1><p><i>Play Your Past. Stamp Your Future.</i></p>`;
if(sel.includes("rules"))h+=s("How to play",`<p>The family wins only when every generation reaches the Roots Circle.</p><ol>${STEPS.map(x=>`<li><b>${x[0]}.</b> ${x[1]}</li>`).join("")}</ol>`);
if(sel.includes("prompts"))h+=s("Story prompts",JOURNEYS.map(j=>`<p><span class=d style="background:${j.color}"></span><b>${j.name}</b> (${j.theme}): ${j.prompt}</p>`).join(""));
if(sel.includes("passport"))h+=s("Family Passport",PASSPORT.map(p=>`<h3>${p}</h3><p style="height:120px;border:1px dashed #c9a45c"></p>`).join(""));
return h}
export default function DownloadModal({open,onClose}:{open:boolean;onClose:()=>void}){
const [sel,setSel]=useState<string[]>(["rules","prompts","passport"]);const [done,setDone]=useState("");
useEffect(()=>{const k=(e:KeyboardEvent)=>e.key==="Escape"&&onClose();if(open){addEventListener("keydown",k);document.body.style.overflow="hidden"}return()=>{removeEventListener("keydown",k);document.body.style.overflow=""}},[open,onClose]);
if(!open)return null;
const dl=async()=>{const b=new Blob([build(sel)],{type:"text/html"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="KINSTAMP-offline-kit.html";a.click();URL.revokeObjectURL(a.href);
let msg="Downloaded. Open the file anytime, no internet needed.";
if("serviceWorker" in navigator){try{await navigator.serviceWorker.ready;msg+=" This site is now cached for offline visits too."}catch{}}setDone(msg)};
return <div className="modal" onClick={onClose}><div className="card-m" role="dialog" aria-modal="true" aria-label="Offline kit" onClick={e=>e.stopPropagation()}>
<button className="x" onClick={onClose} aria-label="Close">×</button>
<h3>Take KINSTAMP offline</h3><p>Choose what goes in your printable, offline family kit.</p>
{OPTS.map(([id,t,d])=><label key={id} className="opt"><input type="checkbox" checked={sel.includes(id)} onChange={()=>setSel(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])}/><span><b>{t}</b><small>{d}</small></span></label>)}
<button className="btn" disabled={!sel.length} onClick={dl}>Download kit</button>
{done&&<p className="ok">{done}</p>}</div></div>}
