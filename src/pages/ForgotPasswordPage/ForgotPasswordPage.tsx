import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/LinkText";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/input/input";
import { StyleForgotPasswordPage, StyledButton } from "./ForgotPasswordPage.style";
import "./ForgotPasswordPage.scss";

export const ForgotPasswordPage = () => {
  return (
    <Container>
      <StyleForgotPasswordPage>
        <Heading headingText="Восстановление пароля" />
        <form>
          <Input type="text" placeholder="Номер телефона или Email" />
          <StyledButton>Отправить</StyledButton>
        </form>
        <LinkText text="Вернуться к авторизации" link="/" />
      </StyleForgotPasswordPage>
    </Container>
  );
};
