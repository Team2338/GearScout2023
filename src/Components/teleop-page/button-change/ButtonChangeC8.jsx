import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { prepareAutoBatched } from '@reduxjs/toolkit';


function ButtonChange(props) {
    const [variant, setVariant] = useState("outlined");
    const [color, setColor] = useState("primary")
    const disabled = useSelector(state => state.buttons.find( button => button.id === props.id).disabled);



    const ChangeStyle = () => {
        if (variant === 'outlined') {
            setVariant('contained');
            setColor('primary');
            props.addPieceBottomTeleop();
            props.gridC8Teleop()
        }
		else if (variant === 'contained' && color === 'primary') {
			setColor('#90D601');
            props.addPieceBottomTeleop();
            props.gridC8Teleop()
		}
        else {
            setVariant('outlined');
            setColor('')
            props.removePieceBottomTeleop();
            props.removeGridC8Teleop()
        }
    }
    
    
    return (
            <div>
                <Button variant={variant} style={{backgroundColor: color}} onClick={ChangeStyle} disabled={disabled}>▲ ■</Button>
            </div>
    )
}



export default ButtonChange;