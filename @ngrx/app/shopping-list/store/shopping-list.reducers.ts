import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListAction from "./shopping-list.actions";

export interface State {
    ingredients: Ingredient[],
    editedIngredients: Ingredient,
    editedIngredientIndex: number
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    editedIngredients: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(
    state = initialState,
    action: ShoppingListAction.ShoppingListAction
) {
    switch(action.type){
        case ShoppingListAction.ADD_INGREDIENT:
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListAction.ADD_INGREDIENTS:
            return {
                ...state, ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListAction.UPDATE_INGREDIENT: {
            state.ingredients.splice(
                state.editedIngredientIndex, 1,
                action.payload.ingredient
            )
            return {
                ...state,
                editedIngredients: null,
                editedIngredientIndex: -1
            }
        }
        case ShoppingListAction.DELETE_INGREDIENT: {
            state.ingredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                editedIngredients: null,
                editedIngredientIndex: -1
            }
        }
        case ShoppingListAction.START_EDIT: {
            return {
                ...state,
                editedIngredients: {...state.ingredients[action.payload]},
                editedIngredientIndex: action.payload
            };
        }
        case ShoppingListAction.STOP_EDIT: {
            return {
                ...state,
                editedIngredients: null,
                editedIngredientIndex: -1
            };
        }
        default:
            return state;
    }
}