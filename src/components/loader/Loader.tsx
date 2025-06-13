"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "@/redux/store";

const Loader = () => {
  const isLoader = useSelector((state: RootState) => state.loader.value);
  const [showLoader, setShowLoader] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoader) {
      setShowLoader(true);
      setFadeOut(false);
    } else if (showLoader) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 300); // thời gian trùng với animation CSS
      return () => clearTimeout(timeout);
    }
  }, [isLoader]);

  if (!showLoader) return null;

  return (
    <div className={`fixed z-[9999] bg-white/80 top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div role="status" className="z-[10000]">
        <div className="typing-indicator">
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
