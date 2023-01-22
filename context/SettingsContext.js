import { createContext, useReducer } from 'react';
import settingsReducer from '../reducer/settingsReducer';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(settingsReducer, {
        isNavOpen: true,
    });

    return (
        <SettingsContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;