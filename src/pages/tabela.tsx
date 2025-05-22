import { GetServerSideProps } from "next";
import BrazilianTableModal from "@/FielNewsPage/home/BrazilianTable";
import { TeamType } from "@/FielNewsPage/types/TeamType";
import { tabela } from "campeonato-brasileiro-api";
import Header from "@/FielNewsPage/home/Header";

type Props = {
  table: TeamType[];
};

export default function TablePage({ table }: Props) {
  return (
    <div>
      <Header />
      <BrazilianTableModal initialTable={table} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const table = await tabela("a");
  return {
    props: {
      table,
    },
  };
};
