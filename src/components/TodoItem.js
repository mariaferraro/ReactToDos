import React from 'react';
import '../styles/TodoItem.css';

function TodoItem(props){
    return(
        <li className={`TodoItem ${props.completed && 'TodoItem--active'}`}>
          <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
          <svg height="512" viewBox="0 0 520 520" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Check" data-name="Check"><path d="m79.423 240.755a47.529 47.529 0 0 0 -36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515l250.787-403.892c.041-.067.084-.134.128-.2 2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0 -19.362 1.343q-.135.166-.278.327l-252.922 285.764a10.961 10.961 0 0 1 -15.585.843l-83.94-76.386a47.319 47.319 0 0 0 -31.939-12.438z"/></g></svg>
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}
          </p>
          <span className="Icon Icon-delete">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Trash_icon" width="30" height="30" viewBox="0 0 24 24"><path d="M19,7a1,1,0,0,0-1,1V19.191A1.92,1.92,0,0,1,15.99,21H8.01A1.92,1.92,0,0,1,6,19.191V8A1,1,0,0,0,4,8V19.191A3.918,3.918,0,0,0,8.01,23h7.98A3.918,3.918,0,0,0,20,19.191V8A1,1,0,0,0,19,7Z"/><path d="M20,4H16V2a1,1,0,0,0-1-1H9A1,1,0,0,0,8,2V4H4A1,1,0,0,0,4,6H20a1,1,0,0,0,0-2ZM10,4V3h4V4Z"/><path d="M11,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"/><path d="M15,17V10a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Z"/></svg>
          </span>
        </li>
    );
}

export { TodoItem };