import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  border-bottom: 1px solid grey;

  h2 {
    margin-left: 15px;
    font-weight: bold;
    font-size: 30px;
  }
  .aux {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .backBtn {
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 10px;
    width: 50px;
    height: 25px;
    :hover {
      background-color: lightgrey;
    }
  }

  button {
    margin-right: 15px;
    border: 0;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;

    span {
      color: green;
    }
  }
`;
