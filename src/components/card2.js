import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { FormControl, Input, Button, TextField, Select, Chip, MenuItem, Checkbox, ListItemText, InputLabel, InputAdornment} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
// import UserOutput from './UserOutput';
//date
import moment from 'moment';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// import DatePicker from "react-datepicker";


import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import "react-datepicker/dist/react-datepicker.css";
import Card3 from './card3';

const names = ['finance', 'health', 'canabbis', 'fitness', 'tech'];
const stages = ['Ontario Place', 'Innovation Centre', 'La Maison', 'Roger Centre'];
const countries = ['France', 'Canada', 'USA', 'England', 'China'];



export default class CardTwo extends Component {

  state = {
    //dropdown
    company: "",
    opportunity: "",
    //text
    opportunityName: "Title",
    description: "",
    urlWebsite: "",
    backgroundImage: "https://images.unsplash.com/photo-1464647894560-76b09dcee6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //multiselect
    industryValues: [],
    companyStage: [],
    companyModel: [],
    countries: [],
    financing: "",
    financeAmount: Number,
    //date picker
    //Events
    startDate: new Date(),
    endDate: new Date(),

    startTime: new Date('h:mm:ss'),
    endTime: new Date('h:mm:ss'),

    location: "",
    // Pitch Competitions
    prize: "",
    dateDeadline: null,
    // Grant Amount
    grantAmount: Number,
    //  Innovation Challenges
    objective: "",
    show: false,
    loading: false,
    amount: Number,
    // user: [],
    labelWidth: 0,
    gmapsLoaded: false,
  }

  // componentWillMount() {
  //   this.setState({
  //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef.current).offsetWidth,
  //   });
  // }

