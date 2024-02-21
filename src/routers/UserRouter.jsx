import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../user/pages/homePage/homePage'
import Cart from '../user/components/cart/Cart'
import Navigation from '../user/components/navigation/navigation'
import Product from '../user/components/product/Product'
import Footer from '../user/components/footer/Footer'
import ProductDetail from '../user/components/productDetail/ProductDetail'
import Checkout from '../user/components/checkout/Checkout'
import Order from '../user/components/order/Order'
import OrderDetail from '../user/components/order/OrderDetail'
import LoginForm from '../user/auth/LoginForm'
import RegisterForm from '../user/auth/RegisterForm'


const UserRouter = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/login' element={<HomePage />} />
                <Route path='/register' element={<HomePage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetail />} />
                <Route path='/check_out' element={<Checkout />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<OrderDetail />} />

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default UserRouter