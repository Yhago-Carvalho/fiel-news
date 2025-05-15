"use client";

import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { newsData } from "./Utils";

type Votes = {
  [key: number]: { likes: number; dislikes: number };
};

const NewsSession = () => {
  const [votes, setVotes] = useState<Votes>(
    newsData.reduce<Votes>((acc, news) => {
      return { ...acc, [news.id]: { likes: 0, dislikes: 0 } };
    }, {})
  );

  const handleVote = (id: number, type: "likes" | "dislikes") => {
    setVotes((prev: Votes) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id][type] + 1,
      },
    }));
  };

  return (
    <Box
      sx={{
        maxWidth: "90%",
        maxHeight: "80%",
        width: "auto",
        height: "auto",
        paddingTop: "24px",
      }}
    >
      {newsData.map((news) => (
        <Box
          key={news.id}
          sx={{
            backgroundColor: "#fff",
            padding: 2,
            marginBottom: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Typography variant="h6">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <IconButton onClick={() => handleVote(news.id, "likes")}>
              <ThumbUpIcon color="primary" />
            </IconButton>
            <Typography>{votes[news.id].likes}</Typography>

            <IconButton onClick={() => handleVote(news.id, "dislikes")}>
              <ThumbDownIcon color="error" />
            </IconButton>
            <Typography>{votes[news.id].dislikes}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewsSession;
