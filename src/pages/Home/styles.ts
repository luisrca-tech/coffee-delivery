import styled from "styled-components";

export const HomeContainer = styled.div`
  max-height: 34rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.875rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  gap: 4.125rem;

  strong {
    text-align: center;
    font-size: 3rem;
    line-height: 130%;
  }

  span {
    display: block;
    line-height: 130%;
    font-size: 1.25rem;
    padding-top: 1rem;
  }
`

export const DeliveryQualities = styled.div`
  display: flex;
  gap: 2.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 2.125rem;
    line-height: 130%;
    font-size: 0.875rem;
  }
`

export const CoffeeList = styled.div`
  margin: 9rem auto 3.375rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    margin-left: 10rem;
    line-height: 130%;

    font-size: 2rem;
    font-family: "Baloo 2", sans-serif;
  }
`

export const CardContainer = styled.div`
  display: flex;
  margin: auto 10rem;
  flex-wrap: wrap;
  gap: 2rem;
`