import React, { useEffect } from 'react'
import AddressCard from '../addressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const orderId = searchParams.get("order_id")
    const { order } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

    return (

        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard address={order.order?.shippingAddress} />
            </div>
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2'>
                    {order.order?.orderItems.map((item) => <CartItem item={item} />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p
                            className='uppercase font-bold opacity-60 pb-4'
                        >
                            Price details
                        </p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-4'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>
                                    Price
                                </span>
                                <span>4124</span>
                            </div>


                            <div className='flex justify-between pt-3 '>
                                <span>
                                    Discount
                                </span>
                                <span className='text-green-600'>4124</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>
                                    Delivery Charge
                                </span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>
                                    Total Amount
                                </span>
                                <span className='text-green-600 '>4124</span>
                            </div>

                        </div>
                        <Button

                            color='secondary'
                            variant='contained'
                            className='w-full'
                            sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd", mt: "3rem" }}

                        >
                            Checkout

                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderSummary