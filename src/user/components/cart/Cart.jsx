import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../state/cart/Action'

const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store)
    const handleCheckOut = () => {
        navigate("/check_out?step=2")
    }

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updateCartItem, cart.deleteCartItem])

    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                    {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p
                            className='uppercase font-bold opacity-60 pb-4'

                        >
                            Your bill
                        </p>
                        <hr />
                        <div className='space-y-3 font-semibold mb-4'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>
                                    Price
                                </span>
                                <span>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.cart?.totalPrice)}
                                </span>
                            </div>


                            <div className='flex justify-between pt-3 '>
                                <span>
                                    Discount
                                </span>
                                <span className='text-green-600'>
                                    - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.cart?.discount)}
                                </span>
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
                                <span className='text-green-600 '>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cart.cart?.totalPrice - cart.cart?.discount)}

                                </span>
                            </div>

                        </div>
                        <Button
                            onClick={() => handleCheckOut()}
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

export default Cart