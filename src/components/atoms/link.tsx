import React, {forwardRef} from 'react';
import styled from 'styled-components';
import colors from '../../utils/styles/colors';

interface StyledLinkProps {
  href: string;
  target: string;
}

const StyledLink = styled.a.attrs<StyledLinkProps>(props => ({
  href: props.href,
  target: props.target,
}))`
  color: ${colors.primary};
  text-decoration: none;
  
  :hover {
    color: ${colors.secondary};
  }
`;

interface LinkProps {
  href: string;
  title: string;
  openInNewTab?: boolean;
}

const Link = forwardRef<HTMLLinkElement, LinkProps>((props, ref) => {
  const {href, openInNewTab = false, title} = props;
  const target = openInNewTab ? '_blank' : '_self';

  return (
    <StyledLink href={href} target={target}>{title}</StyledLink>
  );
});

export default (Link);
