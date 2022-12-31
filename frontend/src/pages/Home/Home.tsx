import * as S from './Home.styles';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/constants/routes';

function Home() {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate(ROUTES.AUTH);
  };

  return (
    <S.Home>
      <S.Title>Todo App</S.Title>
      <Button size="large" onClick={onLoginClick}>
        로그인
      </Button>
    </S.Home>
  );
}

export default Home;
