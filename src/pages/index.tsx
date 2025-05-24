import { GetServerSideProps } from "next";
import { HomePage } from "../FielNewsPage/home/HomePage";
import { getFanTokenPrice } from "@/FielNewsPage/data/getFanTokenPrice";

interface HomePageProps {
  fanTokenPrice: string | null;
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const id = "s-c-corinthians-fan-token";
  const currency = "brl";
  try {
    const data = await getFanTokenPrice({ id, currency });
    const tokenPrice = data?.[id]?.[currency] ?? null;
    return {
      props: {
        fanTokenPrice: tokenPrice ? Number(tokenPrice).toFixed(3) : null,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar preço do Fan Token:", error);
    return { props: { fanTokenPrice: null } };
  }
};

const Home = ({ fanTokenPrice }: HomePageProps) => {
  return <HomePage fanTokenPrice={fanTokenPrice} />;
};

export default Home;
