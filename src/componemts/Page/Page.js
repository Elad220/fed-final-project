/* Written by:
Elad Asaf - 208434597
Lidar Baruch - 207233545
Guy Ofir - 318597259
*/
import React from 'react';
import { StyledHeader, PageContainer } from './styled';

/* This component defines a reusable page component for the form and table pages to use */
const Page = ({ components, title }) => {
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
export default Page;
