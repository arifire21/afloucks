'use client'
import Image, { StaticImageData } from "next/image"
import { useState, useEffect, useRef } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from '@/styles/carousel.module.css'

interface CarouselProps {
    images: StaticImageData[],
    project: string
}

export default function Carousel({images, project} : CarouselProps){
    const [currentImg, setCurrentImg] = useState(0)
    // const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    // const carouselRef = useRef(null)

    // useEffect(() => {
    //     let elem = carouselRef.current as unknown as HTMLDivElement
    //     let { width, height } = elem.getBoundingClientRect()
    //     if (carouselRef.current) {
    //         setCarouselSize({
    //             width,
    //             height,
    //         })
    //         console.log(carouselSize.width + ' ' + carouselSize.height + "," +carouselRef)
    //     }
    // }, [])

    return(
        <>
            <div className={styles.carouselContainer}>
                {/* <div ref={carouselRef}
                    // style={{left: -currentImg * carouselSize.width}}
                    > */}
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image
                                className={styles.carouselImage}
                                src={images[index]}
                                alt={`${project}-${index}`}
                                fill
                            />
                        </div>
                    ))}
                </div>
            {/* </div> */}
            <div className={styles.buttonContainer}>
                <button
                    disabled={currentImg == 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={styles.arrowButton}
                >
                    <AiFillCaretLeft size={20}/>
                </button>
                <div className={styles.dotContainer}>
                    {images.map((_, index) => (
                        <span className={`${styles.dot}
                        ${index === currentImg ? styles.currentDot : ''}`} key={index} onClick={() => setCurrentImg(index)}>
                            {/* {index} */}
                        </span>
                    ))}
                </div>
                <button
                    disabled={currentImg == images.length - 1}
                    className={styles.arrowButton}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                >
                    <AiFillCaretRight size={20}/>
                </button>
            </div>
        </>
    )
}