import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

import NewsCard from "./neesCard";

export default function News() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NewsCard />
      </Box>
    </>
  );
}
