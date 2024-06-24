import { Suspense, lazy } from "react";

const LazyTasks = lazy(() => import("./Tasks"));

export const Tasks = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyTasks {...props} />
  </Suspense>
);
