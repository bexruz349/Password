import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Heading } from "../../components/Typography/Heading";
import { LinkText } from "../../components/Typography/LinkText";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { RegistrationInfo } from "../../components/UI/Registationinfo/Registrationinfo";
import { Input } from "../../components/UI/input/input";
import "./LoginPage.scss";
import { StyleLoginPage } from "./LoginPage.style";

interface ILoginForm {
  userEmail: string;
  userPassword: string;
}

const loginFormScheme = yup.object({
  userEmail: yup.string().required("обязательное поле").email("Введите корректный email"),
  userPassword: yup.string().required("обязательное поле").min(4, "Пароль должен содержать не менее 4 символов"),
});

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)} action="#">
          <Input
            type="text"
            placeholder="Номер телефона или Email"
            errorText={errors.userEmail?.message}
            isError={!!errors.userEmail}
            {...register("userEmail")}
          />
          <Input
            type="password"
            placeholder="Пароль"
            errorText={errors.userPassword?.message}
            isError={!!errors.userPassword}
            {...register("userPassword")}
          />
          <Button isPrimary buttonText="Войти" />
        </form>
        <LinkText text="Забыли пароль?" link="/forgot-password" />
        <RegistrationInfo />
      </StyleLoginPage>
    </Container>
  );
};
