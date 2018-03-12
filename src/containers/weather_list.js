/**
 *
 * Created by tareq on 24/11/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component{

    renderWeather(cityData){
        const id = cityData.city.id;
        const name = cityData.city.name;
        const temps     = cityData.list.map(weather => weather.main.temp);
        const humidities  = cityData.list.map(weather => weather.main.humidity);
        const pressures  = cityData.list.map(weather => weather.main.pressure);
        const {lat, lon} = cityData.city.coord;
        return(
            <tr key = {id}>
                <td><GoogleMap lat={ lat } lon={ lon } /></td>
                <td><Chart data = { temps } color="orange" units="K"/></td>
                <td><Chart data = { humidities } color="red" units="hPa"/></td>
                <td><Chart data = { pressures } color="green" units="%"/></td>
            </tr>
        );
    }

    render(){
        return(
          <table className = "table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
             <tbody>
                {this.props.weather.map(this.renderWeather)}
             </tbody>
          </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);