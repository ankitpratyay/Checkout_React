const INITIAL_STATE = {
  carts: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
    /*   return {
        ...state,
        carts: [...state.carts, action.payload],
      }; */
      const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
      if(IteamIndex >= 0){
          state.carts[IteamIndex].qnty +=1
          return {
              ...state,
              carts:[...state.carts]
          }
      }else{
          const temp = {...action.payload,qnty:1}
           return {
              ...state,
              carts: [...state.carts, temp]
          }
      }
      case "RMV_CART":
        const data = state.carts.filter((el)=>el.id !== action.payload); 
        // console.log(data);

        return {
            ...state,
            carts:data
        }

    default:
      return state;
  }
};