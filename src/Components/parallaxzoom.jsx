import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ParallaxZoom() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleCat7 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scaleCat2 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scaleCat3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scaleCat4 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scaleCat5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scaleCat6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scaleCat1 = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <>
      <div id="containerCat" ref={containerRef} className="w-full h-[300vh] relative bg-[#c2b8ac] my-[50vh]">
        <div id="sticky" className="w-full sticky overflow-hidden bg-[#EAE4DD] top-0 h-[100vh]">
          <motion.div style={{scale: scaleCat7}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[25vw] h-[25vh] overflow-hidden relative">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat7.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat1}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">  
            <div id="imgContainer" className="w-[25vw] h-[20vh] top-[-25vh] relative overflow-hidden">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat1.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat2}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[16vw] h-[25vh] right-[-22vw] relative overflow-hidden">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat2.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat3}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[20vw] h-[25vh] left-[-2.5vw] bottom-[-29vh] relative overflow-hidden">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat3.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat4}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[16vw] h-[25vh] bottom-[-29vh] right-[-17vw] relative overflow-hidden">
              <img className="w-full h-full object-cover object-bottom" src="/parallaxzoom/cat4.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat5}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[18vw] h-[25vh] bottom-[-29vh] right-[23vw] relative overflow-hidden">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat5.jpg" alt="Cat" />
            </div>
          </motion.div>
          <motion.div style={{scale: scaleCat6}} id="scaleWrapper" className="w-[100%] h-[100%] top-0 absolute flex items-center justify-center">
            <div id="imgContainer" className="w-[16vw] h-[40vh] bottom-[7vh] left-[-22vw] relative overflow-hidden ">
              <img className="w-full h-full object-cover object-center" src="/parallaxzoom/cat6.jpg" alt="Cat" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}