import React from "react";
import Home from "../../assets/Chat/mdi-light_home.svg?react";
import Person from "../../assets/Chat/mdi-light_account.svg?react";
import Chat from "../../assets/Chat/Icon-chat.svg?react";
import Notification from "../../assets/Chat/mdi-light_bell.svg?react";
import { Container } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Home />
      <Person />
      <Chat />
      <Notification />
    </Container>
  );
};
