import React from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const CardThree = (props) => (
    <div className="card-3-container">
        <Card className="profile-card">
       

            <div className="cover-image-container">
                <div className="profile-image-container">
                    <Avatar style={{ width: "inherit", height: "inherit" }} alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" />
                </div>
            </div>

            <Grid style={{ margin: '10px', display: 'flex', flexDirection: "column", justifyContent: "space-around" }} item xs={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: "10px" }}>


                <h5 style={{ marginRight: '4px' }} className="user-type">User Type </h5>
                <h5 className="company-name">hosted by : {props.company}</h5>



            </div>
            <br />
                <br />
            <div style={{ margin: '2px auto' }}>
                <h2>{props.title}</h2>
            </div>
       
                
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="p" component="p" style={{ textAlign: 'center', display: "flex" , position:"flex-start", borderBottom:"1px solid grey" }}>
                            Industry : <br />
                       

                        {props.industry.map(stage => {
                            return (<Chip
                                size='xs'
                                margin="5px"
                                style={{ textAlign: 'center' }}
                                avatar={<Avatar alt="Natacha" src="https://visualpharm.com/assets/64/Location-595b40b85ba036ed117dbe2b.svg" />}
                                label={stage}
                            // onDelete={handleDelete}
                            //  className={classes.chip}
                            />
                            )
                        })}

                    </Typography>
                    </Grid>

                    <Grid item xs={12}>
                    <Typography gutterBottom variant="p" component="p" style={{ display: "flex", borderBottom: "1px solid grey" }}>
                            Stage : <br />
          

                        {props.stage.map(stage => {
                            return (<Chip
                                margin="2px"
                                style={{ textAlign: 'center' }}
                                avatar={<Avatar alt="Natacha" src="https://visualpharm.com/assets/64/Location-595b40b85ba036ed117dbe2b.svg" />}
                                label={stage}
                            // onDelete={handleDelete}
                            //  className={classes.chip}
                            />
                            )
                        })}
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography gutterBottom variant="p" component="p" style={{ display: "flex"}}>
                        Location : {props.location} <br />
                 

                        {/* {props.stage.map(stage => {
                            return (<Chip
                                margin="2px"
                                avatar={<Avatar alt="Natacha" src="https://visualpharm.com/assets/64/Location-595b40b85ba036ed117dbe2b.svg" />}
                                label={stage}
                            // onDelete={handleDelete}
                            //  className={classes.chip}
                            />
                            )
                        })} */}

                    </Typography>

                    <Grid style={{ display: 'flex', justifyContent: 'space-evenly', textAlign: 'center', margin: '2px' }}>
                        <div>
                            <h5 style={{ fontSize: '12px' }}>Start Date</h5>
                              <p style={{ fontSize: '11px' }}> {moment(props.startDate).format('MMMM Do YYYY, h:mma')} </p>
                            
                        </div>
                        <div>
                            <h5 style={{ fontSize: '12px' }}>End Date</h5>
                            <p style={{ fontSize: '11px' }}> {moment(props.endDate).format('MMMM Do YYYY, h:mma')}</p>
                        </div>

                    </Grid>
                    <div style={{ overFlow: "scroll", border: '2px solid grey' }}>
                        <p > {props.description} </p>
                        
                    </div>


                    </Grid>
            
              



                </Grid>


     

            <br />
           
            <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button style={{ margin: "2px auto" }} size="small" color="primary">
                        Learn More
        </Button>
                {props.deadline ? <p style={{ fontSize: '11px', margin:'5px'}}> Deadline : {moment(props.deadline).format('MMMM Do YYYY, h:mma')} </p> : null}
        </div >


            {/* </div> */}
        </Card>
       
    </div>

)



export default CardThree;