import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  background: #fff;
  padding: 9px;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NumberOfMessages = styled.span`
  background: #007c82;
  font-size: 0.75rem;
  border-radius: 50%;
  align-self: flex-start;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  aspect-ratio: 1/1;
`;

export const Name = styled.h2`
  font-size: 1.125rem;
  font-family: 400;
`;

export const Message = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
`;
