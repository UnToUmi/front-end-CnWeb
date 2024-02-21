import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../state/auth/Action'

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData))


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='email'
                            name='email'
                            label="Email"
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='password'
                            name='password'
                            label="Password"
                            fullWidth
                            autoComplete='password'
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
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-row items-center pt-4'>
                <p>Do you want to register?</p>
                <Button
                    onClick={() => navigate("/register")}
                    className='ml-5 ' size='small'
                    sx={{ paddingTop: ".4rem" }}

                >
                    Register
                </Button>
            </div>
        </div>
    )
}

export default LoginForm