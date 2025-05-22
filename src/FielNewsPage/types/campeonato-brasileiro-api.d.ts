declare module "campeonato-brasileiro-api" {
  export function tabela(serie: string): Promise<
    {
      nome: string;
      pontos: string;
      jogos: string;
      vitorias: string;
      empates: string;
      derrotas: string;
      golsPro: string;
      golsContra: string;
      saldoGols: string;
      percentual: string;
    }[]
  >;

  export function rodadaAtual(serie: string, rodada: string): Promise<unknown>;
}
