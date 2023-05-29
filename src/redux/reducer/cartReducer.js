const INITIAL_STATE = {
  carts: [],
  address: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      /*   return {
        ...state,
        carts: [...state.carts, action.payload],
      }; */
      let newState = JSON.parse(JSON.stringify(state));
      const IteamIndex = newState.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (IteamIndex >= 0) {
        newState.carts[IteamIndex].qnty += 1;
        return {
          ...newState,
          carts: [...newState.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const dltItem = JSON.parse(JSON.stringify(state));
      const IteamIndex_dec = dltItem.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty > 1) {
        dltItem.carts[IteamIndex_dec].qnty -= 1;

        return {
          ...dltItem,
          carts: [...dltItem.carts],
        };
      } else if (state.carts[IteamIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }
      break;
    case "COMPLETE_PAYMENT":
      return {
        carts:[],
        address:[]
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    default:
      return state;
  }
};
