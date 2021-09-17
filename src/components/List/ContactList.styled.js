import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  border-width: 0;
  line-height: 40px;
  text-transform: uppercase;
  font-size: 14px;
  background-color: green;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 40px 50px;
  margin: 50px auto 0;
  list-style: none;
  max-width: 400px;
`;

export const Name = styled.p`
  display: block;
  padding: 0 15px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
