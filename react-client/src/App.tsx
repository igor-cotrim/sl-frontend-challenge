import { Suspense } from "react";

import { Content, List } from "./components";

const App = () => (
  <Suspense fallback={<div>Loading... </div>}>
    <Content>
      <List />
    </Content>
  </Suspense>
);

export default App;
