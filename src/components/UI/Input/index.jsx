import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Input.module.css";

const Input = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const showPassword = () => {
    setOpen(!open);
  };

  return (
    <>
      <label htmlFor={props.id} className={styles.label}>
        {props.title}
      </label>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          value={props.value}
          type={props.protect ? (open ? "text" : "password") : props.type}
          id={props.id}
          onChange={(e) => dispatch(props.onChange(e.target.value))}
        />
        {props.children}
        {props.protect && (
          <>
            {!open && (
              <svg
                onClick={() => showPassword()}
                className={styles.eye}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212"
                  stroke="#808185"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 4L20 20"
                  stroke="#808185"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {open && (
              <svg
                onClick={() => showPassword()}
                className={styles.eye}
                enableBackground="new 0 0 32 32"
                height="25px"
                width="25px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16,25c-4.265,0-8.301-1.807-11.367-5.088c-0.377-0.403-0.355-1.036,0.048-1.413c0.404-0.377,1.036-0.355,1.414,0.048    C8.778,21.419,12.295,23,16,23c4.763,0,9.149-2.605,11.84-7c-2.69-4.395-7.077-7-11.84-7c-4.938,0-9.472,2.801-12.13,7.493    c-0.272,0.481-0.884,0.651-1.363,0.377c-0.481-0.272-0.649-0.882-0.377-1.363C5.147,10.18,10.333,7,16,7    c5.668,0,10.853,3.18,13.87,8.507c0.173,0.306,0.173,0.68,0,0.985C26.853,21.819,21.668,25,16,25z" />
                <path d="M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,21,16,21z M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3    s3-1.346,3-3S17.654,13,16,13z" />
              </svg>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
