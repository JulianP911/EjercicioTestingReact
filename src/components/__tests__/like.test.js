// Importar React, ReactDOM, act y Componente Like
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

// Container
let container;

// Condiciones iniciales que se deben ser ejecutadas antes de cada test
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        ReactDOM.render(<Like/>, container);
    })
})

// Condiciones que sedeben ser ejecutadas una vez el test es ejecutado
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

// Suite de pruebas del componente Like
describe("Suite de prueba del componente Like", () => {
    // Prueba 1
    it("El componente muestra en el parrafo el valor Likes: 0 por default", () => {
        const p = container.querySelector("p");
        expect(p.textContent).toBe("Likes: 0");
    });

    // Prueba 2
    it("Al hacer clic en el boton Like se incrementa en 1 el numero de likes", () => {
        const p = container.querySelector("p");
        const botonIncrementar = container.querySelector("#increment");
        act(() => {
            botonIncrementar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        expect(p.textContent).toBe("Likes: 1");
    });

    // Prueba 3
    it("Al hacer clic en el boton Dislike se decrementa en 1 el numero de likes", () => {
        const p = container.querySelector("p");
        const botonDecrementar = container.querySelector("#decrement");
        act(() => {
            botonDecrementar.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        expect(p.textContent).toBe("Likes: -1");
    });
});