  // componentDidMount() {
  //   window.initMap = this.initMap
  //   const gmapScriptEl = document.createElement(`script`)
  //   gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyChdxF5C-8-S_ox8kMQOqVYSr0rFl2mNho&libraries=places&callback=initMap`
  //   document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  // }


  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    })
  }



  handleDateSChange = date => {
    this.setState({ startDate: date });
  };


  handleDateEChange = date => {
    this.setState({ endDate: date });
  };


  handleDeadline = date => {
    this.setState({ dateDeadline: date });
  };

  // handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error));
  // }

  handleLocationChange = address => {
    this.setState({ location: address });

  }


  render() {


    const { classes } = this.props;

    const grid = {
      style : {
        display:'flex',
        margin: '5px'

      }
    }
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    return (
      <>
        <div className="card-2-container">
        <Card className="create-opportunity-card">
          <div className="create-opportunity-heading">
            <p className="heading">Create Opportunity</p>
          </div>
          <div className="create-opportunity-message">
            <p className="message">Improve your funnel! This will be displayed to our global network of users in order to make them aware of opportunities.</p>
          </div>
          <div className="create-opportunity-form-container">
            {/* <div className="form-row-1">
              <form action="" className="form"> */}
                <FormControl style={{ width: '100%', margin: "5px" }}>
                  <InputLabel ref={this.InputLabelRef} htmlFor="company-simple">Affiliated Company</InputLabel>
                  <Select
                    onChange={this.handleChange.bind(this)}
                    value={this.state.company}
                    name="company"
                    inputProps={{
                      id: 'company-simple',
                      // name :'opportunity'
                    }}
                  >
                    <MenuItem value="none">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Rogers">Rogers</MenuItem>
                    <MenuItem value="Bell">Bell</MenuItem>
                    <MenuItem value="Freedom">Freedom</MenuItem>
                    <MenuItem value="Virgin">Virgin</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{ width: '100%', margin: '5px' }}>
                  <InputLabel ref={this.InputLabelRef} htmlFor="opportunity-simple">Opportunity Type</InputLabel>
                  <Select

                    onChange={this.handleChange.bind(this)}
                    value={this.state.opportunity}
                    name="opportunity"
                    inputProps={{
                      id: "opportunity-simple",
                      // name :'opportunity'
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Events">Events</MenuItem>
                    <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
                    <MenuItem value="Innovation Challenges">Innovation Challenges</MenuItem>
                    <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
                    <MenuItem value="Grants">Grants</MenuItem>
                    <MenuItem value="Hackathons">Hackathons</MenuItem>

                  </Select>
                </FormControl>
    
              {/* </form>
            </div> */}

            <div className="form-row-2">
              <form action="" className="form">
                <FormControl style={{width:'100%'}}>
                  <TextField

                    id="filled-dense"
                    label="Opportunity Name"
                    name="opportunityName"
                    // className={classes.FormControl}
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                  />
                </FormControl>
              </form>
            </div>

              <div className="form-row-2">
                <form action="" className="form">
                  <FormControl style={{ width: '100%' }}>
                    <TextField

                      id="filled-dense"
                      label="Location"
                      name="location"
                      // className={classes.FormControl}
                      onChange={this.handleChange.bind(this)}
                      margin="dense"
                      variant="filled"
                    />
                  </FormControl>
                </form>
              </div>

            <div className="form-row-3">
              <form action="" className="form">
                <TextField
                style={{width:"100%"}}
                  required
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  label="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange.bind(this)}
                  // className={classes.textField}
                  margin="normal"
                  // helperText="hello"
                  variant="outlined"  
                 inputProps={{ maxLength: 200 }}
                />
              </form>
            </div>
            <div className="form-row-4">
              <form action="" className="form">
                <FormControl style={{ width: '100%'}}>
                  <TextField

                    name="urlWebsite"
                    onChange={this.handleChange.bind(this)}
                    type="url" placeholder="background Img URL" required
                    id="filled-dense"
                    label="Website-URL"
                    
                    // className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="filled"
                  />
                </FormControl>
              </form>
            </div>
            <div className="form-row-5">
              <form action="" className="form">
                <div className="background-photo-container">
                  <label htmlFor="background-photo">Background Photo</label>
                  <input type="file" id="background-photo" />
                </div>
              </form>
            </div>
         
                <FormControl style={{ width: '100%', margin: "5px"}}>
                  <InputLabel htmlFor="select-multiple-checkbox" > • Industry</InputLabel>
                  <Select
                    multiple
                    name="industryValues"
                    value={this.state.industryValues}
                    onChange={this.handleChange.bind(this)}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {names.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={this.state.industryValues.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl style={{ width: '100%', margin: "5px" }}>
                  <InputLabel htmlFor="select-multiple-checkbox" > • Stages</InputLabel>
                  <Select
                    multiple
                    name="companyStage"
                    value={this.state.companyStage}
                    onChange={this.handleChange.bind(this)}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {stages.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={this.state.companyStage.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
            

   

            <div className="form-row-6">
              <form action="" className="form">
       
                <FormControl style={{ width: '100%', margin: "5px" }}>
                  <InputLabel htmlFor="select-multiple-checkbox" > • Company Model</InputLabel>
                  <Select
                    multiple
                    name="companyModel"
                    value={this.state.companyModel}
                    onChange={this.handleChange.bind(this)}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {stages.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={this.state.companyModel.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl style={{ width: '100%', margin: "5px" }}>
                  <InputLabel htmlFor="select-multiple-checkbox" > • Countries </InputLabel>
                  <Select
                    multiple
                    name="countries"
                    value={this.state.countries}
                    onChange={this.handleChange.bind(this)}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {countries.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={this.state.countries.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </div>

            <div className="form-row-6">
              <form action="" className="form">
                <FormControl style={{ width: '50%', margin: "5px" }}>
                  <InputLabel ref={this.InputLabelRef} htmlFor="company-simple"> • Financing</InputLabel>
                  <Select
                    onChange={this.handleChange.bind(this)}
                    value={this.state.financing}
                    name="financing"
                    inputProps={{
                      id: 'company-simple',
                      // name :'opportunity'
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Loans">Debt Financing</MenuItem>
                    <MenuItem value="Partnerships">Equity Financing</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{ width: '50%', margin: "5px" }}>
                  <InputLabel style={{color:'black'}} htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    value={this.state.financeAmount}
                    onChange={this.handleChange.bind(this)}
                    type="number" name="financeAmount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                </FormControl>
              </form>
            </div>
       
                {(() => {
                  switch (this.state.opportunity) {
                    case "Events":
                      return (
                        <>
                          {/* <FormControl > */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                              <Grid container justify="space-around">
                                 
                                    <DatePicker
                                    
                                      margin="normal"
                                      label="Start Date"
                                      value={this.state.startDate}
                                      onChange={this.handleDateSChange.bind(this)}
                              
                                    />

                                    <DatePicker
                              
                                      margin="normal"
                                      label="End Date"
                                     value={this.state.endDate}
                                      onChange={this.handleDateEChange}
                                    
                                    />
                                 </Grid>
                                </MuiPickersUtilsProvider>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container justify="space-around">
                                  
                                 
                                    <TimePicker
                                      margin="normal"
                                      label="Start Time"
                                      value={this.state.startDate}
                                      onChange={this.handleDateSChange.bind(this)}
                                    />

                                    <TimePicker
                                      margin="normal"
                                      label="End Time"
                                      value={this.state.endDate}
                                      onChange={this.handleDateEChange}
                                    />
                                  </Grid>
                                </MuiPickersUtilsProvider>
                          




                          <br />
                          <br />
                          <br />
                          <br />
                          <br />

                          
                      
                        </>

                      )

                    case "Equity Financing":
                      return

                    case "Pitch Competitions":
                      return (
                        <>
                          <div className="form-row-1">
                            <form action="" className="form">
                              <FormControl style={{ width: '100%', margin: "5px" }}>
                          <TextField
                            id="filled-dense"
                            label="Pitch prize (text area)"
                            onChange={this.handleChange.bind(this)}
                            margin="dense"
                            variant="filled"
                            name="prize"
                          />
                          </FormControl>
                          </form>
                          </div>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                              <DatePicker
                                margin="normal"
                                label="Deadline day"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"
                              />
                              <TimePicker
                                margin="normal"
                                label="Deadline time"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"

                              />
                            </Grid>
                          </MuiPickersUtilsProvider>


                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                              <DatePicker
                                margin="normal"
                                label="Start Date"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                                name="deadline"

                              />

                              <DatePicker
                                margin="normal"
                                label="End Date"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />
                           
                            </Grid>

                       
                          </MuiPickersUtilsProvider>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                        
                              <TimePicker
                                margin="normal"
                                label="Start Time"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                              />
                              <TimePicker
                                margin="normal"
                                label="End Time"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>

                        </>



                      )
                    case "Innovation Challenges":
                      return (
                        <>
                          <TextField
                          style={{width:"100%"}}
                            id="filled-dense"
                            label="Innovation Prize (text area)"
                            onChange={this.handleChange.bind(this)}
                            margin="dense"
                            variant="filled"
                            name="prize"
                          />

                          <TextField
                            style={{ width: "100%" }}
                            id="filled-dense"
                            label="Objective (text area)"
                            onChange={this.handleChange.bind(this)}
                            margin="dense"
                            variant="filled"
                            name="objective"
                          />
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                              <DatePicker
                                margin="normal"
                                label="Start Date"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                                name="deadline"

                              />

                              <DatePicker
                                margin="normal"
                                label="End Date"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />

                            </Grid>


                          </MuiPickersUtilsProvider>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">

                              <TimePicker
                                margin="normal"
                                label="Start Time"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                              />
                              <TimePicker
                                margin="normal"
                                label="End Time"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>

                        </>

                      )

                    case "Grants":
                      return (

                        <>
                   
                       
                          <FormControl style={{ width: 'inherit', margin: "0 auto" }}>
                          <InputLabel style={{ color: 'black' }} htmlFor="adornment-amount"> Grant Amount</InputLabel>
                          <Input
                            id="adornment-amount"
                            margin="normal"
                            value={this.state.grantAmount}
                            onChange={this.handleChange.bind(this)}
                            type="number" name="grantAmount"
                            min="1"
                            size="100"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                          />     
                          </FormControl>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container style={{alignSelf:"center"}} justify="space-around">
                              <DatePicker
                                
                                margin="normal"
                                label="Deadline day"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"
                              />
                              <TimePicker
                                margin="normal"
                                label="Deadline time"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"

                              />
                            </Grid>
                          </MuiPickersUtilsProvider>

                        </>

                      )
                    case "Hackathons":
                      return (
                        <>
                          <TextField
                            style={{width:'100%'}}
                            id="filled-dense"
                            label="Hackathon Prize"
                            onChange={this.handleChange.bind(this)}
                            margin="dense"
                            variant="filled"
                            name="prize"
                          />

                          <TextField
                            style={{ width: '100%' }}
                            id="filled-dense"
                            label=" Hackathon Objective"
                            onChange={this.handleChange.bind(this)}
                            margin="dense"
                            variant="filled"
                            name="objective"
                          />

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container  justify="space-around">
                              <DatePicker
                                margin="normal"
                                label="Deadline day"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"
                              />
                              <TimePicker
                                margin="normal"
                                label="Deadline time"
                                value={this.state.dateDeadline}
                                onChange={this.handleDeadline.bind(this)}
                                name="dateDeadline"

                              />
                            </Grid>
                          </MuiPickersUtilsProvider>


                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container  justify="space-around">
                              <DatePicker
                                margin="normal"
                                label="Start Date"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                                name="deadline"
                              />
                              <DatePicker
                                margin="normal"
                                label="End Date"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />
                         
                            </Grid>
                          </MuiPickersUtilsProvider>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container  justify="space-around">
                              <TimePicker
                                margin="normal"
                                label="Start Time"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                              />
                              <TimePicker
                                margin="normal"
                                label="End Time"
                                value={this.state.endDate}
                                onChange={this.handleDateEChange}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>

                        </>

                      )
                    default:
                      return null;
                  }
                })()}

            <div className="apply-btn-container">
              <div className="btn-container">
                <button className="apply-btn">Submit</button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card3
          company={this.state.company}
          opportunity={this.state.opportunity}

          title={this.state.opportunityName}
          description={this.state.description}
          website={this.state.urlWebsite}
          backgroundImg={this.state.backgroundImage}

          industry={this.state.industryValues}
          stage={this.state.companyStage}
          value={this.state.description}


          startDate={this.state.startDate}
          endDate={this.state.endDate}
          location={this.state.location}

          deadline={this.state.dateDeadline}
      
      
      />

      </>
    )
  }
}
