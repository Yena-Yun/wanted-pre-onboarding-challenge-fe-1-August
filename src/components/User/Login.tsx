import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './style';

export const Login = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const [activeSubmitBtn, setActiveSubmitBtn] = useState(false);

  const handleLogin = (emailValue = '', pwdValue = '') => {
    const data = { emailValue, pwdValue };
    axios
      .post('/users/login', data)
      .then((res) => {
        console.log(res);
        const { accessToken } = res.data;

        if (accessToken === null) {
          alert('가입되어 있지 않은 사용자입니다. 가입 화면으로 이동합니다.');
          navigate('/signup');
        }

        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit 버튼 클릭!');

    if (!emailValue.includes('.')) alert('이메일에 "."을 포함해주세요.');

    if (emailValue === null || pwdValue === null)
      alert('이메일과 비밀번호를 모두 입력해주세요.');
    else setActiveSubmitBtn(true);

    handleLogin(emailValue, pwdValue);
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
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.Content>
          <S.Label>
            이메일
            <S.Input
              type='email'
              placeholder='이메일을 입력해주세요'
              value={emailValue}
              onChange={(e) => handleChange(e, 'email')}
              autoFocus
            />
          </S.Label>
          <S.Label>
            비밀번호
            <S.Input
              type='password'
              minLength={8}
              placeholder='비밀번호를 입력해주세요'
              value={pwdValue}
              onChange={(e) => handleChange(e, 'password')}
            />
          </S.Label>
        </S.Content>
        {activeSubmitBtn ? (
          <S.Button active={activeSubmitBtn}>로그인</S.Button>
        ) : (
          <S.Button active={activeSubmitBtn} disabled>
            로그인
          </S.Button>
        )}
      </S.Form>
    </>
  );
};
