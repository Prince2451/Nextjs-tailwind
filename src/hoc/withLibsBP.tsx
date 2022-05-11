import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";

const withLibsBP = (WrappedComponent: React.FC<AppProps<any>>) => {
  const hocComponent = ({ ...props }: AppProps<any>) => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );

  return hocComponent;
};

export default withLibsBP;
