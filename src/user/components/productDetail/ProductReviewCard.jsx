import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={5} gap={5}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                            H
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Linh</p>
                            <p className='opacity-70'>29/12/2024</p>
                        </div>
                    </div>
                    <Rating readOnly value={2.5} name='haft-rating' precision={.5} />
                    <p> Hello this is a good product </p>
                </Grid>
            </Grid>

        </div>
    )
}

export default ProductReviewCard