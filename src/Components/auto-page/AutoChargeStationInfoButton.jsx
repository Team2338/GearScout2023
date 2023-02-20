import React from "react";
import { useState } from "react";
import { Button } from '@mui/material';



function AutoChargeStationInfoButton({text, showOnHover}) {
    const [showInfo, setShowInfo] = useState(false)

    const handleClick = () => {
        setShowInfo(!showInfo);

    }

    return (
        <div>
             <Button onClick={handleClick}>
             🛈
             </Button>
             {showInfo && <div>Press the button that corresponds to where the robot ended up on the charge station.</div>}
        </div>
    )
}



export default AutoChargeStationInfoButton;