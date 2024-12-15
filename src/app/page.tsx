'use client'
import Mobile from "@/partials/Mobile";
import Web from "@/partials/Web";
import { isMobile } from "react-device-detect";

export default function Home() {
  if(isMobile){
    return <Mobile />
  }
  
  return<Web />
}
