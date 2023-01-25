import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props){

    const [isRotated, setIsRotated] = React.useState(false);

    const onClickButton = () => {
         props.setOpenModal(!props.openModal);
          setIsRotated(!isRotated)    
    };

    return(
        <button 
            className={`CreateTodoButton ${isRotated ? 'rotated' : ''}`}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };