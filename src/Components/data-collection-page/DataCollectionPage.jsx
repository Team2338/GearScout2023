import React, { useState } from 'react';
import './DataCollectionPage.scss'
import Button from '@mui/material/Button'
import MatchInfo from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx';
import GearscoutService from '../../Services/GearscoutService.js'
import Mobility from '../auto-page/Mobility.jsx';

const INITIAL_STATE = {
  autoGrid: 0,
  autoMobility: 0,
  autoChargeStation: 0,
  teleopGrid: 0,
  teleopChargeStation: 0,
  autoGridA1: 0,
  autoGridA2: 0,
  autoGridA3: 0,
  autoGridA4: 0,
  autoGridA5: 0,
  autoGridA6: 0,
  autoGridA7: 0,
  autoGridA8: 0,
  autoGridA9: 0,
  autoGridB1: 0,
  autoGridB2: 0,
  autoGridB3: 0,
  autoGridB4: 0,
  autoGridB5: 0,
  autoGridB6: 0,
  autoGridB7: 0,
  autoGridB8: 0,
  autoGridB9: 0,
  autoGridC1: 0,
  autoGridC2: 0,
  autoGridC3: 0,
  autoGridC4: 0,
  autoGridC5: 0,
  autoGridC6: 0,
  autoGridC7: 0,
  autoGridC8: 0,
  autoGridC9: 0,
  teleopGridA1: 0,
  teleopGridA2: 0,
  teleopGridA3: 0,
  teleopGridA4: 0,
  teleopGridA5: 0,
  teleopGridA6: 0,
  teleopGridA7: 0,
  teleopGridA8: 0,
  teleopGridA9: 0,
  teleopGridB1: 0,
  teleopGridB2: 0,
  teleopGridB3: 0,
  teleopGridB4: 0,
  teleopGridB5: 0,
  teleopGridB6: 0,
  teleopGridB7: 0,
  teleopGridB8: 0,
  teleopGridB9: 0,
  teleopGridC1: 0,
  teleopGridC2: 0,
  teleopGridC3: 0,
  teleopGridC4: 0,
  teleopGridC5: 0,
  teleopGridC6: 0,
  teleopGridC7: 0,
  teleopGridC8: 0,
  teleopGridC9: 0,
  nullifyData: false,
  scoutingTeamNumber: 0,
  matchNumber: 0
}

class DataCollectionPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

	gridA1Auto = event => {
		this.setState(prevstate => ({
			autoGridA1: 1
		}))
	}

	gridA2Auto = event => {
		this.setState(prevstate => ({
			autoGridA2: 1
		}))
	}

	gridA3Auto = event => {
		this.setState(prevstate => ({
			autoGridA3: 1
		}))
	}

	gridA4Auto = event => {
		this.setState(prevstate => ({
			autoGridA4: 1
		}))
	}

	gridA5Auto = event => {
		this.setState(prevstate => ({
			autoGridA5: 1
		}))
	}

	gridA6Auto = event => {
		this.setState(prevstate => ({
			autoGridA6: 1
		}))
	}

	gridA7Auto = event => {
		this.setState(prevstate => ({
			autoGridA7: 1
		}))
	}

	gridA8Auto = event => {
		this.setState(prevstate => ({
			autoGridA8: 1
		}))
	}

	gridA9Auto = event => {
		this.setState(prevstate => ({
			autoGridA9: 1
		}))
	}

	gridB1Auto = event => {
		this.setState(prevstate => ({
			autoGridB1: 1
		}))
	}

	gridB2Auto = event => {
		this.setState(prevstate => ({
			autoGridB2: 1
		}))
	}

	gridB3Auto = event => {
		this.setState(prevstate => ({
			autoGridB3: 1
		}))
	}

	gridB4Auto = event => {
		this.setState(prevstate => ({
			autoGridB4: 1
		}))
	}

	gridB5Auto = event => {
		this.setState(prevstate => ({
			autoGridB5: 1
		}))
	}

	gridB6Auto = event => {
		this.setState(prevstate => ({
			autoGridB6: 1
		}))
	}

	gridB7Auto = event => {
		this.setState(prevstate => ({
			autoGridB7: 1
		}))
	}

	gridB8Auto = event => {
		this.setState(prevstate => ({
			autoGridB8: 1
		}))
	}

	gridB9Auto = event => {
		this.setState(prevstate => ({
			autoGridB9: 1
		}))
	}

	gridC1Auto = event => {
		this.setState(prevstate => ({
			autoGridC1: 1
		}))
	}

	gridC2Auto = event => {
		this.setState(prevstate => ({
			autoGridC2: 1
		}))
	}

	gridC3Auto = event => {
		this.setState(prevstate => ({
			autoGridC3: 1
		}))
	}

	gridC4Auto = event => {
		this.setState(prevstate => ({
			autoGridC4: 1
		}))
	}

	gridC5Auto = event => {
		this.setState(prevstate => ({
			autoGridC5: 1
		}))
	}

	gridC6Auto = event => {
		this.setState(prevstate => ({
			autoGridC6: 1
		}))
	}

	gridC7Auto = event => {
		this.setState(prevstate => ({
			autoGridC7: 1
		}))
	}

	gridC8Auto = event => {
		this.setState(prevstate => ({
			autoGridC8: 1
		}))
	}

	gridC9Auto = event => {
		this.setState(prevstate => ({
			autoGridC9: 1
		}))
	}

	removeGridA1Auto = event => {
		this.setState(prevstate => ({
			autoGridA1: 0
		}))
	}

	removeGridA2Auto = event => {
		this.setState(prevstate => ({
			autoGridA2: 0
		}))
	}

	removeGridA3Auto = event => {
		this.setState(prevstate => ({
			autoGridA3: 0
		}))
	}

	removeGridA4Auto = event => {
		this.setState(prevstate => ({
			autoGridA4: 0
		}))
	}

	removeGridA5Auto = event => {
		this.setState(prevstate => ({
			autoGridA5: 0
		}))
	}

	removeGridA6Auto = event => {
		this.setState(prevstate => ({
			autoGridA6: 0
		}))
	}

	removeGridA7Auto = event => {
		this.setState(prevstate => ({
			autoGridA7: 0
		}))
	}

	removeGridA8Auto = event => {
		this.setState(prevstate => ({
			autoGridA8: 0
		}))
	}

	removeGridA9Auto = event => {
		this.setState(prevstate => ({
			autoGridA9: 0
		}))
	}

	removeGridB1Auto = event => {
		this.setState(prevstate => ({
			autoGridB1: 0
		}))
	}

	removeGridB2Auto = event => {
		this.setState(prevstate => ({
			autoGridB2: 0
		}))
	}

	removeGridB3Auto = event => {
		this.setState(prevstate => ({
			autoGridB3: 0
		}))
	}

	removeGridB4Auto = event => {
		this.setState(prevstate => ({
			autoGridB4: 0
		}))
	}

	removeGridB5Auto = event => {
		this.setState(prevstate => ({
			autoGridB5: 0
		}))
	}

	removeGridB6Auto = event => {
		this.setState(prevstate => ({
			autoGridB6: 0
		}))
	}

	removeGridB7Auto = event => {
		this.setState(prevstate => ({
			autoGridB7: 0
		}))
	}

	removeGridB8Auto = event => {
		this.setState(prevstate => ({
			autoGridB8: 0
		}))
	}

	removeGridB9Auto = event => {
		this.setState(prevstate => ({
			autoGridB9: 0
		}))
	}

	removeGridC1Auto = event => {
		this.setState(prevstate => ({
			autoGridC1: 0
		}))
	}

	removeGridC2Auto = event => {
		this.setState(prevstate => ({
			autoGridC2: 0
		}))
	}

	removeGridC3Auto = event => {
		this.setState(prevstate => ({
			autoGridC3: 0
		}))
	}

	removeGridC4Auto = event => {
		this.setState(prevstate => ({
			autoGridC4: 0
		}))
	}

	removeGridC5Auto = event => {
		this.setState(prevstate => ({
			autoGridC5: 0
		}))
	}

	removeGridC6Auto = event => {
		this.setState(prevstate => ({
			autoGridC6: 0
		}))
	}

	removeGridC7Auto = event => {
		this.setState(prevstate => ({
			autoGridC7: 0
		}))
	}

	removeGridC8Auto = event => {
		this.setState(prevstate => ({
			autoGridC8: 0
		}))
	}

	removeGridC9Auto = event => {
		this.setState(prevstate => ({
			autoGridC9: 0
		}))
	}

  	addPieceTopAuto = (event) => {
    this.setState(prevstate => ({ 
        autoGrid: prevstate.autoGrid + 1
    }));
	};

	removePieceTopAuto = (event) => {
		this.setState(prevstate => ({ 
			autoGrid: prevstate.autoGrid - 1
		}));
		}

  addPieceMiddleAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 1
  }));
	};

	removePieceMiddleAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid - 1
  }));
	};

  addPieceBottomAuto = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 1
  }));
	};

	removePieceBottomAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid - 1
  }));
	};

  addMobilityAuto = (event) => {
		this.setState({
			autoMobility: 3
		});
	};

  removeMobilityAuto = (event) => {
		this.setState({
			autoMobility: 0
		});
	};

	noDockAuto = (event) => {
		this.setState({
			autoChargeStation: 0
		})
	}

  dockedAuto = (event) => {
		this.setState({
			autoChargeStation: 8
		});
	};

  engagedAuto = (event) => {
		this.setState({
			autoChargeStation: 12
		});
	};

	gridA1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA1: 1
		}))
	}

	gridA2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA2: 1
		}))
	}

	gridA3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA3: 1
		}))
	}

	gridA4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA4: 1
		}))
	}

	gridA5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA5: 1
		}))
	}

	gridA6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA6: 1
		}))
	}

	gridA7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA7: 1
		}))
	}

	gridA8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA8: 1
		}))
	}

	gridA9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA9: 1
		}))
	}

	gridB1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB1: 1
		}))
	}

	gridB2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB2: 1
		}))
	}

	gridB3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB3: 1
		}))
	}

	gridB4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB4: 1
		}))
	}

	gridB5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB5: 1
		}))
	}

	gridB6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB6: 1
		}))
	}

	gridB7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB7: 1
		}))
	}

	gridB8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB8: 1
		}))
	}

	gridB9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB9: 1
		}))
	}

	gridC1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC1: 1
		}))
	}

	gridC2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC2: 1
		}))
	}

	gridC3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC3: 1
		}))
	}

	gridC4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC4: 1
		}))
	}

	gridC5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC5: 1
		}))
	}

	gridC6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC6: 1
		}))
	}

	gridC7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC7: 1
		}))
	}

	gridC8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC8: 1
		}))
	}

	gridC9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC9: 1
		}))
	}

	removeGridA1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA1: 0
		}))
	}

	removeGridA2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA2: 0
		}))
	}

	removeGridA3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA3: 0
		}))
	}

	removeGridA4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA4: 0
		}))
	}

	removeGridA5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA5: 0
		}))
	}

	removeGridA6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA6: 0
		}))
	}

	removeGridA7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA7: 0
		}))
	}

	removeGridA8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA8: 0
		}))
	}

	removeGridA9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA9: 0
		}))
	}

	removeGridB1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB1: 0
		}))
	}

	removeGridB2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB2: 0
		}))
	}

	removeGridB3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB3: 0
		}))
	}

	removeGridB4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB4: 0
		}))
	}

	removeGridB5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB5: 0
		}))
	}

	removeGridB6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB6: 0
		}))
	}

	removeGridB7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB7: 0
		}))
	}

	removeGridB8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB8: 0
		}))
	}

	removeGridB9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB9: 0
		}))
	}

	removeGridC1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC1: 0
		}))
	}

	removeGridC2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC2: 0
		}))
	}

	removeGridC3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC3: 0
		}))
	}

	removeGridC4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC4: 0
		}))
	}

	removeGridC5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC5: 0
		}))
	}

	removeGridC6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC6: 0
		}))
	}

	removeGridC7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC7: 0
		}))
	}

	removeGridC8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC8: 0
		}))
	}

	removeGridC9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC9: 0
		}))
	}

  addPieceTopTeleop = (event) => {
	this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 1
  	}));
  };

  removePieceTopTeleop = (event) => {
	this.setState(prevstate => ({ 
		teleopGrid: prevstate.teleopGrid - 1
	}));
	}

  addPieceMiddleTeleop = (event) => {
		this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 1
  }));
	};

	removePieceMiddleTeleop = (event) => {
		this.setState(prevstate => ({ 
			teleopGrid: prevstate.teleopGrid - 1
		}));
		}

  addPieceBottomTeleop = (event) => {
		this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 1
  }));
	};

	removePieceBottomTeleop = (event) => {
		this.setState(prevstate => ({ 
			teleopGrid: prevstate.teleopGrid - 1
		}));
		}

  addLink = (event) => {
		this.setState({
			[event.target.name]: this.state[event.target.name] + 5
		});
	};


	noDockTeleop = (event) => {
		this.setState({
			teleopChargeStation: 0
		});
	};

  parkedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 2
		});
	};

  dockedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 6
		});
	};

  engagedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 10
		});
	};

	nullify = event => {
		this.setState(prevstate => ({
			nullifyData: !prevstate.nullifyData	
		}))
	}

	submit = () => {
		alert('Data Submited!');
		const url = '/team/' + this.props.teamNumber;
		const config = {
			headers: {
				secretCode: this.props.secretCode
			}
		};
		const body = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			teamColor: this.props.teamColor,
			objectives: [
				{
					gamemode: 'AUTO',
					objective: 'MOBILITY_2023',
					count: this.state.autoMobility
				},
				{
					gamemode: 'AUTO',
					objective: 'CHARGE_STATION_2023',
					count: this.state.autoChargeStation
				},
				{
					gamemode: 'AUTO',
					objective: 'GRID_2023',
					count: this.state.autoGrid,
					list: [this.autoGridA1, this.autoGridA2, this.autoGridA3, this.autoGridA4, this.autoGridA5, this.autoGridA6, this.autoGridA7, this.autoGridA8, this.autoGridA9, this.autoGridB1, this.autoGridB2, this.autoGridB3, this.autoGridB4, this.autoGridB5, this.autoGridB6, this.autoGridB7, this.autoGridB8, this.autoGridB9, this.autoGridC1, this.autoGridC2, this.autoGridC3, this.autoGridC4, this.autoGridC5, this.autoGridC6, this.autoGridC7, this.autoGridC8, this.autoGridC9]
				},
				{
					gamemode: 'TELEOP',
					objective: 'CHARGE_STATION_2023',
					count: this.state.teleopChargeStation
				},
				{
					gamemode: 'TELEOP',
					objective: 'GRID_2023',
					count: this.state.teleopGrid,
					list: [this.teleopGridA1, this.teleopGridA2, this.teleopGridA3, this.teleopGridA4, this.teleopGridA5, this.teleopGridA6, this.teleopGridA7, this.teleopGridA8, this.teleopGridA9, this.teleopGridB1, this.teleopGridB2, this.teleopGridB3, this.teleopGridB4, this.teleopGridB5, this.teleopGridB6, this.teleopGridB7, this.teleopGridB8, this.teleopGridB9, this.teleopGridC1, this.teleopGridC2, this.teleopGridC3, this.teleopGridC4, this.teleopGridC5, this.teleopGridC6, this.teleopGridC7, this.teleopGridC8, this.teleopGridC9]
				}


			]
		};
		GearscoutService.post(url, body, config);

		this.setState(INITIAL_STATE);
	};


    render(props) {
        return (
          <div className='background'>
			<div>{console.log("Robot Number:\t\t", this.state.scoutingTeamNumber)}</div>
			<div>{console.log("Match Number:\t\t", this.state.matchNumber)}</div>
			<div>
				<div>{console.log("Nullify Data:\t\t", this.state.nullifyData)}</div>
				<div>{console.log("A1 Auto:\t\t", this.state.autoGridA1)}</div>
				<div>{console.log("A2 Auto:\t\t", this.state.autoGridA2)}</div>
				<div>{console.log("A3 Auto:\t\t", this.state.autoGridA3)}</div>
				<div>{console.log("A4 Auto:\t\t", this.state.autoGridA4)}</div>
				<div>{console.log("A5 Auto:\t\t", this.state.autoGridA5)}</div>
				<div>{console.log("A6 Auto:\t\t", this.state.autoGridA6)}</div>
				<div>{console.log("A7 Auto:\t\t", this.state.autoGridA7)}</div>
				<div>{console.log("A8 Auto:\t\t", this.state.autoGridA8)}</div>
				<div>{console.log("A9 Auto:\t\t", this.state.autoGridA9)}</div>
				<div>{console.log("B1 Auto:\t\t", this.state.autoGridB1)}</div>
				<div>{console.log("B2 Auto:\t\t", this.state.autoGridB2)}</div>
				<div>{console.log("B3 Auto:\t\t", this.state.autoGridB3)}</div>
				<div>{console.log("B4 Auto:\t\t", this.state.autoGridB4)}</div>
				<div>{console.log("B5 Auto:\t\t", this.state.autoGridB5)}</div>
				<div>{console.log("B6 Auto:\t\t", this.state.autoGridB6)}</div>
				<div>{console.log("B7 Auto:\t\t", this.state.autoGridB7)}</div>
				<div>{console.log("B8 Auto:\t\t", this.state.autoGridB8)}</div>
				<div>{console.log("B9 Auto:\t\t", this.state.autoGridB9)}</div>
				<div>{console.log("C1 Auto:\t\t", this.state.autoGridC1)}</div>
				<div>{console.log("C2 Auto:\t\t", this.state.autoGridC2)}</div>
				<div>{console.log("C3 Auto:\t\t", this.state.autoGridC3)}</div>
				<div>{console.log("C4 Auto:\t\t", this.state.autoGridC4)}</div>
				<div>{console.log("C5 Auto:\t\t", this.state.autoGridC5)}</div>
				<div>{console.log("C6 Auto:\t\t", this.state.autoGridC6)}</div>
				<div>{console.log("C7 Auto:\t\t", this.state.autoGridC7)}</div>
				<div>{console.log("C8 Auto:\t\t", this.state.autoGridC8)}</div>
				<div>{console.log("C9 Auto:\t\t", this.state.autoGridC9)}</div>
				<div>{console.log("Auto Grid:\t\t", this.state.autoGrid)} </div>
				<div>{console.log("Auto Mobility:\t\t", this.state.autoMobility)} </div>
				<div>{console.log("Auto Charge Station:\t", this.state.autoChargeStation)} </div>
			</div>
  			 
			 <div>
				<div>{console.log("A1 Teleop:\t\t", this.state.teleopGridA1)}</div>
				<div>{console.log("A2 Teleop:\t\t", this.state.teleopGridA2)}</div>
				<div>{console.log("A3 Teleop:\t\t", this.state.teleopGridA3)}</div>
				<div>{console.log("A4 Teleop:\t\t", this.state.teleopGridA4)}</div>
				<div>{console.log("A5 Teleop:\t\t", this.state.teleopGridA5)}</div>
				<div>{console.log("A6 Teleop:\t\t", this.state.teleopGridA6)}</div>
				<div>{console.log("A7 Teleop:\t\t", this.state.teleopGridA7)}</div>
				<div>{console.log("A8 Teleop:\t\t", this.state.teleopGridA8)}</div>
				<div>{console.log("A9 Teleop:\t\t", this.state.teleopGridA9)}</div>
				<div>{console.log("B1 Teleop:\t\t", this.state.teleopGridB1)}</div>
				<div>{console.log("B2 Teleop:\t\t", this.state.teleopGridB2)}</div>
				<div>{console.log("B3 Teleop:\t\t", this.state.teleopGridB3)}</div>
				<div>{console.log("B4 Teleop:\t\t", this.state.teleopGridB4)}</div>
				<div>{console.log("B5 Teleop:\t\t", this.state.teleopGridB5)}</div>
				<div>{console.log("B6 Teleop:\t\t", this.state.teleopGridB6)}</div>
				<div>{console.log("B7 Teleop:\t\t", this.state.teleopGridB7)}</div>
				<div>{console.log("B8 Teleop:\t\t", this.state.teleopGridB8)}</div>
				<div>{console.log("B9 Teleop:\t\t", this.state.teleopGridB9)}</div>
				<div>{console.log("C1 Teleop:\t\t", this.state.teleopGridC1)}</div>
				<div>{console.log("C2 Teleop:\t\t", this.state.teleopGridC2)}</div>
				<div>{console.log("C3 Teleop:\t\t", this.state.teleopGridC3)}</div>
				<div>{console.log("C4 Teleop:\t\t", this.state.teleopGridC4)}</div>
				<div>{console.log("C5 Teleop:\t\t", this.state.teleopGridC5)}</div>
				<div>{console.log("C6 Teleop:\t\t", this.state.teleopGridC6)}</div>
				<div>{console.log("C7 Teleop:\t\t", this.state.teleopGridC7)}</div>
				<div>{console.log("C8 Teleop:\t\t", this.state.teleopGridC8)}</div>
				<div>{console.log("C9 Teleop:\t\t", this.state.teleopGridC9)}</div>
				<div>{console.log("Teleop Grid:\t\t", this.state.teleopGrid)} </div>
				<div>{console.log("Teleop Charge Station:\t", this.state.teleopChargeStation)} </div>
			 </div>
			 
            <MatchInfo 
			nullify={this.nullify} 
			scoutingTeamNumber={this.state.scoutingTeamNumber}
			matchNumber={this.state.matchNumber} />
            <Auto
			gridA1Auto={this.gridA1Auto}
			gridA2Auto={this.gridA2Auto}
			gridA3Auto={this.gridA3Auto}
			gridA4Auto={this.gridA4Auto}
			gridA5Auto={this.gridA5Auto}
			gridA6Auto={this.gridA6Auto}
			gridA7Auto={this.gridA7Auto}
			gridA8Auto={this.gridA8Auto}
			gridA9Auto={this.gridA9Auto}
			gridB1Auto={this.gridB1Auto}
			gridB2Auto={this.gridB2Auto}
			gridB3Auto={this.gridB3Auto}
			gridB4Auto={this.gridB4Auto}
			gridB5Auto={this.gridB5Auto}
			gridB6Auto={this.gridB6Auto}
			gridB7Auto={this.gridB7Auto}
			gridB8Auto={this.gridB8Auto}
			gridB9Auto={this.gridB9Auto}
			gridC1Auto={this.gridC1Auto}
			gridC2Auto={this.gridC2Auto}
			gridC3Auto={this.gridC3Auto}
			gridC4Auto={this.gridC4Auto}
			gridC5Auto={this.gridC5Auto}
			gridC6Auto={this.gridC6Auto}
			gridC7Auto={this.gridC7Auto}
			gridC8Auto={this.gridC8Auto}
			gridC9Auto={this.gridC9Auto}
			removeGridA1Auto={this.removeGridA1Auto}
			removeGridA2Auto={this.removeGridA2Auto}
			removeGridA3Auto={this.removeGridA3Auto}
			removeGridA4Auto={this.removeGridA4Auto}
			removeGridA5Auto={this.removeGridA5Auto}
			removeGridA6Auto={this.removeGridA6Auto}
			removeGridA7Auto={this.removeGridA7Auto}
			removeGridA8Auto={this.removeGridA8Auto}
			removeGridA9Auto={this.removeGridA9Auto}
			removeGridB1Auto={this.removeGridB1Auto}
			removeGridB2Auto={this.removeGridB2Auto}
			removeGridB3Auto={this.removeGridB3Auto}
			removeGridB4Auto={this.removeGridB4Auto}
			removeGridB5Auto={this.removeGridB5Auto}
			removeGridB6Auto={this.removeGridB6Auto}
			removeGridB7Auto={this.removeGridB7Auto}
			removeGridB8Auto={this.removeGridB8Auto}
			removeGridB9Auto={this.removeGridB9Auto}
			removeGridC1Auto={this.removeGridC1Auto}
			removeGridC2Auto={this.removeGridC2Auto}
			removeGridC3Auto={this.removeGridC3Auto}
			removeGridC4Auto={this.removeGridC4Auto}
			removeGridC5Auto={this.removeGridC5Auto}
			removeGridC6Auto={this.removeGridC6Auto}
			removeGridC7Auto={this.removeGridC7Auto}
			removeGridC8Auto={this.removeGridC8Auto}
			removeGridC9Auto={this.removeGridC9Auto}
			addPieceTopAuto={this.addPieceTopAuto}
			removePieceTopAuto={this.removePieceTopAuto}
			addPieceMiddleAuto={this.addPieceMiddleAuto}
			removePieceMiddleAuto={this.removePieceMiddleAuto}
			addPieceBottomAuto={this.addPieceBottomAuto}
			removePieceBottomAuto={this.removePieceBottomAuto}
  			addMobilityAuto={this.addMobilityAuto}
 			removeMobilityAuto={this.removeMobilityAuto}
			noDockAuto={this.noDockAuto}
			dockedAuto={this.dockedAuto}
			engagedAuto={this.engagedAuto}/>
            <Teleop
			gridA1Teleop={this.gridA1Teleop}
			gridA2Teleop={this.gridA2Teleop}
			gridA3Teleop={this.gridA3Teleop}
			gridA4Teleop={this.gridA4Teleop}
			gridA5Teleop={this.gridA5Teleop}
			gridA6Teleop={this.gridA6Teleop}
			gridA7Teleop={this.gridA7Teleop}
			gridA8Teleop={this.gridA8Teleop}
			gridA9Teleop={this.gridA9Teleop}
			gridB1Teleop={this.gridB1Teleop}
			gridB2Teleop={this.gridB2Teleop}
			gridB3Teleop={this.gridB3Teleop}
			gridB4Teleop={this.gridB4Teleop}
			gridB5Teleop={this.gridB5Teleop}
			gridB6Teleop={this.gridB6Teleop}
			gridB7Teleop={this.gridB7Teleop}
			gridB8Teleop={this.gridB8Teleop}
			gridB9Teleop={this.gridB9Teleop}
			gridC1Teleop={this.gridC1Teleop}
			gridC2Teleop={this.gridC2Teleop}
			gridC3Teleop={this.gridC3Teleop}
			gridC4Teleop={this.gridC4Teleop}
			gridC5Teleop={this.gridC5Teleop}
			gridC6Teleop={this.gridC6Teleop}
			gridC7Teleop={this.gridC7Teleop}
			gridC8Teleop={this.gridC8Teleop}
			gridC9Teleop={this.gridC9Teleop}
			removeGridA1Teleop={this.removeGridA1Teleop}
			removeGridA2Teleop={this.removeGridA2Teleop}
			removeGridA3Teleop={this.removeGridA3Teleop}
			removeGridA4Teleop={this.removeGridA4Teleop}
			removeGridA5Teleop={this.removeGridA5Teleop}
			removeGridA6Teleop={this.removeGridA6Teleop}
			removeGridA7Teleop={this.removeGridA7Teleop}
			removeGridA8Teleop={this.removeGridA8Teleop}
			removeGridA9Teleop={this.removeGridA9Teleop}
			removeGridB1Teleop={this.removeGridB1Teleop}
			removeGridB2Teleop={this.removeGridB2Teleop}
			removeGridB3Teleop={this.removeGridB3Teleop}
			removeGridB4Teleop={this.removeGridB4Teleop}
			removeGridB5Teleop={this.removeGridB5Teleop}
			removeGridB6Teleop={this.removeGridB6Teleop}
			removeGridB7Teleop={this.removeGridB7Teleop}
			removeGridB8Teleop={this.removeGridB8Teleop}
			removeGridB9Teleop={this.removeGridB9Teleop}
			removeGridC1Teleop={this.removeGridC1Teleop}
			removeGridC2Teleop={this.removeGridC2Teleop}
			removeGridC3Teleop={this.removeGridC3Teleop}
			removeGridC4Teleop={this.removeGridC4Teleop}
			removeGridC5Teleop={this.removeGridC5Teleop}
			removeGridC6Teleop={this.removeGridC6Teleop}
			removeGridC7Teleop={this.removeGridC7Teleop}
			removeGridC8Teleop={this.removeGridC8Teleop}
			removeGridC9Teleop={this.removeGridC9Teleop}
			addPieceTopTeleop={this.addPieceTopTeleop}
			removePieceTopTeleop={this.removePieceTopTeleop}
			addPieceMiddleTeleop={this.addPieceMiddleTeleop}
			removePieceMiddleTeleop={this.removePieceMiddleTeleop}
			addPieceBottomTeleop={this.addPieceBottomTeleop}
			removePieceBottomTeleop={this.removePieceBottomTeleop}
			noDockTeleop={this.noDockTeleop}
			parkedTeleop={this.parkedTeleop}
			dockedTeleop={this.dockedTeleop}
			engagedTeleop={this.engagedTeleop}
			/>
            <div className='submit'>
              <Button sx={{ m: 0.5 }} variant='outlined' className='submit' href='/'>Back</Button>
              <Button sx={{ m: 0.5 }} variant='contained' className='submit' onClick={this.submit}>Submit</Button>
            </div>
          </div>
        );
      }
}
export default DataCollectionPage;