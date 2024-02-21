import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import OrderTraket from './OrderTraket'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const OrderDetail = () => {
    return (
        <div className='px-5 lg:px-20'>
            <h1
                className='font-bold py-7 text-xl'
            >
                DeliveryAddress
            </h1>
            <AddressCard />

            <div className='py-20'>
                <OrderTraket activeStep={3} />
            </div>
            <Grid container className='space-y-5'>
                {[1, 1, 1, 1, 1].map((item) =>
                    <Grid
                        item
                        container
                        className='shadow-xl rounded-md p-5 border'
                        sx={{ alignItems: "center", justifyContent: "space-between" }}
                    >
                        <Grid item xs={6}>
                            <div className='flex items-center space-x-4'>
                                <img
                                    className='w-[5rem] h-[5rem] object-cover object-top'
                                    src=''
                                    alt='A picture' />
                                <div className='space-y-2 ml-5'>
                                    <p className='font-semibold'>efgywefgwfeyuvwe</p>
                                    <p
                                        className='space-x-5 opacity-50 
                                text-xs font-semibold' >
                                        <span>Color: scfeger </span>
                                        <span>Size: M</span>
                                    </p>
                                    <p>Seller: whfhwehfw</p>
                                    <p>423</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item>

                            <Box sx={{ color: deepPurple[500] }}>
                                <StarOutlineIcon
                                    sx={{ fontSize: "2rem" }}
                                    className='px-2' />
                                <span>Rate & Review Products</span>

                            </Box>

                        </Grid>
                    </Grid>


                )}


            </Grid>

        </div>
    )
}

export default OrderDetail