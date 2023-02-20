import React from "react";
import { useState } from "react";
import { Button } from '@mui/material';



function MobilityInfoButton({text, showOnHover}) {
    const [showInfo, setShowInfo] = useState(false)

    const handleClick = () => {
        setShowInfo(!showInfo);

    }

    return (
        <div>
             <Button onClick={handleClick}>
             🛈
             </Button>
             {showInfo && <div>Press 'yes' if the robot left their community, 'no' if they have not.</div>}
        </div>
    )
}



export default MobilityInfoButton;