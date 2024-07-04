import React from "react";
import styled from "styled-components";

const ToastOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ToastMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  background-color: ${(props) => props.theme.grayColor};
  color: ${(props) => props.theme.textColor};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
`;

const Toast = ({ show, message }) => {
  if (!show) return null;

  return (
    <>
      <ToastOverlay />
      <ToastMessage>{message}</ToastMessage>
    </>
  );
};

export default Toast;
