import { CaretLeft, CaretRight } from 'phosphor-react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  ButtonPagination,
  PriceHighlight,
  TransactionsContainer,
  TransactionsPaginationContainer,
  TransactionsTable,
} from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formater'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <TransactionsPaginationContainer>
        <ButtonPagination variant="pagination">
          <CaretLeft size={24} />
        </ButtonPagination>
        <ButtonPagination className="active" variant="page">
          1
        </ButtonPagination>
        <ButtonPagination variant="page">2</ButtonPagination>
        <ButtonPagination variant="page">3</ButtonPagination>
        <ButtonPagination variant="pagination">
          <CaretRight size={24} />
        </ButtonPagination>
      </TransactionsPaginationContainer>
    </div>
  )
}
