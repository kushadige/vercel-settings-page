export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_IS_NAV_OPEN':
            return {
                ...state,
                isNavOpen: action.payload,
            };
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default: 
            return {
                ...state,
            };
    };
};