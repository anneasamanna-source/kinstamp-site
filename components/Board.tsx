"use client";
import {JOURNEYS} from "@/lib/content";
const P=(a:number,r:number)=>[Math.cos(a*Math.PI/180)*r,Math.sin(a*Math.PI/180)*r];
export default function Board({active,onSelect,size="100%"}:{active?:string;onSelect?:(id:string)=>void;size?:string}){
return <svg viewBox="-104 -104 208 208" width={size} height={size} role="img" aria-label="KINSTAMP circular heritage board">
<circle r="103" fill="#3a2718" stroke="#c9a45c" strokeWidth="1.5"/>
{JOURNEYS.map((j,i)=>{const a0=-120+i*60,a1=a0+60,[x0,y0]=P(a0,98),[x1,y1]=P(a1,98),[lx,ly]=P(a0+30,66),[tx,ty]=P(a0+30,84);
const on=active===j.id;
return <g key={j.id} onClick={()=>onSelect?.(j.id)} style={{cursor:onSelect?"pointer":"default"}} opacity={active&&!on?0.55:1}>
<path d={`M0 0L${x0} ${y0}A98 98 0 0 1 ${x1} ${y1}Z`} fill={j.color} stroke="#f6efe2" strokeWidth={on?2.5:1}/>
{[0.5,0.62,0.74,0.86].map(k=>{const [cx,cy]=P(a0+30,98*k);return <rect key={k} x={cx-3.5} y={cy-3.5} width="7" height="7" rx="1.5" fill="#f6efe2" opacity=".85" transform={`rotate(${a0+120} ${cx} ${cy})`}/>})}
<text x={lx} y={ly} textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#1b1410" style={{fontFamily:"var(--serif)",letterSpacing:".5px"}}>{j.name.toUpperCase()}</text>
<text x={tx} y={ty} textAnchor="middle" fontSize="3.4" fill="#1b1410">{j.theme}</text></g>})}
<circle r="27" fill="#12301f" stroke="#c9a45c" strokeWidth="1.5"/>
<text y="-1" textAnchor="middle" fontSize="9" fontWeight="700" fill="#f6efe2" style={{fontFamily:"var(--serif)"}}>ROOTS</text>
<text y="8" textAnchor="middle" fontSize="4" fill="#e0b84a" letterSpacing="2">CIRCLE</text></svg>}
