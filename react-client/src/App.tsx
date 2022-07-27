import { Suspense } from "react";

import { Content, List, Loading } from "./components";

const App = () => (
  <Suspense fallback={<Loading />}>
    <Content>
      <List />
    </Content>
  </Suspense>
);

export default App;
