import React from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
export const NavigateButton = ({value, variant, link}) =>{

    const buttonType = variant ? variant : "contained"; 

    return (
        <Link style={{ textDecoration: 'none' }} to={link}>
            <Button variant ={buttonType} startIcon={<Add />}>
                {value}
            </Button>
        </Link>
    )
}