import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Box,
  Avatar,
  Grid,
} from "@mui/material";

export default function NewsCard() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
        }}
      >
        <Card sx={{ maxWidth: 345, mr: { sm: 2 }, mb: { xs: 3, sm: 0 } }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="210"
              image="/images/dinner.jpg"
              alt="pool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dinner party next week!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box sx={{ px: 2, py: 1, display: "flex" }}>
            <Box sx={{ mr: 1 }}>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  fontSize: 14,
                }}
              >
                Cindy Baker
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                22.11.2022
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{ maxWidth: 345, mr: { sm: 2 } }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="210"
              image="/images/dogs.jpg"
              alt="pool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Keep your dog on a leash.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box sx={{ px: 2, py: 1, display: "flex" }}>
            <Box sx={{ mr: 1 }}>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  fontSize: 14,
                }}
              >
                Cindy Baker
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                22.11.2022
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{ maxWidth: 345, mr: { sm: 2 } }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="210"
              image="/images/xmas-tree.jpg"
              alt="pool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ho Ho Ho! Christmas is coming.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box sx={{ px: 2, py: 1, display: "flex" }}>
            <Box sx={{ mr: 1 }}>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  fontSize: 14,
                }}
              >
                Cindy Baker
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                22.11.2022
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="210"
              image="/images/pool.jpg"
              alt="pool"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Work underway to reopen pools.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box sx={{ px: 2, py: 1, display: "flex" }}>
            <Box sx={{ mr: 1 }}>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Box>
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  fontSize: 14,
                }}
              >
                Cindy Baker
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                22.11.2022
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
