import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 6px;
  border: 1px solid transparent;

  background-color: ${({theme}) => theme.colors["base-button"]};
  color: ${({theme}) => theme.colors["base-text"]};
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({theme}) => theme.colors["base-hover"]};
    cursor: pointer;
  }

  &[data-state='true'] {
    background-color: ${({theme}) => theme.colors["purple-dark"]};
    border-color: ${({theme}) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({theme}) => theme.colors.purple};
  }
`