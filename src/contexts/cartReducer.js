const Storage = (cartItems) => {
    localStorage.setItem('products', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

const Extra = (total_temp) => {
    let flat = localStorage.getItem('donation');
    let valor = 800;
    let donation = 0;
    let total = parseInt(total_temp);
    if (parseInt(flat) === 1) {
        total = total + valor;
        donation = donation + valor;
    }
    return { total: total.toFixed(2), donation: donation };
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total_temp = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    let extra = Extra(total_temp);
    let total = extra.total;
    let donation = extra.donation;
    return { itemCount, total, donation }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload
                })
            } else {
                state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity += action.payload.quantity
            }

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "ADD_EXTRA":
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CLEAR":
            return {
                cartItems: [],
                ...sumItems([]),
            }

    }
}