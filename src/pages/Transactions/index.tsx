import { CaretLeft, CaretRight } from "phosphor-react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { ButtonPagination, PriceHighlight, TransactionsContainer, TransactionsPaginationContainer, TransactionsTable } from "./styles";

export function Transactions () {
    return (
    <div>
        <Header />  
        <Summary />    

        <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="40%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="40%">Hamburguer</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                - R$ 59,00
                            </PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>  
        </TransactionsContainer> 

        <TransactionsPaginationContainer>
            <ButtonPagination variant="pagination">
                <CaretLeft size={24}/>
            </ButtonPagination>
            <ButtonPagination className="active" variant="page">1</ButtonPagination>
            <ButtonPagination variant="page" >2</ButtonPagination>
            <ButtonPagination variant="page" >3</ButtonPagination>
            <ButtonPagination variant="pagination">
                <CaretRight size={24} />
            </ButtonPagination>
        </TransactionsPaginationContainer>
    </div>
    )
}