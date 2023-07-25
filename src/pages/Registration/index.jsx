import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkEmail,
  checkName,
  checkPassword,
} from "../../helpers/checkInputs";
import {
  nameInvalid,
  emailInvalid,
  passwordInvalid,
  notMatch,
} from "../../helpers/errors";
import { useNavigate } from "react-router-dom";

import {
  setRegistered,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../../redux/slices/registrationSlice";
import styles from "./Registration.module.css";
import Input from "../../components/UI/Input";

const inputs = [
  {
    title: "Имя",
    type: "text",
    id: "name",
    protect: false,
  },
  {
    title: "Электронная почта",
    type: "email",
    id: "email",
    protect: false,
  },
  {
    title: "Пароль",
    type: "password",
    id: "password",
    protect: true,
  },
  {
    title: "Подтвердите пароль",
    type: "password",
    id: "confirm",
    protect: true,
  },
];

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const confirmRef = React.useRef(null);
  const { isRegistered, info } = useSelector((state) => state.registered);

  const onSubmit = (event) => {
    event.preventDefault();
    nameRef.current.classList.remove(styles.errorActive);
    emailRef.current.classList.remove(styles.errorActive);
    passwordRef.current.classList.remove(styles.errorActive);
    confirmRef.current.classList.remove(styles.errorActive);

    if (!checkName(info.name)) {
      nameRef.current.classList.add(styles.errorActive);
      nameRef.current.textContent = nameInvalid;
    }
    if (!checkEmail(info.email)) {
      emailRef.current.classList.add(styles.errorActive);
      emailRef.current.textContent = emailInvalid;
    }
    if (!checkPassword(info.password)) {
      passwordRef.current.classList.add(styles.errorActive);
      passwordRef.current.textContent = passwordInvalid;
      return;
    }
    if (info.password !== info.confirmPassword) {
      confirmRef.current.classList.add(styles.errorActive);
      confirmRef.current.textContent = notMatch;
    } else {
      localStorage.setItem("isRegistered", "true");
      dispatch(setRegistered(JSON.parse(localStorage.getItem("isRegistered"))));
    }
  };

  React.useEffect(() => {
    dispatch(setRegistered(JSON.parse(localStorage.getItem("isRegistered"))));
    if (isRegistered) {
      navigate("/team");
    } else {
      navigate("/");
    }
  }, [isRegistered]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2 className={styles.title}>Регистрация</h2>
        <form className={styles.form}>
          <Input {...inputs[0]} value={info.name} onChange={setName}>
            <span className={styles.error} ref={nameRef}></span>
          </Input>
          <Input {...inputs[1]} value={info.email} onChange={setEmail}>
            <span className={styles.error} ref={emailRef}></span>
          </Input>
          <Input {...inputs[2]} value={info.password} onChange={setPassword}>
            <span className={styles.error} ref={passwordRef}></span>
          </Input>
          <Input
            {...inputs[3]}
            value={info.confirmPassword}
            onChange={setConfirmPassword}
          >
            <span className={styles.error} ref={confirmRef}></span>
          </Input>
          <button
            className={styles.button}
            onClick={(event) => onSubmit(event)}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
