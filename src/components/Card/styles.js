import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 10px;

  img {
    width: 280px;
    height: 305px;
    border-bottom: 1px solid gray;
  }

  h4,
  span {
    color: black;
    margin-left: 10px;
  }

  h4 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const AuxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: inherit;
`;

export const StyledButton = styled.button`
  background-color: #9932cc;
  border-radius: 2px;
  color: white;
  border: 0;
  width: 60%;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #8b008b;
  }
`;
