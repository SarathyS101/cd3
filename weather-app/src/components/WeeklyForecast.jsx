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

export default function WeeklyForecast({ data }) {
  return (
    <>
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
              maxWidth: "345px",
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
          >
            <CardHeader
              title={new Date(weather.dt * 1000).toLocaleString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {weather.weather[0].main}
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <Typography variant="body2">
                    Humidity: {weather.humidity}%
                  </Typography>
                  <Typography variant="body2">
                    Max: {weather.temp.max.toFixed(0)}°F
                  </Typography>
                  <Typography variant="body2">
                    Minimum: {weather.temp.min.toFixed(0)}°F
                  </Typography>
                  <Typography variant="body2">
                    Preessure: {weather.pressure.toFixed(0)}
                  </Typography>
                      <Typography variant="body2">
                        Sunrise: <br />
                        {new Date(weather.sunrise * 1000).toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "America/New_York",
                          }
                        )}
                      </Typography>
                      <Typography variant="body2">
                        Sunset: <br />
                        {new Date(weather.sunset * 1000).toLocaleTimeString(
                          [],
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "America/New_York",
                          }
                        )}
                      </Typography>{" "}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}
