import React from 'react'
import { mainCarouselData } from './mainCaroueslData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = mainCarouselData.map((item, index) => {
        return (
            <img

                className='cursor-pointer object-fill overflow-hidden
                 lg:h-[34rem] md:h-[23rem] sm:h-[20rem] w-full'
                role='presentation'
                src={item.image}
                alt='Picture'
            />
        )
    })


    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2500}
            infinite
        />
    )
}

export default MainCarousel