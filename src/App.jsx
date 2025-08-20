import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import SplitImage from './Components/splitimage';
import ParallaxZoom from './Components/parallaxzoom';
import HorizontalScroll from './Components/horizontalscroll';

export default function App() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <ParallaxZoom />
      <SplitImage />
      <HorizontalScroll />
    </>
  )
}