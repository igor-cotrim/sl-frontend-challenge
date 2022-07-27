import { lazy } from "react";

export const Content = lazy(() => import("./Content"));
export const List = lazy(() => import("./List"));
export const ListItem = lazy(() => import("./ListItem"));
export { default as Loading } from "./Loading";
