
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'

import HomeSection from '../homeSection/homeSection'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../state/product/Action'
import { addItemToCart } from '../../../state/cart/Action'
import { tieu_thuyet } from '../../../Data/tieu_thuyet'
import { light_novel } from '../../../Data/light_novel'


const product = {
    breadcrumbs: [
        { id: 1, name: 'Văn học' },
        { id: 2, name: 'Light novel' },
    ],


}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail() {
    const [selectedSize, setSelectedSize] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store)

    const handleAddToCart = () => {
        const data = { productId: params.productId, size: selectedSize.name }
        dispatch(addItemToCart(data))
        navigate("/cart")

    }

    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductsById(data))
    }, [params.productId])

    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {products.product?.title}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 px-4 pt-10'>

                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={products.product?.imageUrl}
                                alt=''
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 
                    lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                                {products.product?.brand}
                            </h1>
                            <h1 className='text-lg lg:text-gray-900 opacity-60 pt-1'>
                                {products.product?.title}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(products.product?.discountedPrice)}
                                </p>
                                <p className='opacity-50 line-through'>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(products.product?.price)}

                                </p>
                                <p className='text-green-600 font-semibold '>
                                    {products.product?.discountPersent}% Off
                                </p>
                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>
                                    <Rating name='read-only' value={3.5} readOnly />
                                    <p className='opacity-50 text-sm'>23523 Ratings</p>
                                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-400'>3214 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Option:
                                        </h3>

                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {products.product?.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.quantity}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.quantity
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.quantity ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <Button
                                    onClick={() => handleAddToCart()}
                                    color='secondary'
                                    variant='contained'
                                    sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "3rem" }}

                                >
                                    Add to cart

                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{products.product?.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* rating and reviews */}
                <section>
                    <h1 className='font-semibold text-lg pb-4'>
                        Recent Review & Rating
                    </h1>
                    <div className='border p-5'>
                        <Grid className='' container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) => <ProductReviewCard />)}
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <h1 className='text-xl font-semibold pb-3'>
                                    Product Ratings
                                </h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating name='read-only' value={4.6} precision={.5} readOnly />
                                    <p className='opacity-60'>425 Ratings</p>
                                </div>
                                <Box className="mt-5 space-y-6">
                                    <Grid container alignContent="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={7} className='pt-2'>
                                            <LinearProgress
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 8 }}
                                                variant='determinate'
                                                value={40}
                                                color='success' />
                                        </Grid>
                                    </Grid>

                                    <Grid container alignContent="center" gap={2}>
                                        <Grid item xs={2} >
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={7} className='pt-2'>
                                            <LinearProgress
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 8 }}
                                                variant='determinate'
                                                value={40}
                                                color='success' />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignContent="center" gap={2}>
                                        <Grid item xs={2} >
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={7} className='pt-2'>
                                            <LinearProgress
                                                sx={{
                                                    bgcolor: "#d0d0d0",
                                                    borderRadius: 4,
                                                    height: 8,
                                                    color: ""
                                                }}
                                                variant='determinate'
                                                value={40}
                                                color='info'
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignContent="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Avarage</p>
                                        </Grid>
                                        <Grid item xs={7} className='pt-2'>
                                            <LinearProgress
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 8 }}
                                                variant='determinate'
                                                value={40}
                                                color='warning' />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignContent="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={7} className='pt-2'>
                                            <LinearProgress
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 8 }}
                                                variant='determinate'
                                                value={40}
                                                color='error' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* Similer products */}
                <section className='pt-10'>
                    <h1 className='py-5 text-xl font-semibold '>Similer Products</h1>
                    <div className='flex flex-wrap space-y-5'>
                        {light_novel.map((item) =>
                            <HomeSection product={item} />
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}
