import {useEffect, useState} from "react"
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

export default function DisplayNYT() {
  const [articles, setArticles] = useState([]);
  const API_KEY = import.meta.env.VITE_NYTAPI_KEY;
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let data = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
        );
        data = await data.json();
        setArticles(data.results);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchArticles()
  }, []);
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
        {articles.map((article, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "345px", // ✅ 100% / 6 = ~16.66% to show 6 at a time
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
          >
            <CardHeader title={article.title} />
            <CardMedia
              sx={{ height: 140 }}
              image={article.media[0]["media-metadata"][2].url}
              title={article.media[0].caption}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.byline}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {article.abstract}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={()=> window.open(article.url,"_blank")} size="large">View Article</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
