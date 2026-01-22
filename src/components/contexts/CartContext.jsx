import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: updatedItems, totalItems, totalPrice };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: updatedItems, totalItems, totalPrice };
    }

    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, {
          type: "REMOVE_ITEM",
          payload: { id: action.payload.id },
        });
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );

      const totalItems = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: updatedItems, totalItems, totalPrice };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

// Context
const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: item.quantity || 1 },
    });
    setIsCartOpen(true); // opcional: abre automaticamente
  };

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
