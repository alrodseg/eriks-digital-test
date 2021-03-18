import React from 'react';
import styled from 'styled-components';
import Image from '../atoms/image';

const BADGE_HEIGHT = 24;

const BadgeWrapper = styled.div``;

const BadgesContainer = styled.div`
  display: flex;
  
  ${BadgeWrapper}:not(:last-child) {
    margin-right: 4px;
  }
`;

interface BadgesProps {
  sources: string[];
}

const Badges = (props: BadgesProps) => {
  const {sources} = props;
  return (
    <BadgesContainer>
      {sources.map((source, index) => (
        <BadgeWrapper key={index}>
          <Image src={source} height={BADGE_HEIGHT} alt={'badge'} />
        </BadgeWrapper>
      ))}
    </BadgesContainer>
  );
}

export default Badges;
