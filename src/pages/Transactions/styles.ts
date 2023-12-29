import styled, { css } from 'styled-components'

export const TransactionsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

interface ButtonPaginationsProps {
  variant?: 'page' | 'pagination'
}

export const TransactionsPaginationContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonPagination = styled.button<ButtonPaginationsProps>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    border: 0;
  }

  ${(props) =>
    props.variant === 'page'
      ? css`
          border-radius: 0.375rem;
          background: ${props.theme['gray-600']};
          color: ${props.theme['gray-400']};

          &:hover {
            color: ${props.theme['gray-100']};
            background: ${props.theme['green-500']};
            transition:
              background-color 0.2s,
              color 0.2s;
          }

          &.active {
            cursor: unset;
            color: ${props.theme['gray-100']};
            background: ${props.theme['green-700']};
          }
        `
      : props.variant === 'pagination'
        ? css`
            background: transparent;
            color: ${props.theme['gray-600']};
            &:hover svg {
              color: ${props.theme['green-500']};
              transition:
                background-color 0.2s,
                color 0.2s;
            }
          `
        : css``}
`
