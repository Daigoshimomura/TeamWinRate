import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
    <FooterTag>
      <div>footer-content</div>
    </FooterTag>
  );

const FooterTag = styled.footer`
  color: green;
`;

export default Footer;
