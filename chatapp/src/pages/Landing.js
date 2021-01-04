import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import NameContext from "../context/NameContext";

const LandingContainer = styled.div`
  height: 100vh;
  background-color: #2c2f33;
  color: #dcddde;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  background-color: #40444b;
  padding: 5px;
  height: 30px;
  width: 300px;
  color: #dcddde;
  border: 0;
  border-radius: 4px;
  &::placeholder {
    color: #72767d;
  }
`;
const Button = styled.button`
  background-color: #7289da;
  position: absolute;
  border-radius: 4px;
  top: 7px;
  color: white;
  right: 10px;
  height: 26px;
  width: 60px;
  border: 0;
`;
const InputContainer = styled.div`
  position: relative;
`;
const Landing = () => {
  const [name, setName] = useContext(NameContext);
  const [input, setInput] = useState("");
  const onChanges = (e) => {
    setInput(e.currentTarget.value);
  };
  const onClicked = () => {
    setName(input);
  };
  const onKeyDown = (e) => {
    if (e.keyCode != 13) return;
    setName(input);
  };
  if (name) {
    return <Redirect to="/chat"></Redirect>;
  }
  return (
    <LandingContainer>
      <label>Choose a name</label>
      <InputContainer>
        <Input
          type="text"
          placeholder="Name here..."
          onChange={onChanges}
          onKeyDown={onKeyDown}
        ></Input>
        <Button onClick={onClicked}>Log In</Button>
      </InputContainer>
    </LandingContainer>
  );
};
export default Landing;
