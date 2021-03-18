import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface IAppState {
    // admin: IAdminState;
}

export const reducers: ActionReducerMap<IAppState> = {
    // admin: adminReducer,
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];