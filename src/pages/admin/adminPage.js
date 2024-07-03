import React from "react";
import styled from "styled-components";
import layouts from "../../tokens/layouts";

export default function AdminPage() {
  const Container = styled.div`
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

  return (
    <div>
      <Container>ddd</Container>
    </div>
  );
}
