import React from "react";
import Pic1 from "../../assets/Chat/Mask Group-1.jpg";
import Pic2 from "../../assets/Chat/Mask Group-2.jpg";
import Pic3 from "../../assets/Chat/Mask Group-3.jpg";
import Pic4 from "../../assets/Chat/Mask Group.jpg";
import { Banner } from "../Banner";
import { SearchBar } from "../SearchBar";
import { Container } from "./styles";

export const Chat = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const data = [
    {
      img: Pic1,
      name: "Vikings - Brasil",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: Pic2,
      name: "O segredo além do jardim",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: Pic3,
      name: "Triss Merigold",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
    {
      img: Pic4,
      name: "Homem-aranha no aranha...",
      message:
        "Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ...",
    },
  ];

  return (
    <div>
      <Container>
        <SearchBar value={searchBarValue} setValue={setSearchBarValue} />
        {data
          .filter((item) => {
            return item.name.includes(searchBarValue);
          })
          .map((item, index) => (
            <Banner
              img={item.img}
              name={item.name}
              content={item.message}
              key={index}
            />
          ))}
      </Container>
    </div>
  );
};
