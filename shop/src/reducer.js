const reducer = (state, action) => {
    if (action.type === 'CEAR_LIST') {
        return {...state, shop: [] }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            shop: state.shop.filter((shopItem) => shopItem.id !==action.payload),

        }
    }
    if (action.type === 'INCREASE') {
        let tempShop = state.shop.map((shopItem) => {
            if (shopItem.id === action.payload) {
                return { ...shopItem, amount: shopItem.amount + 1 }
            }
            return shopItem
        })
        return { ...state, shop: tempShop }
    }
    if (action.type === 'DECREASE') {
        let tempShop = state.shop.map((shopItem) => {
            if (shopItem.id === action.payload) {
                return { ...shopItem, amount: shopItem.amount - 1 }
            }
            return shopItem
        })
        .filter((shopItem) => shopItem.amount !== 0)
        return { ...state, shop: tempShop }
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.shop.reduce((shopTotal, shopItem) => {
            const { price, amount } = shopItem
            const itemTotal = price * amount

            shopTotal.total += itemTotal
            shopTotal.amount += amount
            return shopTotal
        },
        {
            total: 0,
            amount: 0,
        }
        )
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }
    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, shop: action.payload, loading: false }
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempShop = state.shop.map((shopItem) => {
            if (shopItem.id === action.payload.id) {
                if (action.payload.type === 'inc') {
                    return { ...shopItem, amount: shopItem.amount + 1 }
                }
                if (action.payload.type === 'dec') {
                    return { ...shopItem, amount: shopItem.amount - 1 }
                }
            }
            return shopItem
        })
        .filter((shopItem) => shopItem.amount !== 0)
        return { ...state, cart: tempShop }
    }
    throw new Error('does not match any type')
}

export default reducer