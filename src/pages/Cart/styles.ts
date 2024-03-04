import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.125rem;
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const FormsContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors["base-card"]};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressContainer = styled(FormsContainer)``

export const heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${({theme}) => theme.colors["base-subtitle"]};
    }
    p {
      font-size: 0.875rem;
    }
  }
`

export const AddressHeading = styled(heading)`
  svg {
    color: ${({theme}) => theme.colors["yellow-dark"]};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
  ;
`

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(heading)`
  svg {
    color: ${({theme}) => theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 6px 8px;
    background-color: ${({theme}) => theme.colors["base-button"]};
    color: ${({theme}) => theme.colors["base-text"]};
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: ${({theme}) => theme.colors["base-hover"]};
    }

    > svg {
      color: ${({theme}) => theme.colors.purple};
    }

    > span {
      font-size: 1.25rem;
      text-transform: uppercase;
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({theme}) => theme.colors["base-card"]};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({theme}) => theme.colors["base-button"]};
    margin: 1.5rem 0;
  }
`

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-size: 1rem;
  }
  }

  div:last-child {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  font-size: 0.875rem;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({theme}) => theme.colors["yellow-dark"]};
  }

  border-radius: 6px;

  cursor: pointer;
`

export const PaymentErrorMessage = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: red;
`