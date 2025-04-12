import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function WeatherContent({ data, hourly }) {
  return (
    <>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.main.temp.toFixed(0)} °F
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.weather.main}
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
              Humidity: {data.main.humidity}%
            </Typography>
            <Typography variant="body2">
              Max: {data.main.temp_max.toFixed(0)}°F
            </Typography>
            <Typography variant="body2">
              Minimum: {data.main.temp_min.toFixed(0)}°F
            </Typography>
            <Typography variant="body2">
              Feels Like: {data.main.feels_like.toFixed(0)}°F
            </Typography>
            {!hourly && (
              <>
                <Typography variant="body2">
                  Sunrise: <br />
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/New_York",
                  })}
                </Typography>
                <Typography variant="body2">
                  Sunset: <br />
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/New_York",
                  })}
                </Typography>{" "}
              </>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </>
  );
}
