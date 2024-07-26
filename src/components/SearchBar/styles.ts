import styled from "styled-components";
import SearchIcon from "../../assets/Chat/mdi-light_magnify.svg?react";

export const Container = styled.div`
  border: 1px solid #222831;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: 0;
  background: transparent;
  outline: none;
  font-size: 1.125rem;
  flex: 1;
`;

export const Icon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
`;
