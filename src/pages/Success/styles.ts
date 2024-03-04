import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 20px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;

  img {
    margin-bottom: -13px;
  }
`

export const Order = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.colors["yellow-dark"]};
  }

  span {
    font-size: 1.25rem;
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({theme}) => `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`

export const InfoContent = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`