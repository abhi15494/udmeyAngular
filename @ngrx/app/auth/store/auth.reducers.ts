export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducre(state, action = initialState) {
    return state;
}