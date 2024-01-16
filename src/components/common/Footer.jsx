// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2.0rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 8.0rem;
  height: 8.0rem;
  margin-bottom: 1.0rem;
`;

const FooterText = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  margin-top: 2.0rem;
`;

const SocialIcon = styled.a`
  margin: 0 1.0rem;
  color: #fff;
  font-size: 2.4rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ffca28;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rXrNVIKojip4SjwCmq9W67hfmmc6oqGJlQ&usqp=CAU" alt="Logo" />
        <FooterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique lectus id odio fermentum, a convallis mi venenatis.
        </FooterText>
        <SocialIcons>
          <SocialIcon href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </SocialIcon>
          <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
