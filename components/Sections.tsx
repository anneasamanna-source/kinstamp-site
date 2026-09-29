"use client";
import {useEffect,useRef,useState} from "react";
import Board from "./Board";
import {Reveal,useInView} from "./hooks";
import {JOURNEYS,STEPS,PASSPORT,ATLAS,GENS,KIT} from "@/lib/content";

export function Hero({onKit}:{onKit:()=>void}){return <section className="hero" id="top">
<div className="hero-txt"><p className="eyebrow">A living heritage ecosystem</p><h1>KINSTAMP</h1><p className="tag">Play Your Past. Stamp Your Future.</p>
<div className="row"><a className="btn" href="#journeys">Begin the journey</a><button className="btn ghost" onClick={onKit}>Offline kit</button></div></div>
<div className="stage"><div className="spin"><Board/></div></div><span className="scroll">Scroll</span></section>}

const COLL=["Oral histories","Regional songs","Handwritten letters","Ancestral recipes","Migration memories"];
export function Problem(){return <section className="sec dark" id="problem"><div className="wrap">
<Reveal><h2 className="big">We inherit surnames. Why don't we inherit stories?</h2></Reveal>
<Reveal d={150}><p className="lead">Today's families are constantly connected through technology, yet emotionally disconnected from their cultural roots. Oral histories, regional songs, handwritten letters, ancestral recipes, and migration memories often disappear within a single generation because they are rarely documented or shared.</p></Reveal>
<div className="collage">{COLL.map((c,i)=><div key={c} className="polaroid" style={{"--r":`${(i-2)*5}deg`,"--d":`${i*0.8}s`,background:JOURNEYS[i].color} as React.CSSProperties}><span>{c}</span></div>)}</div>
<div className="two"><ul className="ins">{["Grandparents possess the richest untold cultural knowledge.","Family gatherings rarely encourage meaningful storytelling.","Children know festivals, but not the stories behind them.","Heritage survives through conversation, not storage."].map((t,i)=><Reveal key={t} d={i*100}><li>{t}</li></Reveal>)}</ul>
<Reveal><blockquote>“The problem isn't forgetting. The problem is that we stopped asking.”</blockquote></Reveal></div></div></section>}

export function Journeys(){const [a,setA]=useState("roots");const j=JOURNEYS.find(x=>x.id===a)!;
return <section className="sec" id="journeys"><div className="wrap two c">
<div className="wheel"><Board active={a} onSelect={setA}/></div>
<div><p className="eyebrow">Board architecture</p><h2>Six journeys of cultural identity</h2><p className="lead">Each colored pathway represents a different dimension of heritage.</p>
<div className="chips">{JOURNEYS.map(x=><button key={x.id} className={x.id===a?"on":""} style={{"--c":x.color} as React.CSSProperties} onClick={()=>setA(x.id)}>{x.name}</button>)}</div>
<div className="detail" key={a} style={{borderColor:j.color}}><h3>{j.name} <small>{j.theme}</small></h3><p>{j.story}</p></div></div></div></section>}

export function Product(){const [ang,setAng]=useState(0);const [q,setQ]=useState("roots");const d=useRef<number|null>(null);const j=JOURNEYS.find(x=>x.id===q)!;
return <section className="sec cream" id="product"><div className="wrap two c"><div>
<p className="eyebrow">What is KINSTAMP?</p><h2>A living heritage ecosystem</h2>
<p className="lead">KINSTAMP is a premium cooperative board game combined with a Family Passport, Roots Atlas, Story Cards, Memory Stamps, and handcrafted wooden components. Every interaction creates a permanent cultural record instead of temporary entertainment.</p>
<p className="pull">Unlike traditional games, the objective is not to defeat each other. It is to complete your family's legacy together.</p>
<div className="detail" style={{borderColor:j.color}}><h3>{j.name}</h3><p>{j.prompt}</p></div><p className="hint">Drag to rotate. Tap a quadrant to explore.</p></div>
<div className="rot" onPointerDown={e=>{d.current=e.clientX}} onPointerMove={e=>{if(d.current!==null){setAng(a=>a+(e.clientX-d.current!)*0.6);d.current=e.clientX}}} onPointerUp={()=>{d.current=null}} onPointerLeave={()=>{d.current=null}}>
<div className="tilt" style={{transform:`rotateX(58deg) rotateZ(${ang}deg)`}}><Board active={q} onSelect={setQ}/></div></div></div></section>}

export function Gameplay(){const [i,setI]=useState(0);const refs=useRef<(HTMLDivElement|null)[]>([]);
useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setI(Number((e.target as HTMLElement).dataset.i))}),{rootMargin:"-45% 0px -45% 0px"});refs.current.forEach(r=>r&&o.observe(r));return()=>o.disconnect()},[]);
return <section className="sec dark" id="gameplay"><div className="wrap gp"><div className="sticky"><p className="eyebrow">Gameplay</p><div className="num" key={i}>{String(i+1).padStart(2,"0")}</div><h3>{STEPS[i][0]}</h3>
<div className="bar"><i style={{width:`${((i+1)/6)*100}%`}}/></div><p className="win">The family wins only when every generation reaches the Roots Circle.</p></div>
<div>{STEPS.map((s,k)=><div key={k} ref={el=>{refs.current[k]=el}} data-i={k} className={`step ${k===i?"on":""}`}><span>{k+1}</span><p>{s[1]}</p></div>)}</div></div></section>}

