import React, { Fragment, ReactNode } from "react";
import Notifications from "react-notify-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "../modules/createStore";

const store = createStore();

export default ({ element }: { element: ReactNode }) => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <Fragment>
        <Notifications />
        {element}
      </Fragment>
    </PersistGate>
  </Provider>
);
