import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewProduct } from '../../../state/product/Action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    outline: "none",
    boxShadow: 24,
    p: 4,
    overflow: "scroll"
}

const AddNewProduct = ({ handleClose, open }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const dataProduct = {
            imageUrl: data.get("imageUrl"),
            brand: data.get("brand"),
            price: data.get("price"),
            thirdLevelCategory: data.get("thirdLevelCategory"),
            description: data.get("description"),
            size: [
                {
                    name: "Mua lẻ",
                    quantity: data.get("mua_le")
                },
                {
                    name: "Mua bộ",
                    quantity: data.get("mua_bo")
                },
                {
                    name: "Bản đặc biệt",
                    quantity: data.get("ban_dac_biet")
                },
            ],
            discountedPrice: data.get("discountedPrice"),
            discountPersent: data.get("discountPersent"),
            quantity: data.get("quantity"),
            secondLevelCategory: "Văn học",
            topLevelCategory: "Domestic Books"
        }
        console.log("dataConvert: ", dataProduct)

        dispatch(addNewProduct({ dataProduct }))

    }



    return (

        <Modal
            sx={{ overflow: "scroll" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <form
                    onSubmit={handleSubmit}
                >

                    <Grid container spacing={3} >
                        <Grid item xs={12}>
                            <Button
                                className='text-end'
                            >
                                X
                            </Button>
                        </Grid>

                        <Grid item xs={12} >
                            <TextField
                                required
                                id='imageUrl'
                                name='imageUrl'
                                label="ImageUrl"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                id='title'
                                name='title'
                                label="Title"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                required
                                id='price'
                                name='price'
                                label="Price"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                required
                                id='discountedPrice'
                                name='discountedPrice'
                                label="DiscountedPrice"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                required
                                id='discountPersent'
                                name='discountPersent'
                                label="DiscountPersent"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                required
                                id='brand'
                                name='brand'
                                label="Brand"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                required
                                id='thirdLevelCategory'
                                name='thirdLevelCategory'
                                label="ThirdLevelCategory"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>


                        <Grid item xs={6} >
                            <TextField
                                required
                                id='description'
                                name='Description'
                                label="Description"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={12}> Option</Grid>
                        <Grid item xs={3} >
                            <TextField
                                required
                                id='mua_le'
                                name='mua_le'
                                label="Mua lẻ"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                required
                                id='mua_bo'
                                name='mua_bo'
                                label="Mua bộ"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                required
                                id='ban_dac_biet'
                                name='ban_dac_biet'
                                label="Bản đặc biệt"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                                required
                                id='quantity'
                                name='quantity'
                                label="Quantity"
                                fullWidth
                                autoComplete='given-name'
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Button
                                className='bg-[#9155FD] w-full'
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                            >
                                Add new a product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    )
}

export default AddNewProduct