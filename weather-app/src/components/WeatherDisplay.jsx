import {useEffect, useState} from "react"
import {Button} from "@mui/material"
import CurrentWeatherCard from "./CurrentWeatherCard"
import Box from "@mui/material/Box";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
export default function WeatherDisplay(){
    const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;
    const [lat, changeLat] = useState(null)
    const [lon, changeLon] = useState(null)
    const weatherData ={
        city_name: "",
        main_weather: "",
        main_description: "",
        current_temperature: 0, 
        feels_like:0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
    }
    const [currentWeather, changeCurrent] = useState(null);
    const [hourlyForecast, changeHourly] = useState([]);
    const [weeklyForecast, changeWeekly] = useState([]);
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((pos)=>{
                changeLat(pos.coords.latitude);
                changeLon(pos.coords.longitude);
            })
        }else{
            console.log("Use a different broswer.")
        }
    }
    const fetchCurrentWeather = async() =>{
        try{
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
            data = await data.json()
            changeCurrent(data)
        }catch (error){
            console.log("Error: ", error)
        }
    }
    const fetchHourlyWeather = async() =>{
        try{
            let data = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
            data = await data.json();
            changeHourly(data.list.slice(0,24))     
        }catch(error){
            console.log("Error: ", error)
        }
    }
    const fetchWeekly = async() =>{
        try{
            let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}&units=imperial`)
            data = await data.json();
            changeWeekly(data.list)
        }catch(error){
            console.log("Error: ", error)
        }
    }
    useEffect(()=>{
        if(lat && lon){
            fetchCurrentWeather()
            fetchHourlyWeather()
            fetchWeekly()
        }
    }, [lat,lon])
    return(
        <>
            <Button onClick={getLocation}>Check Current Weather</Button>
            {currentWeather &&
                <>
                    <Box sx={{ mb: 4, width: '100vw', display: 'flex', justifyContent: 'center' }}>
                        <CurrentWeatherCard data={currentWeather}/>
                    </Box>
                    <HourlyForecast sx={{ mb: 4 }} data={hourlyForecast} />
                    <WeeklyForecast sx={{ mb: 4 }} data ={weeklyForecast} />

                </>
            }
        </>
    )
}