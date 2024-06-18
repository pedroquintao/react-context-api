import { useEffect, useMemo, useReducer } from "react";
import { createContext, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

    const estadoInicial = [];

    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial)
    const [quantidade,setQuantidade] = useState(0);
    const [valorTotal,setValorTotal] = useState(0);

    const { totalTemp, quantidadeTemp } = useMemo(() => {
        return carrinho.reduce(
          (acumulador, produto) => ({
            quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
            totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
          }),
          {
            quantidadeTemp: 0,
            totalTemp: 0,
          }
        );
      }, [carrinho]);
    
      useEffect(() => {
        setQuantidade(quantidadeTemp);
        setValorTotal(totalTemp);
      });
    

    const context = {
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
    }

    return (
        <CarrinhoContext.Provider value={ context }>
            { children }
        </CarrinhoContext.Provider>
    )
}