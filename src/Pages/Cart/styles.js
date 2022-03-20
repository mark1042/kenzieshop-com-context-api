import styled from "styled-components";

export const TotalContainer = styled.div`
  margin-right: 10px;
  width: 350px;
  height: 190px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 4px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid black;
  }

  button {
    width: 60%;
    background-color: #483d8b;
    color: #fff;
    border: 0;
    border-radius: 4px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    :hover {
      background-color: slateblue;
      transition: 0.4s;
    }
  }
`;

export const AuxTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .prodN {
    margin-left: 10px;
  }
  .prodAmt {
    font-size: 10px;
    margin-right: 15px;
    font-weight: bold;
    color: green;
  }
`;

export const ShoppingListContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ShoppingList = styled.div`
  margin: 10px 0 0 10px;
  background-color: #fff;
  width: 950px;
  min-height: 89vh;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const ShoppingCard = styled.div`
  width: inherit;
  height: 120px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;

  h6 {
    margin-left: 5px;
  }
  img {
    width: 100px;
    height: inherit;
  }

  span {
    margin-right: 10px;
  }

  .shoppingAux {
    display: flex;

    button {
      height: 20px;
      font-size: 10px;
      color: white;
      background-color: red;
      width: 20px;
      border: 0;
      cursor: pointer;
    }
  }
`;
