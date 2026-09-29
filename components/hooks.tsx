"use client";
import {useEffect,useRef,useState,ReactNode,RefObject} from "react";
export function useInView<T extends HTMLElement>(t=0.25):[RefObject<T>,boolean]{
const r=useRef<T>(null);const [v,s]=useState(false);
useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){s(true);o.disconnect()}},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);
return [r,v]}
export function Reveal({children,d=0,className=""}:{children:ReactNode;d?:number;className?:string}){
const [r,v]=useInView<HTMLDivElement>(0.15);
return <div ref={r} className={`rv ${v?"in":""} ${className}`} style={{transitionDelay:`${d}ms`}}>{children}</div>}
