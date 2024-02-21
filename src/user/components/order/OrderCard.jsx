import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-xl'>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}

            >
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img
                            className='w-[5rem] h-[5rem] object-cover object-top'
                            src=''
                        />
                        <div className='ml-5 space-y-2'>
                            <p >crbergwegwefwefe</p>
                            <p className='opacity-50 text-xs font-semibold'>
                                Size: M
                            </p>
                            <p className='opacity-50 text-xs font-semibold'>
                                Color: Black
                            </p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>20000</p>
                </Grid>

                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon
                                    sx={{
                                        width: "15px",
                                        height: "15px",
                                        marginBottom: "4px"
                                    }}
                                    className='text-green-600 mr-2 text-sm' />
                                <span>
                                    Delivered On 23/1/2024
                                </span>
                            </p>
                            <p className='text-xs'>
                                Your Item has been delivered!
                            </p>
                        </div>
                    }
                    {false &&
                        <p>
                            <span>EXverbrebre On cebreger</span>
                        </p>
                    }
                </Grid>
            </Grid>

        </div>
    )
}

export default OrderCard