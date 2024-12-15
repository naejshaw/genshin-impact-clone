'use client'
import Image from "next/image";
import { useState } from "react";
import { isIOS } from "react-device-detect";

export default function Header(){
    const [linkDownload] = useState(
        isIOS
          ? 'https://apps.apple.com/us/app/genshin-impact/id1517783697'
          : 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US&gl=US'
      );
    return(
        <header className="header">
      <Image src={'/assets/logo.png'} alt="logo" className="logo mb" width={40} height={80} />
      <div className="right mb">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://genshin.mihoyo.com/m/en/home"
        >
          <Image src={'/assets/official.webp'} className="button" alt="official-site"  width={20} height={90} />
        </a>
        <a href={linkDownload} target="_blank" rel="noreferrer">
          <Image src={'/assets/download.webp'} className="button" alt="download"  width={20} height={90} />
        </a>
      </div>
    </header>
    )
}