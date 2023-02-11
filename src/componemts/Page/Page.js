import React from "react";
import { StyledHeader, PageContainer } from "./styled";

export const Page = ({ components, title }) => {
  return (
    <PageContainer>
      <StyledHeader>{title}</StyledHeader>
      {components.map((component, index) => (
        <div key={index} style={{ flex: 1 }}>
          {component}
        </div>
      ))}
    </PageContainer>
  );
};
