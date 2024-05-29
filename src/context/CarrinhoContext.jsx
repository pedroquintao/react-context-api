import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);

    const context = {
        carrinho,
        setCarrinho
    }

    return (
        <CarrinhoContext.Provider value={ context }>
            { children }
        </CarrinhoContext.Provider>
    )
}