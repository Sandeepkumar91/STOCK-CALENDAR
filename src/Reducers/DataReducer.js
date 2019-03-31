const initState = {
   stockApiResponse: null,
   authorizationToken: 'Bearer key77Ffcw1rkk4RO0',
 }

const DataReducer = (state = initState , action) => {
    debugger
    switch (action.type) {
        case 'STOCKPRICE_RESPONSE':
            var stockResponse = action.response
            return{
                ...state,
                stockApiResponse: stockResponse.records.map((currElement) => {
                    return currElement.fields
                })
            }
        default:
            return state
    }
}

export default DataReducer;
