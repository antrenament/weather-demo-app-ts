import React, {useEffect, useState} from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

interface WeatherData {
  location: {
    localtime: string,
    name: string
  };
  current: {
    condition: {
      icon: string | undefined
    },
    temp_c: string
  };
}

const defaultWeatherObject = {
  location: {localtime: 'undefined', name: 'undefined'},
  current: {temp_c: 'undefined', condition: {icon: 'undefined'}}
}

const WeatherCard: React.FC<{ location: string | number }> = ({location}) => {
  const classes = useStyles()
  const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherObject)
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`

  useEffect(() => {
    fetchData()
  }, [location])

  const fetchData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setWeatherData(data)
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Typography gutterBottom variant="h5" component="h2">
                {weatherData?.location?.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Avatar src={weatherData?.current?.condition?.icon} sizes={"40px"}/>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            Local Time: {weatherData?.location?.localtime}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Temperature: {weatherData?.current?.temp_c + 'C'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default WeatherCard