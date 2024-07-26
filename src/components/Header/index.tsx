import React from "react";
import ProfilePic from "../../assets/Chat/image 5.png";
import Logo from "../../assets/Chat/image 10.svg?react";
import Search from "../../assets/Chat/mdi-light_magnify.svg?react";
import { Container, Profile } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Profile src={ProfilePic} alt="" />
      <Logo />
      <Search />
    </Container>
  );
};