export function Passport(){const [f,setF]=useState(0);const pg=[["Family Passport","cover"],...PASSPORT.map(p=>[p,""])];
const leaves=[[0,1],[2,3],[4,5],[6,7]];
const txt=(k:number)=>k===0?<div className="cover"><small>KINSTAMP</small><h4>Family Passport</h4><div className="seal">K</div></div>:k>6?<div className="pg"><h4>Roots Circle</h4><p>Every generation arrives together.</p></div>:<div className="pg"><h4>{pg[k][0]}</h4><div className="lines"><i/><i/><i/><i/></div><small>{k}/6</small></div>;
return <section className="sec cream" id="passport"><div className="wrap"><p className="eyebrow ctr">Family Passport</p><h2 className="ctr">A passport that records people, not places</h2><p className="lead ctr">Every player owns a beautifully crafted passport that grows throughout their lifetime.</p>
<div className="book" style={{transform:f===0?"translateX(-25%)":f===4?"translateX(25%)":"none"}}>{leaves.map((l,k)=><div key={k} className={`leaf ${k<f?"fl":""}`} style={{zIndex:k<f?k:10-k}} onClick={()=>setF(k<f?k:k+1)}><div className="face fr">{txt(l[0])}</div><div className="face bk">{txt(l[1])}</div></div>)}</div>
<div className="row ctr"><button className="btn ghost" disabled={f===0} onClick={()=>setF(f-1)}>Previous</button><button className="btn" disabled={f===4} onClick={()=>setF(f+1)}>Turn page</button></div></div></section>}

export function Atlas(){const [x,setX]=useState(0);const st=useRef<{x:number;o:number}|null>(null);const [a,setA]=useState(0);
return <section className="sec dark" id="atlas"><div className="wrap"><p className="eyebrow">Roots Atlas</p><h2>Draw your family across time</h2><p className="hint">Drag the timeline.</p></div>
<div className="tl" onPointerDown={e=>{st.current={x:e.clientX,o:x}}} onPointerMove={e=>{if(st.current)setX(Math.max(-900,Math.min(0,st.current.o+e.clientX-st.current.x)))}} onPointerUp={()=>{st.current=null}} onPointerLeave={()=>{st.current=null}}>
<div className="track" style={{transform:`translateX(${x}px)`}}>{ATLAS.map((t,i)=><div key={i} className={`node ${i===a?"on":""}`} onClick={()=>setA(i)}><i style={{background:JOURNEYS[i%6].color}}/><h4>{t[0]}</h4><p>{t[1]}</p></div>)}</div></div></section>}

