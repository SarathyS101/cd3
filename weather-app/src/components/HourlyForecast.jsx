import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import WeatherContent from "./WeatherContent";

export default function HourlyForecast({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        px: 2,
        scrollSnapType: "x mandatory", // optional smooth snapping
      }}
    >
      {data.map((weather, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: "345px", // ✅ 100% / 6 = ~16.66% to show 6 at a time
            flex: "0 0 auto",
            scrollSnapAlign: "start",
          }}
        >
          <CardHeader title={weather.dt_txt} />
          <WeatherContent data={weather} hourly={true} />
        </Card>
      ))}
    </Box>
  );
}

