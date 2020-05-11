import axios from "axios";
import dataFetchReducer from "./DataFetchReducer";
import { FETCH } from "../consts/Data";
import * as URL from "../../utils/EndPoints"

// TODO: when you think aoub create dataAPI by hooks, if the request might be used in effect hooks, context should be a better way
// import {getFakeBooks} from "../../mock/index"
import { getInitRes } from "../Helpers";
import { useState, useEffect, useReducer } from "react";

const makeUseQuery = (url: string) => {
  return (initParams: any, initRes: any = getInitRes(url)) => {
    const [params, setParams] = useState(initParams);
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: true,
      isError: false,
      res: initRes
    });

    useEffect(() => {
      console.log("=== url is:", url);
      console.log("=== params is", params);
      const fetch = async (url: string, params: any) => {
        dispatch({ type: FETCH.INIT });
        let res: any = {};
        try {
          if (url.includes("http") || url.includes("https")) {
            res = await axios.post(url, params);
          } else {
            // These are faked Data
            switch (url) {
              case URL.POST_GETALLBOOKS:
                const newRes:any = [] 
                // getFakeBooks(params)
                res = [...state.res, ...newRes];
                break;
            }
          }
          dispatch({
            type: FETCH.SUCCESS,
            payload: res
          });
        } catch (err) {
          dispatch({
            type: FETCH.FAILURE,
            payload: err
          });
        }
      };
      
      fetch(url, params);
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    return [state, setParams];
  };
};

export const useGetAllBooks = makeUseQuery(URL.POST_GETALLBOOKS);