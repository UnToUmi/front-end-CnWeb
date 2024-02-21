import React from 'react'
import "./ProductCard.scss"
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ data }) => {
    const navigate = useNavigate();
    console.log("data: ", data)

    return (

        <div onClick={() => navigate(`/product/${data?._id}`)} className='border product-card  w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img
                    className='h-full w-full object-cover object-center'
                    src={data.imageUrl}
                    alt='A picture book' />
            </div>
            <div className='text-part bg-white p-3 '>
                <div>
                    <p className='font-bold opacity-60'>{data.brand}</p>
                    <p>{data.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.discountedPrice)}
                    </p>
                    <p className='line-through opacity-50'>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                    </p>
                    <p className='text-green-600 font-semibold'>{data.discountPersent}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard