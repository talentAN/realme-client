import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useGetAllBooks } from "../utils/hooks/DataApi";
import {
  GUEST,
  offsetByCard,
  LIST_TYPE
} from "../utils/consts/index";
import Spinner from "../components/common/Spinner";
import Table from "../components/common/Table";
import Book from "../components/Book";
import useStyles from "./Dashboards.style";

let offset = 0;
const Dashboard = (props: any) => {
  const classes = useStyles({});
  const [listType, setListType] = useState(LIST_TYPE.CARD); // card || list
  const [state, setParams] = useGetAllBooks(
    {
      auth: GUEST,
      offset: 0
    },
    []
  );
  // card模式下监听滚动事件
  useEffect(() => {
    const _fetch = (e: any) => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      if (clientHeight + scrollTop === scrollHeight && listType === "card") {
        offset = offset + offsetByCard;
        setParams({ auth: GUEST, offset, });
      }
    };

    window.addEventListener("scroll", _fetch);
    return () => {
      window.removeEventListener("scroll", _fetch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button
          size="medium"
          variant={listType === LIST_TYPE.CARD ? "contained" : "outlined"}
          onClick={() => {
            setListType(LIST_TYPE.CARD);
          }}
        >
          Card
        </Button>
        <Button
          variant={listType === LIST_TYPE.LIST ? "contained" : "outlined"}
          onClick={() => {
            setListType(LIST_TYPE.LIST);
          }}
        >
          List
        </Button>
      </div>
      <div className={classes.content}>
        {listType === LIST_TYPE.CARD && (
          <>
            {!state.isError &&
              state.res.map((bookConfig: any, index: number) => (
                <div style={{ margin: "10px" }} key={index}>
                  <Book bookConfig={bookConfig} key={bookConfig.id} />
                </div>
              ))}
          </>
        )}
        {listType === LIST_TYPE.LIST && <Table datas={state.res} />}
      </div>
    </div>
  );
};

export default Dashboard;
