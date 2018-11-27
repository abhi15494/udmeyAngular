import * as fromAuth from "../auth/store/auth.reducers";
import * as fromShoppingList from "../shopping-list/store/shopping-list.reducers";

export interface appState {
    auth: fromAuth.State,
    shoppingList: fromShoppingList.State
}