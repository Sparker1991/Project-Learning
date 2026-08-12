import {createContext, useContext, useState} from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
})

export const ContextProvider = ({children}) => {
    //useState is used to remember a value in a React component
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('')
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setNotification = (message) => {
        _setNotification(message)//set
        setTimeout(() => {//unset
            _setNotification('')
        }, 5000)
    }

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            //on page refresh the user stays authenticated
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    //expose
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

