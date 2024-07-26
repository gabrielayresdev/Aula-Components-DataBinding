import React from "react";
import { Container, Icon, Input } from "./styles";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchBar = ({ value, setValue }: Props) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar conversas"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <Icon />
    </Container>
  );
};
