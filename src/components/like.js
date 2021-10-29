// Importar React y useState
import React, { useState } from "react";

// Funcion del componente Like
function Like () {
    // useState: state y setState
    let [state, setState] = useState({likes: 0});
    
    // Funcion arrow para incrementar el numero de likes
    const handleIncrement = () => {
        setState({ likes: state.likes + 1 });
    };
    
    // Funcion arrow para decrementar el numero de likes
    const handleDecrement = () => {
        setState({ likes: state.likes - 1 });
    };

    return(
        <div>
            <p>Likes: {state.likes}</p>
            <button id="increment" onClick={handleIncrement}>
                Like
            </button>
            <button id="decrement" onClick={handleDecrement}>
                {" "}
                Dislike
            </button>
        </div>
    );
}

// Exportar el componente Like para ser utilizado en otros archivos
export default Like;