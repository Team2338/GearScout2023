import React from "react";
import { useState } from "react";
import { Button } from '@mui/material';



function AutoGriddyInfoButton({text, showOnHover}) {
    const [showInfo, setShowInfo] = useState(false)

    const handleClick = () => {
        setShowInfo(!showInfo);

    }

    return (
        <div>
             <Button onClick={handleClick}>
             🛈
             </Button>
             {showInfo && <div>Press the button on the grid corresponding to where the robot placed their game piece.</div>}
        </div>
    )
}



export default AutoGriddyInfoButton;