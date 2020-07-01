export const Types = {
    setActive: 'REDUX_ACTION_setActive',
    addToCart: 'REDUX_ACTION_addToCart',
    showSidebar : 'REDUX_ACTION_showSidebar',
    editItem : 'REDUX_ACTION_editItem',
    deleteItem : 'REDUX_ACTION_deleteItem',
};

export const setActive = (data) => ({
    type: Types.setActive,
    active: data.active,
    activated : data.activated
});
export const addToCart = (data) => ({
    type: Types.addToCart,
    cart: data
});
export const sidebar = (data) => ({
    type: Types.showSidebar,
    showSidebar: data.showSidebar
});
export const editItem = (data) => ({
    type: Types.editItem,
    singleItem: data.singleItem
});
export const deleteItem = (data) => ({
    type: Types.deleteItem,
    singleItem: data.singleItem
});