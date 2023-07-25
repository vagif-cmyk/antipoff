import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSpecialists,
  setCurrentPage,
  setNumberPages,
} from "../../redux/slices/teamSlice";
import Header from "../../components/Header";
import List from "../../components/LIst";
import MainInfo from "../../components/MainInfo";

const Team = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.specialists.currentPage);

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setSpecialists(data.data));
        dispatch(setCurrentPage(data.page));
        dispatch(setNumberPages(data.total_pages));
      });
  }, [currentPage]);

  return (
    <>
      <Header>
        <MainInfo
          title={"Наша команда"}
          desc={`Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.`}
        />
      </Header>
      <List />
    </>
  );
};

export default Team;
