import React, { useState } from "react";
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

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSizes.pc.small};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

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
  const windowWidth = useWindowWidth();
  const mobileBreakpoint = parseInt(layouts.grid.breakpoints.mobile);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleItemChange = (item) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleSwitchChange = () => {
    setSwitchChecked((prevChecked) => !prevChecked);
  };

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
            <Input />
          </BoxContainer>

          <BoxContainer>
            <DivisionLabel labelText="역할" />
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
