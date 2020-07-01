import { createStore } from "redux";
import Reducer from "./Redux.reducer";

const Store = createStore(Reducer);
export default Store;