import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'shared/api';
import { UserInfoType } from 'shared/type';
import * as S from './style';

export const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    email: '',
    password: '',
  });
  const [activeBtn, setActiveBtn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
    if (userInfo.email.includes('.') && userInfo.password.length >= 7)
      setActiveBtn(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(userInfo);
    navigate('/');
  };

  return (
    <>
      <h2>Login Page</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.Content>
          <S.Label>
            이메일
            <S.Input
              type='email'
              placeholder='이메일을 입력해주세요'
              value={userInfo.email}
              onChange={handleChange}
              required
              autoFocus
            />
          </S.Label>
          <S.Label>
            비밀번호
            <S.Input
              type='password'
              minLength={8}
              placeholder='비밀번호를 입력해주세요'
              value={userInfo.password}
              onChange={handleChange}
              required
            />
          </S.Label>
        </S.Content>
        <S.Button active={activeBtn} disabled={!activeBtn}>
          로그인
        </S.Button>
      </S.Form>
    </>
  );
};
