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
  margin: 2px;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.was-there-button {
    background-color: green;
    color: white;
    border: none;
    font-family: sans-serif;
  }

  &.want-there-button {
    background-color: #ffc93c;
    color: white;
    font-family: sans-serif;
    border: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const DeleteButton = styled.button`
  position: fixed;
  bottom: 5px;
  right: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ExperienceButton = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
`;

export const SubmitButton = styled.button`
  color: teal;
`;
