import React from "react";
import { Container, Content, Message, Name, NumberOfMessages } from "./styles";

type Props = {
  img: string;
  name: string;
  content: string;
};

export const Banner = ({ img, name, content }: Props) => {
  return (
    <Container>
      <img src={img} alt="" />
      <Content>
        <Name>{name}</Name>
        <Message>{content}</Message>
      </Content>
      <NumberOfMessages>15</NumberOfMessages>
    </Container>
  );
};
