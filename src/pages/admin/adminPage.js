import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import layouts from "../../tokens/layouts";
import { fontSizes } from "../../tokens/fontSize";
import ListContainer from "../../components/List/ListContainer";
import Input from "../../components/Input/Input";
import Switch from "../../components/Switch/Switch";
import Button from "../../components/Button/Button";
import { themeColors } from "../../styles/colors";
import { paddings } from "../../tokens/paddings";
import InputLabel from "../../components/Label/InputLabel";
import DivisionLabel from "../../components/Label/DivisionLabel";
import useWindowWidth from "../../hooks/useWindowWidth";
import Toast from "../../components/Alert/Toast";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.boxBackgroundColor};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 640px;
  width: 100%;
  height: 100%;
  padding: ${(props) => paddings[props.paddingSize || "xLarge"]};
  box-shadow: 9px 7px 50px -17px rgba(0, 0, 0, 0.75);

  @media (min-width: ${layouts.grid.breakpoints.tablet}) {
    font-size: ${fontSizes.tablet.large};
  }

  @media (min-width: ${layouts.grid.breakpoints.pc}) {
    font-size: ${fontSizes.pc.large};
  }
`;

const Title = styled.h2`
  font-size: ${fontSizes.mobile.large};
  font-weight: bold;
  padding-bottom: ${(props) => paddings[props.paddingSize || "large"]};

  @media (min-width: ${layouts.grid.breakpoints.tablet}) {
    font-size: ${fontSizes.tablet.large};
  }

  @media (min-width: ${layouts.grid.breakpoints.pc}) {
    font-size: ${fontSizes.pc.large};
  }
`;

const BoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${(props) => paddings[props.paddingSize || "medium"]};
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckedItemBox = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  padding-bottom: ${(props) => paddings[props.paddingSize || "medium"]};
  span {
    margin-right: 8px;
    background-color: ${(props) => props.theme.lightGrayColor};
    color: ${(props) => props.theme.textColor};
    padding: ${(props) => paddings[props.paddingSize || "small"]};
    border-radius: 4px;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.pc.small};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const AdminPage = () => {
  const items = [
    "계정 관리자1",
    "계정 관리자2",
    "계정 관리자3",
    "계정 관리자4",
    "계정 관리자5",
    "계정 관리자6",
  ];

  const [theme, setTheme] = useState("light");
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => ({ ...acc, [item]: false }), {})
  );
  const [switchChecked, setSwitchChecked] = useState(false);
  const [showCheckedItems, setShowCheckedItems] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = parseInt(layouts.grid.breakpoints.mobile);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(undefined);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(isValidEmail(value));
  };

  const handleReset = () => {
    setInputValue("");
    setIsValid(undefined);
  };

  const handleItemChange = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));

    const anyChecked = Object.values({
      ...checkedItems,
      [item]: !checkedItems[item],
    }).includes(true);
    setShowCheckedItems(anyChecked);
  };

  const handleSwitchChange = () => {
    setSwitchChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    const anyChecked = Object.values(checkedItems).includes(true);
    setShowCheckedItems(anyChecked);
  }, [checkedItems]);

  return (
    <ThemeProvider theme={themeColors[theme]}>
      <Button
        onClick={toggleTheme}
        size="medium"
        bgColor={themeColors[theme].secondaryColor}
        textColor={themeColors[theme].textColor}
        border={false}
      >
        테마 변경
      </Button>
      <GlobalStyle />
      <div>
        <Container>
          <Title>Title Text</Title>

          <BoxContainer>
            <InputLabel labelText="이메일" />
            <Input
              type="email"
              placeholder="이메일을 입력하세요."
              value={inputValue}
              onChange={handleInputChange}
              isValid={isValid}
              resettable={true}
              onReset={handleReset}
              validationMessage="이메일 형식에 맞게 써주세요"
              theme={theme}
            />
          </BoxContainer>

          <BoxContainer>
            <DivisionLabel labelText="역할" />
            <CheckedItemBox show={showCheckedItems}>
              {Object.keys(checkedItems).map(
                (item) => checkedItems[item] && <span key={item}>{item}</span>
              )}
            </CheckedItemBox>
            <ListContainer
              items={items}
              checkedItems={checkedItems}
              onItemChange={handleItemChange}
              theme={theme}
            />
          </BoxContainer>

          <BoxContainer>
            <BottomContainer>
              <SwitchContainer>
                <span>반복</span>
                <Switch
                  checked={switchChecked}
                  onChange={handleSwitchChange}
                  theme={theme}
                />
              </SwitchContainer>

              <ButtonContainer>
                <Button
                  size="large"
                  bgColor={themeColors[theme].boxBackgroundColor}
                  textColor={themeColors[theme].textColor}
                  border={true}
                  borderColor={themeColors[theme].lightGrayColor}
                >
                  취소
                </Button>

                <Button
                  size="large"
                  bgColor={themeColors[theme].primaryColor}
                  textColor={themeColors[theme].boxBackgroundColor}
                  border={false}
                  borderColor=""
                >
                  등록
                </Button>
              </ButtonContainer>
            </BottomContainer>
          </BoxContainer>
        </Container>
        {windowWidth < mobileBreakpoint && (
          <Toast show={true} message="지원하지 않음" />
        )}
      </div>
    </ThemeProvider>
  );
};

export default AdminPage;
