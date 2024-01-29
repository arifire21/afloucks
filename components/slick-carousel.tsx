import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
    images: StaticImageData[],
    project: string
}

export default function Carousel({images, project} : CarouselProps){
    const settings = {
        className: "center",
        centerMode: true,
        variableWidth: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
    
    return(
        // <div style={{width:'100%'}}>
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
                <Image
                    // className={styles.carouselImage}
                    src={images[index]}
                    alt={`${project}-${index}`}
                    fill
                    placeholder="blur"
                />
            </div>
        ))}
        </Slider>
        // </div>
    )
}