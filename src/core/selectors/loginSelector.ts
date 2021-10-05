import { IState } from "../../core/types";

export const getLoginSelector = ({ login }: IState) => login; //store и возвращаем только то, что нужно, можно login.email