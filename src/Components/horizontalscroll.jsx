import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef , useState, useEffect } from 'react';

const img = [
    {
        id: 1,
        src: '/horizontalscroll/food1.jpg',
        alt: 'Food 1'
    },
    {
        id: 2,
        src: '/horizontalscroll/food2.jpg',
        alt: 'Food 2'
    },
    {
        id: 3,
        src: '/horizontalscroll/food3.jpg',
        alt: 'Food 3'
    },
    {
        id: 4,
        src: '/horizontalscroll/food4.jpg',
        alt: 'Food 4'
    },
    {
        id: 5,
        src: '/horizontalscroll/food5.jpg',
        alt: 'Food 5'
    },
    {
        id: 6,
        src: '/horizontalscroll/food6.jpg',
        alt: 'Food 6'
    },
    {
        id: 7,
        src: '/horizontalscroll/food7.jpg',
        alt: 'Food 7'
    }
]

export default function HorizontalScroll() {
    const [ maxTranslate, setMaxTranslate ] = useState(0);

    const imgContainerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const containerWidth = imgContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxTranslate(-(containerWidth - viewportWidth));
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], [ 40, maxTranslate - 40]);

    return (
        <>
         <div ref={sectionRef} className="relative w-full h-[400vh]">
            <div className="sticky top-0 flex items-center w-full h-screen overflow-hidden">
                <motion.div ref={imgContainerRef} style={ {x} } className="flex gap-10">
                    {img.map(item => {
                        return (
                            <img key={item.id} src={item.src} alt={item.alt} className="w-[600px] h-[300px] rounded-xl object-cover" />
                        )
                    })}
                </motion.div>
            </div>
         </div>
        </>
    )
}