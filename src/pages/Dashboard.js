import React from "react";
import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledformArea, StyledFormArea, colors } from "../components/Styles";

// Logo
import Logo from "./../assets/logo.jpg";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Welcome to Dr. Cockerell Login</StyledTitle>

      <ButtonGroup>
        <StyledButton to="#">Logout</StyledButton>
      </ ButtonGroup>
      </StyledFormArea>
     

    </div>
  );
};

export default Dashboard;
