import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
    const { id, size, color, quantity } = product;
    const existingItem = cart.find(item => item.id === id && item.size === size && item.color === color);

    if (existingItem) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity, selected: true }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { ...product, selected: true }]);
    }
  };

  const removeFromCart = (product) => {
    const { id, size, color } = product;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, selected: false }
          : item
      ).filter(item => item.selected)
    );
  };

  const updateCartItemQuantity = (productId, size, color, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, onAddToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
























// import React, { createContext, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const onAddToCart = (product) => {
//     const { id, size, color, quantity } = product;
//     const existingItem = cart.find(item => item.id === id && item.size === size && item.color === color);

//     if (existingItem) {
//       setCart(prevCart =>
//         prevCart.map(item =>
//           item.id === id && item.size === size && item.color === color
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       );
//     } else {
//       setCart(prevCart => [...prevCart, { ...product, itemNum: uuidv4() }]);
//     }
//   };

//   const removeFromCart = (itemNum) => {
//     setCart(prevCart =>
//       prevCart.filter(item => item.itemNum !== itemNum)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, onAddToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartContext };
