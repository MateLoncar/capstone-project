import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #1976d2;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

export const PopupContainer = styled.div`
  .custom-popup {
    background-color: red;
  }
`;

export const DeleteButton = styled.button`
  display: inline-block;
  width: 50px;
  height: 20px;
  line-height: 1;
  text-align: center;
  background-color: #f44336;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
