import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);
    const [quantidade,setQuantidade] = useState(0);
    const [valorTotal,setValorTotal] = useState(0);

    const context = {
        carrinho,
        setCarrinho,
        quantidade,
        setQuantidade,
        valorTotal,
        setValorTotal
    }

    return (
        <CarrinhoContext.Provider value={ context }>
            { children }
        </CarrinhoContext.Provider>
    )
}