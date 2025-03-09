import { Box } from "@mui/material";
import Image from "next/image";

const videos = [
  { id: "zVHQ5_aWrw0", title: "Pedro Raul de Saída" },
  { id: "YbRL8A7utYE", title: "Negociaçào com Lateral esfria" },
  { id: "L-X_q_v5vLs", title: "Treino" },
  { id: "ploZaqQ1DtU", title: "Retorno de Bidon" },
  { id: "Xp2jexqrSTA", title: "Novo foco" },
  { id: "thOCQm-3Eyw", title: "Resultado decepcionante" },
  { id: "0YIwgdFIKHg", title: "Notícias Esporte espetacular" },
  { id: "-MZUfQNdgAQ", title: "Chio Notícias" },
  { id: "kFOn35P9BAg", title: "Fabinho expõe podres" },
];

const YoutubeVideoList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        marginTop: 2,
      }}
    >
      {videos.map((video) => (
        <Box
          key={video.id}
          sx={{
            width: "calc(33.33% - 16px)",
            minWidth: "150px",
            position: "relative",
            aspectRatio: "16/9",
          }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
              alt={video.title}
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default YoutubeVideoList;
