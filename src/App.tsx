import React from "react";
import RequestProvider from "./contexts/request/";
import RootProvider from "./contexts/RootContext";
import RootContainer from "./pages/containers/RootContainer";

const App: React.FC = () => {
  return (
    <RootProvider>
      <RequestProvider>
        <RootContainer />
      </RequestProvider>
    </RootProvider>
  );
};

export default App;
