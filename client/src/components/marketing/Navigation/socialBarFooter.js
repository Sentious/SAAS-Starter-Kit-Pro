import styled from 'styled-components';
import DummySmallIcon from '../../dummyIcons/DummySmallIcon';
import { colors } from '../../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${colors.blue800};
  margin: 1.5rem;
`;

const Link = styled.a`
  color: ${colors.gray400};
  &:hover {
    color: ${colors.gray500};
  }
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Facebook = styled(DummySmallIcon)`
  height: 2.5rem;
  width: 2.5rem;
`;

const Twitter = styled(DummySmallIcon)`
  height: 2.5rem;
  width: 2.5rem;
`;

const GitHub = styled(DummySmallIcon)`
  height: 2.5rem;
  width: 2.5rem;
`;

const SocialBarFooter = () => (
  <Wrapper>
    <Link href='#'>
      <Span>Facebook</Span>
      <Facebook />
    </Link>
    <Link href='#'>
      <Span>Twitter</Span>
      <Twitter />
    </Link>
    <Link href='#'>
      <Span>GitHub</Span>
      <GitHub />
    </Link>
  </Wrapper>
);

export default SocialBarFooter;
