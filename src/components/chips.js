import React, { Component } from 'react';
import classNames from 'classnames';
// import { makeStyles, useTheme } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';



import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';


import Icon from '@material-ui/core/Icon'



const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1%',
    width: '100%',
    background: "whiteSmoke",


  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
    margin: '3%'
  },
  avatar: {
    margin: "2px auto",
    display: "flex",
    justifyContent: "center",


  },
  bigAvatar: {
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
    width: 80,
    height: 80,
    boxShadow: "2px 2px grey"
  },

  card: {
    width: 100,
  },
  media: {
    height: 10,
  },
  chip: {
    margin: theme.spacing.unit,
  },

  section : {
    background:"whiteSmoke",
    gridColumn: 1 / 2,
    gridRow: 1,
    position: "sticky",
    top: "0",
    left: "0",
    height: "100vh",

  },

   sectionContents : {
    position: "relative",
    top: 55,
  }
  

  
});

class Chips extends Component {

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} >
        <Grid className={classes.section} position="fixed"item xs={5}>
          <Grid className={classes.sectionContents} style={{ border: "2px solid grey", borderRadius: '10px', margin: "5px" }} item xs={10}>

            <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" className={classes.bigAvatar} />
            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
             <h1>Virgin Mobile </h1>
          </Typography>

            <Grid style={{ display: 'flex', justifyContent: "spaceBetween" }} item xs={12}>
              <Grid style={{ textAlign: 'center' }}  item xs={6}>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Location
          </Typography>
       
                  <Chip
                    style={{ textAlign: 'center' }}
                    avatar={<Avatar alt="Natacha" src="https://visualpharm.com/assets/64/Location-595b40b85ba036ed117dbe2b.svg" />}
                    label="Seed"
                    // onDelete={handleDelete}
                    className={classes.chip}
                  />
                                 <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://cdn0.iconfinder.com/data/icons/business-startup-icons/442/Web_Page_Launch-512.png" />}
                  label="Seed"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />
                                         <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://cdn0.iconfinder.com/data/icons/business-startup-icons/442/Web_Page_Launch-512.png" />}
                  label="Seed"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />

             
              </Grid>

              <Grid style={{ textAlign: 'center' }} item xs={6}>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Stage
          </Typography>
                <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://cdn0.iconfinder.com/data/icons/business-startup-icons/442/Web_Page_Launch-512.png" />}
                  label="Seed"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />
                       <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://cdn0.iconfinder.com/data/icons/business-startup-icons/442/Web_Page_Launch-512.png" />}
                  label="Seed"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />
                       <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://cdn0.iconfinder.com/data/icons/business-startup-icons/442/Web_Page_Launch-512.png" />}
                  label="Seed"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />

              </Grid>

            </Grid>
            <Grid style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }} item xs={12}>
              <Typography gutterBottom variant="h5" component="h2" >
                Industry
          </Typography>
              <Typography gutterBottom variant="h5" component="h2" >
                <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://www.freeiconspng.com/uploads/industry-icon-png-1.png" />}
                  label="location Chip"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />
                    <Chip
                  style={{ textAlign: 'center' }}
                  avatar={<Avatar alt="Natacha" src="https://www.freeiconspng.com/uploads/industry-icon-png-1.png" />}
                  label="location Chip"
                  // onDelete={handleDelete}
                  className={classes.chip}
                />
              </Typography>

              <Button size="small" color="primary">
                Learn More
        </Button>
            </Grid>


          </Grid>
          <Grid className={classes.sectionContents} item xs={11}>
            <FormControl >
              <img   style={{ width: "100%", borderRadius: "10px", marginBottom:"10px", background:"whiteSmoke" }}src="http://startupfuel.tv/wp-content/uploads/2018/12/abtract-colours-logo-1.png" />
            </FormControl>
          </Grid>
      
        </Grid>


        <Grid item xs={7} >
          <Grid style={{ background: 'url(https://i1.wp.com/news.canningspurple.com.au/wp-content/uploads/2018/02/180131-CPA-6-Tips-Working-the-Podium-at-Conferences.jpg?fit=1920%2C848&ssl=1)no-repeat center center', backgroundSize: "cover",margin:"3%" ,height: "300px", borderRadius: "15px", border:"2px solid grey" }} item xs={11}>

          </Grid>

          <Grid style={{ margin: "3%", padding: "1%", border: "2px solid grey", borderRadius: "10px", textAlign: 'left' }} item xs={11}>
            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'left' }} >
              <h1> Company Description </h1>

              Virgin Mobile logo
              
              Alternative Virgin Mobile logo
              Virgin Mobile is a wireless communications brand used by eight independent brand-licensees worldwide. Virgin Mobile branded wireless communications services are available in Australia, Colombia, the United Kingdom, Ireland, Canada, Chile, Russia, France, Saudi Arabia, United Arab Emirates, Poland, South Africa, México, and the United States. Virgin Mobile branded services used to be offered in Singapore, India and Qatar.
              

              
          </Typography>
       

          </Grid>

          <Grid style={{ display: "flex", margin:"3%" }} item xs={12}>



            <Card style={{ height: 'auto', width: "33.33%", margin: "2px", }} >
              <CardActionArea>
                <CardMedia

                  className={classes.media}
                  title="herro"

                >
                  <img src="https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/05/cool-background1.png?w=1192&ssl=1" />
                </CardMedia>


                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" style={{ display: 'flex' }}>
                    <Grid container  >

                      <Avatar alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" />
                      <h5> </h5>
                    </Grid>

                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                    Title
      </Typography>

                  <Typography variant="headline">
                    {/* {props.description.split("\n").map((i, key) => {
          return <div key={key}>{i}</div>;
        })} */}

                    <p>Description </p>
                  </Typography>


                  <Typography style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black" }} component="p">
                    <h5>Start Date : </h5>
                    <p></p>
                    <h5>End Date : </h5>
                    <p></p>
                  </Typography>
                  <Typography style={{ display: 'flex', flexDirection: "column" }} component="p">
                    <h5>Location : </h5>
                  </Typography>


                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: 'flex', textAlign: "center", justifyContent: "center", flexDirection: "column" }}>
                <Button size="large" variant="contained" color="secondary">
                  Sign up
  </Button>

                <h5> Industries : </h5>
                <Typography component="p" >


                  <p>  | industry | </p>


                </Typography>
                <Button size="small" color="primary">
                  Share
    </Button>
                <Button size="small" color="primary">
                  Learn More
    </Button>
              </CardActions>
            </Card>




            <Card style={{ height: 'auto', width: "33.33%", margin: "2px", }} >
              <CardActionArea>
                <CardMedia

                  className={classes.media}
                  title="herro"

                >
                  <img src="https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/05/cool-background1.png?w=1192&ssl=1" />
                </CardMedia>


                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" style={{ display: 'flex' }}>
                    <Grid container  >

                      <Avatar alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" />
                      <h5> </h5>
                    </Grid>

                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                    Title
      </Typography>

                  <Typography variant="headline">
                    {/* {props.description.split("\n").map((i, key) => {
          return <div key={key}>{i}</div>;
        })} */}

                    <p>Description </p>
                  </Typography>


                  <Typography style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black" }} component="p">
                    <h5>Start Date : </h5>
                    <p></p>
                    <h5>End Date : </h5>
                    <p></p>
                  </Typography>
                  <Typography style={{ display: 'flex', flexDirection: "column" }} component="p">
                    <h5>Location : </h5>
                  </Typography>


                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: 'flex', textAlign: "center", justifyContent: "center", flexDirection: "column" }}>
                <Button size="large" variant="contained" color="secondary">
                  Sign up
  </Button>

                <h5> Industries : </h5>
                <Typography component="p" >


                  <p>  | industry | </p>


                </Typography>
                <Button size="small" color="primary">
                  Share
    </Button>
                <Button size="small" color="primary">
                  Learn More
    </Button>
              </CardActions>
            </Card>


            <Card style={{ height: 'auto', width: "33.33%", margin: "2px", }} >
              <CardActionArea>
                <CardMedia

                  className={classes.media}
                  title="herro"

                >
                  <img src="https://i2.wp.com/media.boingboing.net/wp-content/uploads/2018/05/cool-background1.png?w=1192&ssl=1" />
                </CardMedia>


                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" style={{ display: 'flex' }}>
                    <Grid container  >

                      <Avatar alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" />
                      <h5> </h5>
                    </Grid>

                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                    Title
      </Typography>

                  <Typography variant="headline">
                    {/* {props.description.split("\n").map((i, key) => {
          return <div key={key}>{i}</div>;
        })} */}

                    <p>Description </p>
                  </Typography>


                  <Typography style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black" }} component="p">
                    <h5>Start Date : </h5>
                    <p></p>
                    <h5>End Date : </h5>
                    <p></p>
                  </Typography>
                  <Typography style={{ display: 'flex', flexDirection: "column" }} component="p">
                    <h5>Location : </h5>
                  </Typography>


                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: 'flex', textAlign: "center", justifyContent: "center", flexDirection: "column" }}>
                <Button size="large" variant="contained" color="secondary">
                  Sign up
  </Button>

                <h5> Industries : </h5>
                <Typography component="p" >


                  <p>  | industry | </p>


                </Typography>
                <Button size="small" color="primary">
                  Share
    </Button>
                <Button size="small" color="primary">
                  Learn More
    </Button>
              </CardActions>
            </Card>


          </Grid>
        </Grid>
      </Grid>

    );
  }
}



export default withStyles(styles)(Chips);