import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react';

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
];

const OrderTraket = (activeStep) => {
    return (
        <div className='w-full'>
            <Stepper
                activeStep={activeStep}
                alternativeLabel

            >
                {steps.map((item =>
                    <Step>
                        <StepLabel
                            sx={{ color: "#9155fd", fontSize: "44px" }}
                        >
                            {item}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default OrderTraket