import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue){
    
  //--- Initial State ---//
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() =>{
    setTimeout(() => {
      try{

        //--- Saving To-Dos on Local Storage ---//
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        //--- If an item already exist or not ---//
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem);

      } catch(error){
        setError(error);
      } finally {
        setLoading(false);
      }

    }, 1000);
  });
  

  //--- Save item into Local Storage ---//
  const saveItem = (newItem) => {
    try {

      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);

    } catch(error){
        setError(error);
    }
  };

  //--- Returning the data we neek ---//
  return {
    item,
    saveItem,
    loading,
    error,
  };

}

export { useLocalStorage };
