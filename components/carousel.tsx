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

    function handlePrev(imageIndex:number, project:string){
        const currentImage = document.getElementById(`${project}-${imageIndex}`)
        const nextImage = document.getElementById(`${project}-${imageIndex - 1}`)
        // console.log("pre: current:" + currentImage!.style.zIndex)
        // console.log("pre: next:" + nextImage!.style.zIndex)
        currentImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) - 1).toString()
        nextImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) + 1).toString()
        // console.log("post: current:" + currentImage!.style.zIndex)
        // console.log("post: next:" + nextImage!.style.zIndex)
        setCurrentImg(prev => prev - 1);
    }

    function handleNext(imageIndex:number, project:string){
        const currentImage = document.getElementById(`${project}-${imageIndex}`)
        const nextImage = document.getElementById(`${project}-${imageIndex + 1}`)
        // console.log("pre: current:" + currentImage!.style.zIndex)
        // console.log("pre: next:" + nextImage!.style.zIndex)
        currentImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) - 1).toString()
        nextImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) + 1).toString()
        // console.log("post: current:" + currentImage!.style.zIndex)
        // console.log("post: next:" + nextImage!.style.zIndex)
        setCurrentImg(prev => prev + 1);
    }

    return(
        <>
            <div className={styles.imageContainer}>
                {images.map((image, index) => (
                    <Image
                        key={`${project}-${index}`}
                        id={`${project}-${index}`}
                        className={styles.carouselImage}
                        src={image}
                        alt={`${project}-${index}`}
                        fill
                        sizes="100%"
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center',
                            zIndex: (images.length - index).toString()
                        }}
                        placeholder="blur"
                    />
                ))}
            </div>

            <div className={styles.buttonContainer}>
                <button
                    disabled={currentImg == 0}
                    onClick={() => handlePrev(currentImg, project)}
                    className={styles.arrowButton}
                    aria-label="Prev Carousel Image button"
                >
                    <AiFillCaretLeft size={20}/>
                </button>

                <div className={styles.dotContainer}>
                    {images.map((_, index) => (
                        <span className={`${styles.dot}
                        ${index === currentImg ? styles.currentDot : ''}`}
                        key={index}
                        aria-label="Carousel Dot"
                        // onClick={() => () => handleDot(index, project)}
                        >
                        </span>
                    ))}
                </div>

                <button
                    disabled={currentImg == images.length - 1}
                    className={styles.arrowButton}
                    onClick={() => handleNext(currentImg, project)}
                    aria-label="Prev Carousel Image button"
                >
                    <AiFillCaretRight size={20}/>
                </button>
            </div>
        </>
    )
}