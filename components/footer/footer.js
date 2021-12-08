import {
  FooterContainer,
  FooterWrap,
  WebsiteRights
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <WebsiteRights>
          <a
            href='https://phillstack.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >Mark Phillips
          </a> &copy; {new Date().getFullYear()}. All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;