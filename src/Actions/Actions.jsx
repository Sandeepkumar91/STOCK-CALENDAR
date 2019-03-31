import axios from 'axios';


export const getStockPrice = () => {
    return (dispatch,getState) => {
        var config = {
            headers: {'Authorization': getState().data.authorizationToken}
       };
    
       var url = 'https://api.airtable.com/v0/appM4NkcXQ60JHMdy/StocksList';

        axios.get(url, config)
                .then(response => {
                    debugger
                    dispatch({
                        type: "STOCKPRICE_RESPONSE",
                        response: response.data
                    })
                }).catch((error) => {
                      debugger 
                }
            );
        }
    }    