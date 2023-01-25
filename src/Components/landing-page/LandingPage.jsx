import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Select from '@mui/material/Select';

import './LandingPage.scss';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamNumber: '',
            eventCode: '',
            secretCode: '',
            scouterName: '',
        };
    }

    handleClick = (event) => {
        localStorage.setItem('teamNumber', this.state.teamNumber.toString());
        localStorage.setItem('eventCode', this.state.eventCode.toString());
        localStorage.setItem('secretCode', this.state.secretCode.toString());
        localStorage.setItem('scouterName', this.state.scouterName.toString());
        this.props.parentCallback(event, this.state.teamNumber, this.state.eventCode, this.state.secretCode, this.state.scouterName);
    };

    handleChange = (event) => {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    componentDidMount() {
        const teamNumber = localStorage.getItem('teamNumber') ?? '';
        const eventCode = localStorage.getItem('eventCode') ?? '';
        const secretCode = localStorage.getItem('secretCode') ?? '';
        const scouterName = localStorage.getItem('scouterName') ?? '';

        this.setState(({
            teamNumber: teamNumber,
            eventCode: eventCode,
            secretCode: secretCode,
            scouterName: scouterName
        }))
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='header'>
                    <div className='left'>
                        <img src='2338-logo.png' alt="2338 logo" height='100rem' />
                    </div>
                    <h1 className='Title'>2338 Gear It Forward</h1>
                    <span>
                        <Select>
                        </Select>
                    </span> 
                </div>

                <h1 className="login-title">Sign In:</h1>
                <div className="landingpage-forms">
                    <TextField
                        name="teamNumber"
                        id="outlined-basic"
                        label="Your Team Number"
                        variant="filled"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.teamNumber}
                        InputProp={{
                            startAdorment: <InputAdornment position="start">#</InputAdornment>
                        }}
                        inputProps={{
                                min: 0,
                                max: 9999
                        }}
                    />
                </div>

                <div className="landingpage-forms">
                        <TextField
                                name="eventCode"
                                id="outlined-basic"
                                label="Event Code"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.eventCode}
                                placeholder="EVENT CODE"
                                inputProps={{
                                    maxlength: 32
                                }}
                        />
                </div>
                
                <div className="landingpage-forms">
                        <TextField
                                name="scouterName"
                                id="outlined-basic"
                                label="Scouter Name"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.scouterName}
                                placeholder="SCOUTER NAME"
                                inputProps={{
                                    maxLength: 32
                                }}
                        />
                </div>
                <div className="landingpage-forms">
                        <TextField
                                name="secretCode"
                                id="outlined-basic"
                                label="Secret Code"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.secretCode}
                                placeholder="SCOUTER NAME"
                                inputProps={{
                                    maxLength: 32
                                }}
                        />
                            </div>

                <div className="points-landingpage">*Enter team specific password to store data*</div>
                <div className="points-landingpage">*This code will be used to view your analytics*</div>
                <div className="points-landingpage">*Make sure all scouters from the same team use the same code*</div>
                <div>
                    <Button
                            name="red"
                            className="buttons"
                            type="button"
                            variant="contained"
                            size="medium"
                            style={{backgroundColor: "red", margin: 5, textTransform: 'capitalize'}}
                            onClick={this.handleClick}
                        >
                            Red Alliance
                        </Button>
                    <Button
                            name="blue"
                            className="buttons"
                            type="button"
                            variant="contained"
                            size="medium"
                            style={{backgroundColor: "blue", margin: 5, textTransform: 'capitalize'}}
                            onClick={this.handleClick}
                        >
                            Blue Alliance
                        </Button>
                    </div>
                    <Button
                        name="submit"
                        className="button"
                        type="button"
                        variant="contained"
                        size="medium"
                        style={{textTransform: 'capitalize'}}
                        onClick={this.handleClick}
                        href="/data"
                    >
                        Submit
                    </Button>
            </div>        
        )
    }

}
export default LandingPage;