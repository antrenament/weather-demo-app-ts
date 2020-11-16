import React, {useState} from 'react'
import InputLocation from "./InputLocation/InputLocation";
import WeatherCard from "./WeatherCard/WeatherCard";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";


const useStyles = makeStyles({
  weatherCardsContainer: {
    margin: '0 auto'
  },
  weatherCard: {
    marginTop: '20px'
  }
})


const App: React.FC = () => {
  const [locations, setLocations] = useState<string[]>([])

  const classes = useStyles()

  return (
    <Container>
      <h1>Welcome to WeatherTime app</h1>
      <InputLocation
        setLocations={setLocations}
        locations={locations}
      />
      <Grid container className={classes.weatherCardsContainer}>
        {
          locations.length > 0 && locations.map((location, index) =>
            <Grid item container spacing={3} key={index} xs={12} sm={6} md={3}
                  className={classes.weatherCard}>
              <WeatherCard location={location}/>
            </Grid>
          )
        }
      </Grid>
    </Container>
  )
}


export default App;
