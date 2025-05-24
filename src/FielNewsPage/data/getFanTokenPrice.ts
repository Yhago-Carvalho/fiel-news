export interface FanTokenPriceProps {
  id: string;
  currency: string;
}

export const getFanTokenPrice = async ({
  id,
  currency,
}: FanTokenPriceProps) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar o valor do Fan Token:", error);
    return null;
  }
};