export function StoryCards(){const [o,setO]=useState<string|null>(null);
return <section className="sec" id="cards"><div className="wrap"><p className="eyebrow">Story Cards & Unlocks</p><h2>Every conversation becomes a collectible memory.</h2>
<div className="cards">{JOURNEYS.map(j=><button key={j.id} className={`fc ${o===j.id?"o":""}`} onClick={()=>setO(o===j.id?null:j.id)}><div className="face fr" style={{background:j.color}}><h4>{j.name}</h4><small>{j.theme}</small></div><div className="face bk"><small>Real-life interaction</small><p>{j.prompt}</p></div></button>)}</div></div></section>}

export function Generations(){const [r,v]=useInView<HTMLDivElement>(0.3);
return <section className="sec cream" id="gens"><div className="wrap" ref={r}><p className="eyebrow ctr">User journey</p><h2 className="ctr">Three generations. One experience.</h2>
<svg viewBox="0 0 900 160" className={`thread ${v?"go":""}`}><path d="M40 100 C 200 20, 300 180, 450 90 S 720 20, 860 100" pathLength={1}/>{[40,450,860].map((c,i)=><circle key={i} cx={c} cy={[100,90,100][i]} r="9" style={{fill:JOURNEYS[[0,2,5][i]].color,transitionDelay:`${i*0.9}s`}}/>)}</svg>
<div className="three">{GENS.map((g,i)=><Reveal key={i} d={i*250}><h3>{g[0]}</h3><p>{g[1]}</p></Reveal>)}</div><p className="pull ctr">The result is a living archive created together.</p></div></section>}

export function Prototype(){const [o,setO]=useState(false);
return <section className="sec dark" id="prototype"><div className="wrap two c"><div><p className="eyebrow">Prototype kit</p><h2>What's inside the heirloom box?</h2><p className="lead">Designed as an heirloom product that can be passed from one generation to another. 4-6 players.</p><button className="btn" onClick={()=>setO(!o)}>{o?"Close the box":"Open the box"}</button></div>
<div className="explode"><div className="stack">{KIT.map((k,i)=><div key={k} className="layer" style={{transform:`translateZ(${o?i*46:i*4}px)`,background:JOURNEYS[i].color}}><span>{k}</span></div>)}</div></div></div></section>}

export function Vision(){return <section className="sec vision" id="vision"><div className="wrap narrow"><Reveal><p className="eyebrow ctr">Vision</p></Reveal>
<Reveal d={100}><p className="mani">How might we transform family game night into a ritual of preserving heritage?</p></Reveal>
<Reveal d={200}><p className="mani sm">KINSTAMP reimagines the familiar experience of board games into a collaborative storytelling ecosystem where families reconnect through play rather than screens.</p></Reveal>
<Reveal d={300}><div className="pr">{[["Belonging","Strengthen family bonds"],["Preservation","Capture intangible heritage"],["Participation","Learn through collaborative play"]].map(p=><div key={p[0]}><h4>{p[0]}</h4><p>{p[1]}</p></div>)}</div></Reveal></div></section>}

export function Footer({onKit}:{onKit:()=>void}){return <footer className="foot"><svg viewBox="0 0 200 200" className="tree" aria-hidden><g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M100 190V110M100 150C80 140 60 130 50 105M100 135C120 125 140 118 152 92M100 115C100 90 92 70 78 52M100 115C104 85 118 68 128 48M50 105C40 95 34 82 34 68M152 92C160 80 164 68 162 56"/></g>{[[34,66],[78,50],[128,46],[162,54],[50,102],[152,90],[100,104]].map((c,i)=><circle key={i} cx={c[0]} cy={c[1]} r="9" fill="currentColor"/>)}</svg>
<h2>KINSTAMP</h2><p>Play Your Past. Stamp Your Future.</p><p className="mini">Designed by Anneasa Manna</p><button className="btn ghost" onClick={onKit}>Download the offline kit</button><small>Designed to last generations.</small></footer>}
