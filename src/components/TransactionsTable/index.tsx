import { Container } from "./style";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvedor de WebSite.</td>
            <td className="deposit">R$ 3000,00</td>
            <td>Desenvolvimento</td>
            <td>14/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1000,00</td>
            <td>Casa</td>
            <td>11/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}