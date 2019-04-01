const initState = {
   stockApiResponse: null,
   authorizationToken: 'Bearer key77Ffcw1rkk4RO0',
   stockApiResponseChangeCount: 0
 }

const DataReducer = (state = initState , action) => {
    switch (action.type) {
        case 'STOCKPRICE_RESPONSE':
            var stockResponse = action.response
            return{
                ...state,
                stockApiResponse: stockResponse.records.map((currElement) => {
                    return currElement.fields
                })
            }
        case "ADD_NEW_OBJECT":
        
            var newArray = state.stockApiResponse
            var obj = action.newStock
            newArray.push(obj)
            return{
                ...state,
                stockApiResponse: newArray
            }
        case "EVENT_ADDED_OR_REMOVED":
           return{
                ...state,
                stockApiResponseChangeCount: (state.stockApiResponseChangeCount + 1)
            }
        default:
            return state
    }
}

export default DataReducer;
