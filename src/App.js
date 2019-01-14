import React, { Component } from 'react';
import FormData  from './form';
import Weather  from './weather';
import { Grid } from "semantic-ui-react";

const API_KEY = "8b447e5093c8cbecfc3a2e6f3427fa2f";

class App extends Component {

  state = {
    temp : '',
    temp_min:'',
    temp_max:'',
    humidity:'',
    city:'',
    country:'',
    description:'',
    error:''
  }

  getWeather = async (e)=>{
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api.json();

      this.setState({
          temp : (data.main.temp-273.15).toFixed(2),
          temp_min:(data.main.temp_min-273.15).toFixed(2),
          temp_max:(data.main.temp_max-273.15).toFixed(2),
          humidity:data.main.humidity,
          city:data.name,
          country:data.sys.country,
          description:data.weather[0].description
      })

    }else{
      this.setState({
        error:'please enter valid city and country'
      })
    }

    
  }

  render() {
    return (
      <div>
        <Grid centered columns={3}>
          <Grid.Column>
             <FormData getWeather={this.getWeather} />
          </Grid.Column>
        </Grid>
        <Grid centered columns={3}>
        {
          this.state.city ?  
          <Grid.Column>
              <Weather temp={this.state.temp}  temp_min={this.state.temp_min} temp_max={this.state.temp_max} humidity={this.state.humidity} description={this.state.description} error='' city={this.state.city} country={this.state.country} />
          </Grid.Column> : this.state.error
        }
        </Grid>
      </div>
    );
  }
}

export default App;
