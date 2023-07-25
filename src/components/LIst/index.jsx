import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setSpecialist } from "../../redux/slices/teamSlice";

import styles from "./List.module.css";
import Heart from "../UI/Heart";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const { specialists, currentPage, numberPages } = useSelector(
    (state) => state.specialists
  );

  const setDetails = (person) => {
    dispatch(setSpecialist(person));
  };

  return (
    <section className={styles.root}>
      {specialists.length !== 0 && (
        <div className="container">
          <ul className={styles.list}>
            {specialists.map((person) => (
              <li className={styles.item} key={person.id}>
                <img className={styles.img} src={person.avatar} alt="avatar" />
                <Link to={"/cart"}>
                  <p
                    onClick={() => setDetails(person)}
                    className={styles.desc}
                  >{`${person.first_name} ${person.last_name}`}</p>
                </Link>
                <Heart />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={
          styles.control +
          " " +
          (currentPage === numberPages ? styles.disabled : styles.active)
        }
      >
        <button
          className={styles.btn}
          onClick={() => {
            if (currentPage < numberPages) {
              dispatch(setCurrentPage(currentPage + 1));
            }
          }}
        >
          Показать ещё
        </button>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.497 0.989027L8.99999 8.29703L1.50299 0.989027C1.36905 0.858193 1.18923 0.784947 1.00199 0.784947C0.814751 0.784947 0.634939 0.858193 0.500992 0.989027C0.436135 1.05257 0.384611 1.12842 0.349436 1.21213C0.314261 1.29584 0.296143 1.38573 0.296143 1.47653C0.296143 1.56733 0.314261 1.65721 0.349436 1.74092C0.384611 1.82463 0.436135 1.90048 0.500992 1.96403L8.47649 9.74003C8.61655 9.87655 8.8044 9.95295 8.99999 9.95295C9.19558 9.95295 9.38343 9.87655 9.52349 9.74003L17.499 1.96553C17.5643 1.90193 17.6162 1.8259 17.6517 1.74191C17.6871 1.65792 17.7054 1.56769 17.7054 1.47653C17.7054 1.38537 17.6871 1.29513 17.6517 1.21114C17.6162 1.12715 17.5643 1.05112 17.499 0.987526C17.365 0.856693 17.1852 0.783447 16.998 0.783447C16.8108 0.783447 16.6309 0.856693 16.497 0.987526V0.989027Z"
            fill="#151317"
          />
        </svg>
      </div>
    </section>
  );
};

export default List;
