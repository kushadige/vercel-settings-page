export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_IS_NAV_OPEN':
            return {
                ...state,
                isNavOpen: action.payload,
            };
        default: 
            return {
                ...state,
            };
    };
};