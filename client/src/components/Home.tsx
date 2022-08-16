import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Home = () => {
  return (
    <Wrapper>
      <Title>Welcome!</Title>
      <MoveButton>
        <Link to='/login'>Login</Link>
      </MoveButton>
      <MoveButton>
        <Link to='/signup'>Sign Up</Link>
      </MoveButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 40px 32px 32px;
  margin: 40px auto 0;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const MoveButton = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;
