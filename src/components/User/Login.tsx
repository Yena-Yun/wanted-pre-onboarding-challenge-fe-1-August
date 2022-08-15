import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from 'api';
import { UserInfo } from 'shared/type';
import * as S from './UserStyle';

export const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const [activeBtn, setActiveBtn] = useState(false);

  // useEffect(() => {
  //   const result = localStorage.getItem('token') as string;

  //   if (JSON.parse(result)) {
  //     alert('로그인되어 있습니다. 홈으로 이동합니다.');
  //     navigate('/');
  //   } else {
  //     alert('로그아웃되었습니다. 로그인 페이지로 이동합니다.');
  //     navigate('/login');
  //   }
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });

    if (userInfo.email.includes('.') && userInfo.password.length >= 7)
      setActiveBtn(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(userInfo).then((res) => {
      console.log(res?.status, res?.data.message);

      if (res?.status === 200) {
        localStorage.setItem('logIn', JSON.stringify(true));
        localStorage.setItem('token', res?.data.token);
        navigate('/');
      } else {
        console.log(res?.status, res?.data.message);
      }
    });
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
