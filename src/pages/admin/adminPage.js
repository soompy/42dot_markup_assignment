import React from "react";
import styled from "styled-components";
import layouts from "../../tokens/layouts";
import { fontSizes } from "../../tokens/fontSize";

export default function AdminPage() {
  const Container = styled.div`
    position: relative;
    width: 1000px;
  `;

  const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(${layouts.grid.columns}, minmax(0, 1fr));
    gap: ${layouts.grid.gutter};

    @media (min-width: ${layouts.grid.breakpoints.mobile}) {
      grid-template-columns: repeat(
        ${layouts.grid.columns},
        ${layouts.grid.columnWidths[2]}
      );
    }

    @media (min-width: ${layouts.grid.breakpoints.tablet}) {
      grid-template-columns: repeat(
        ${layouts.grid.columns},
        ${layouts.grid.columnWidths[3]}
      );
    }

    @media (min-width: ${layouts.grid.breakpoints.pc}) {
      grid-template-columns: repeat(
        ${layouts.grid.columns},
        ${layouts.grid.columnWidths[4]}
      );
    }
  `;

  const ListBox = styled.li`
  
  `;

  const Title = styled.h2`
    font-size: ${fontSizes.mobile.large};

    @media (min-width: ${layouts.grid.breakpoints.tablet}) {
      font-size: ${fontSizes.tablet.large};
    }

    @media (min-width: ${layouts.grid.breakpoints.pc}) {
      font-size: ${fontSizes.pc.large};
    }
  `;

  return (
    <div>
      <Container>
        <Title>Title Text</Title>


        <ListContainer>
          <ListBox></ListBox>
        </ListContainer>
      </Container>
    </div>
  );
}
