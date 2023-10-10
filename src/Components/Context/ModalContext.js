import React, { useContext, useState } from "react";

const ModalContext = React.createContext()

export const useModal = () => {

    return useContext(ModalContext)

}

export const ModalProvider = ({children}) => {

    const [modal, setModal] = useState('')

    const toggle = () => setModal(prev => !prev)

    return (
        <ModalContext.Provider value={{
            visible: modal,
            toggle
        }}>
            {children}
        </ModalContext.Provider>
    )
}