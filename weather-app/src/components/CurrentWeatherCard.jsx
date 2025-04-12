import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from '@mui/material/CardHeader';
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import WeatherContent from "./WeatherContent";
import WeeklyForecast from "./WeeklyForecast";
// const weatherData ={
//     city_name: "",
//     main_weather: "",
//     main_description: "",
//     current_temperature: 0,
//     feels_like:0,
//     temp_max: 0,
//     temp_min: 0,
//     humidity: 0,
//     sunrise: 0,
//     sunset: 0,
// }
export default function CurrentWeatherCard({data}) {
  return (
    <>
      <Card sx={{ width: '50%', maxWidth: '70vw' }}>
      <CardHeader
        title={data.name}
        subheader={data.weather.main}
      />
      <WeatherContent data={data} hourly={false} />
      </Card>
    </>
  );
}
