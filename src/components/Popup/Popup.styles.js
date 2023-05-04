import styled from "styled-components";

export const PopupContainer = styled.div`
  .custom-popup {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.was-there-button {
    background-color: green;
    color: white;
    border: none;
  }

  &.want-there-button {
    background-color: orange;
    color: white;
    border: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;
