import { Box } from "@mui/material";
import Image from "next/image";

const videos = [
  {
    id: "5gPi1fQwq8k",
    title: "HISTÓRICO DE CORINTHIANS X palmeiras, O MAIOR CLÁSSICO DO PAÍS!",
  },
  {
    id: "AERkPKYFbWI",
    title:
      "PALMEIRAS X CORINTHIANS TER CLAUS COMO ÁRBITRO É UM ESCÂNDALO COMPLETO! VITÃO DETONA!",
  },
  {
    id: "MTyyt4hmudE",
    title:
      "PALMEIRAS X CORINTHIANS: QUEM É MELHOR? | MANO A MANO DA FINAL DO PAULISTÃO 2025",
  },
  {
    id: "Hz7u04DYPKk",
    title:
      "CORINTHIANS 2 X 0 BARCELONA EQU: MUITA LUTA NÃO FOI SUFICIENTE. OS ERROS DA IDA CUSTARAM CARO",
  },
  {
    id: "gIpINL1aryU",
    title:
      "CORINTHIANS: O DIA SEGUINTE DA ELIMINAÇÃO, PROJEÇÃO PRO DERBY E SITUAÇÃO DE RAMÓN DIAZ",
  },
  {
    id: "DaQnVvOW79c",
    title:
      "CARRILLO SOBRE FALTA DE CONCENTRAÇÃO E HUMILDADE, FOCO NA SUL-AMERICANA E ASSUMIR A ELIMINAÇÃO",
  },
  {
    id: "sOm38eeIWLA",
    title:
      "CORINTHIANS ELIMINADO DA LIBERTADORES JÁ CONHECE DATA DO SORTEIO E POTES DA SUL-AMERICANA 2025.",
  },
  {
    id: "bsfzKDNq12s",
    title:
      "MELHORES MOMENTOS: CORINTHIANS 2 X 1 SANTOS | SEMIFINAL | PAULISTÃO 2025",
  },
  {
    id: "Ni7rpSHG7xo",
    title: "JOGO COMPLETO: CORINTHIANS X SANTOS | SEMIFINAL | PAULISTÃO 2025",
  },
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
