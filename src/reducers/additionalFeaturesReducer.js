import { ADD_FEATURE } from '../actions/additionalFeaturesActions';

export const initialState = {
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
}
const additionalFeaturesReducer = (state = initialState, action) => {
switch (action.type){
case ADD_FEATURE:
    return {
        ...state,
        additionalFeatures: [...state.additionalFeatures,
        {
            name: action.payload,
            price: action.payload
        }]
    };
    default:
        return state;
}
}
export default additionalFeaturesReducer;