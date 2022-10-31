//요청을 보내어 데이터를 받아와야 하고,
//그 요청은 sendRequest라는 함수로 함
//데이터를 보내는 도중에는 상태를 pending으로,
//완성 되면 completed, 에러나면 error로 ,
//httpReducer라는 리듀서함수를 사용하여

import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }
  if (action.type === "SUCCEESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
  return state;
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something goes wrong!",
        });
      }
    },
    [requestFunction]
  );
  return { sendRequest, ...httpState };
};

export default useHttp;
