import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  padding: 24px;
  width: 400px;
  height: 350px;
  border: 1px solid #8e8e8e;
`;

export const Content = styled.div`
  margin-bottom: 48px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const Input = styled.input`
  padding: 12px 8px;
  border-bottom: 1px solid #8e8e8e;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  border: 1px solid #8e8e8e;
  border-radius: 4px;

  background: ${({ active }) => (active ? 'blue' : '#8e8e8e')};
  color: ${({ active }) => (active ? 'white' : '#eeeeee')};
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
`;
