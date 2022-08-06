import React, { useState } from 'react';
import styled from 'styled-components';

export const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const [activeSubmitBtn, setActiveSubmitBtn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit 버튼 클릭!');

    if (!String(emailValue).includes('.'))
      alert('이메일에 "."을 포함해주세요.');

    if (emailValue === null || pwdValue === null)
      alert('이메일과 비밀번호를 모두 입력해주세요.');
    else setActiveSubmitBtn(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type = '') => {
    if (emailValue !== '' && pwdValue !== '') setActiveSubmitBtn(true);

    const { value } = e.target;
    if (type === 'email') setEmailValue(String(value));
    else if (type === 'password') setPwdValue(String(value));
  };

  return (
    <>
      <h2>Login Page</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Content>
          <Label>
            이메일
            <Input
              type='email'
              placeholder='이메일을 입력해주세요'
              value={emailValue}
              onChange={(e) => handleChange(e, 'email')}
              autoFocus
            />
          </Label>
          <Label>
            비밀번호
            <Input
              type='password'
              minLength={8}
              placeholder='비밀번호를 입력해주세요'
              value={pwdValue}
              onChange={(e) => handleChange(e, 'password')}
            />
          </Label>
        </Content>
        {activeSubmitBtn ? (
          <Button active={activeSubmitBtn}>로그인</Button>
        ) : (
          <Button active={activeSubmitBtn} disabled>
            로그인
          </Button>
        )}
      </Form>
    </>
  );
};

const Form = styled.form`
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

const Content = styled.div`
  margin-bottom: 48px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

const Input = styled.input`
  padding: 12px 8px;
  border-bottom: 1px solid #8e8e8e;
`;

const Button = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  border: 1px solid #8e8e8e;
  border-radius: 4px;

  background: ${({ active }) => (active ? 'blue' : '#8e8e8e')};
  color: ${({ active }) => (active ? 'white' : '#eeeeee')};
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
`;
