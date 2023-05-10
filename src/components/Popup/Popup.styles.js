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
