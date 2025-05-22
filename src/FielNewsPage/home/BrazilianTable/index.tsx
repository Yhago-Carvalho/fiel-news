import { Box, Button, Modal, Typography } from "@mui/material";
import { TeamType } from "@/FielNewsPage/types/TeamType";
import style from "styled-jsx/style";
import { useState } from "react";
import { BRAZILIAN_TABLE, CLASSIFICATION_TITLE } from "../messages";

type Props = {
  initialTable: TeamType[];
};

export default function BrazilianTableModal({ initialTable }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} sx={{ color: "black" }}>
        {CLASSIFICATION_TITLE}
      </Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="br-table-title">
        <Box sx={style}>
          <Typography id="br-table-title" variant="h6" gutterBottom>
            {BRAZILIAN_TABLE}
          </Typography>

          {initialTable.map((team) => (
            <Typography key={team.nome}>
              {team.nome} - {team.pontos} pts - Jogos: {team.jogos} - Vitórias:{" "}
              {team.vitorias}
            </Typography>
          ))}
        </Box>
      </Modal>
    </>
  );
}
