import React, { useState } from 'react'
import './wstyle.css'
import search from '../icons/search.png'
import rain from '../icons/rain.png'
import cloud from '../icons/cloud.png'
import snow from '../icons/snow.png'
import wind from '../icons/wind.png'
import humidity from '../icons/humidity.png'
import clear from '../icons/clear.png'
import drizzle from '../icons/drizzle.png'


const Wtapp = () => {

    let api_key = '744b13013238763d4be67c826c3433b4'

    const [wicon,setwicon]=useState(cloud)

    const srch = async () => {
        const element = document.getElementsByClassName('cityinput')
        if(element[0].value ==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
        
        let response= await fetch(url);
        let data = await response.json();
        const humidity=document.getElementsByClassName('humidity-percent')
        const windsp=document.getElementsByClassName('wind-speed')
        const temp=document.getElementsByClassName('weather-temp')
        const loc = document.getElementsByClassName('weather-location')

        humidity[0].innerHTML=data.main.humidity+' %';
        windsp[0].innerHTML=data.wind.speed+" km/h";
        temp[0].innerHTML=Math.floor(data.main.temp)+" °C";
        loc[0].innerHTML=data.name;

        console.log(data.weather[0].icon)

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setwicon(clear)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setwicon(cloud)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setwicon(drizzle)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            console.log("aaya 04n")
            setwicon(drizzle)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="01n")
        {
            setwicon(rain)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="01n")
        {
            setwicon(rain)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="01n")
        {
            setwicon(snow)
        }
        else
        {
            setwicon(clear)
        }

    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityinput' placeholder='search'></input>
            <div className='search_icon' onClick={()=>{srch()}}>
                <img src={search} alt=''/>
            </div>
        </div>
        <div className='"weather-image'>
            <img src={wicon} alt=''/>
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>Delhi</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity} alt='' className='iconn'></img>
                <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={wind} alt='' className='iconn'></img>
                <div className='data'>
                    <div className='wind-speed'>18km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wtapp