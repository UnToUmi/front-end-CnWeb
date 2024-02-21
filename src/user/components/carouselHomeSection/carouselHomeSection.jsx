import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSection from '../homeSection/homeSection'
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const CarouselHomeSection = ({ data, sectionName }) => {

    const [activeValue, setActiveValue] = useState(0);


    const items = data.map((item, index) => {
        return (
            <HomeSection product={item} />
        )
    })

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 3.5 }
    }

    const slidePrev = () => {
        setActiveValue(activeValue - 1)
    }

    const slideNext = () => {
        setActiveValue(activeValue + 1)
    }

    const syncActiveValue = ({ item }) => {
        setActiveValue(item)
    }
    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py'>{sectionName}</h2>
            <div className='relative p-5 '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveValue}
                    activeIndex={activeValue}
                />
                {activeValue !== items.length - 3 &&
                    <Button
                        onClick={slideNext}
                        variant='contained'
                        className=' z-50 '
                        sx={
                            {
                                position: "absolute",
                                top: "10rem",
                                right: "0rem",
                                transform: "translateX(50%) rotate(90deg)",
                                bgcolor: "white",
                            }
                        }
                        aria-label='next'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                {activeValue !== 0 && <Button
                    onClick={slidePrev}
                    variant='contained'
                    className=' z-50 '
                    sx={
                        {
                            position: "absolute",
                            top: "10rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                        }
                    }
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
            </div>
        </div>

    )
}

export default CarouselHomeSection