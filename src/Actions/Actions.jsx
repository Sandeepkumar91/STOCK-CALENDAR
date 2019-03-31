import axios from 'axios';


export const getStockPrice = () => {
    return (dispatch,getState) => {
        var config = {
            headers: {'Authorization': getState().data.authorizationToken}
       };
    
       var url = 'https://api.airtable.com/v0/appM4NkcXQ60JHMdy/StocksList';

        axios.get(url, config)
                .then(response => {
                
                    dispatch({
                        type: "STOCKPRICE_RESPONSE",
                        response: response.data
                    })
                }).catch((error) => {
                      
            }
        );
    }
} 
export const addNewObject = (newStock) => {
    return {
        type: 'ADD_NEW_OBJECT',
        newStock: newStock
    }
} 
export const addedOrRemovedEvent = () => {
    return {
        type: 'EVENT_ADDED_OR_REMOVED',
    }
}   