import React, { useReducer } from "react";
import { paymentReducer } from "../reducers/payment-reducer";
import { getCourseInfoPayment, getFreeCourse } from "../actions/payment-action";

const PaymentContext = React.createContext();

const initialState = {
  isGettingInfoPayment: false,
  isGettedInfoPayment: false,
  isGettingFreeCourse: false,
  isGettedFreeCourse: false,
  infoPayment: null,
  freeCourseLink: null,
};

const PaymentProvider = (props) => {
  const [state, dispatch] = useReducer(paymentReducer, initialState);

  return (
    <PaymentContext.Provider
      value={{
        state,
        getCourseInfoPayment: getCourseInfoPayment(dispatch),
        getFreeCourse: getFreeCourse(dispatch),
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
};

export { PaymentProvider, PaymentContext };
