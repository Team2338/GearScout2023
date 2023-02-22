import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { disableButton, enableButton } from '../../../app/buttonActions';

function ButtonChange(props) {
    const dispatch = useDispatch();
    const [variant, setVariant] = useState("outlined");


    const ChangeStyle = () => {
        if (variant === 'outlined') {
            setVariant('contained');
            dispatch(disableButton(props.id));
            props.addPieceBottomAuto();
            props.gridC6Auto();
        }
        else {
            setVariant('outlined');
            dispatch(enableButton(props.id))
            props.removePieceBottomAuto();
            props.removeGridC6Auto();
        }
    }

    
   
    return (
            <div>
                <Button variant={variant} onClick={ChangeStyle}>.</Button>
            </div>
    )
}



export default ButtonChange;