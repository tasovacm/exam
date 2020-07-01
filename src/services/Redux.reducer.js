import {Types} from "./Redux.actions";

const INITIAL_STATE = {
    men : [{
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Chocolate.jpg' ,
        color : 'Navy' ,
        price : '140' ,
    } , {
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Blanco.jpg' ,
        color : 'Bianco' ,
        price : '120' ,
    } , {
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Nero.jpg' ,
        color : 'Nero' ,
        price : '110' ,
    } , {
        name : 'Court' ,
        imgUrl : 'Mens-193-Royale-Cuoio.jpg' ,
        color : 'Gray' ,
        price : '220' ,
    } , {
        name : 'Court' ,
        imgUrl : 'Mens-193-Royale-Cuoio.jpg' ,
        color : 'LightGray' ,
        price : '210' ,
    }] ,
    women : [{
        name : 'Princess' ,
        imgUrl : 'Womens-192-RoyaleKnit-EnviroKnit-White-Grey.jpg' ,
        color : 'Navy' ,
        price : '180' ,
    } , {
        name : 'Madonna' ,
        imgUrl : 'Womens-193-Royale-Blanco.jpg' ,
        color : 'Bianco' ,
        price : '210' ,
    } , {
        name : 'Queen' ,
        imgUrl : 'Womens-193-Royale-Perforated-Blush.jpg' ,
        color : 'Nero' ,
        price : '550' ,
    } , {
        name : 'Court' ,
        imgUrl : 'Womens-194-RoyaleKnit-Grey.jpg' ,
        color : 'Red' ,
        price : '320' ,
    }] ,
    active : [{
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Chocolate.jpg' ,
        color : 'Navy' ,
        price : '140' ,
    } , {
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Blanco.jpg' ,
        color : 'Bianco' ,
        price : '120' ,
    } , {
        name : 'Royale' ,
        imgUrl : 'Mens-193-Royale-Nero.jpg' ,
        color : 'Nero' ,
        price : '110' ,
    } , {
        name : 'Court' ,
        imgUrl : 'Mens-193-Royale-Cuoio.jpg' ,
        color : 'Gray' ,
        price : '220' ,
    } , {
        name : 'Court' ,
        imgUrl : 'Mens-193-Royale-Cuoio.jpg' ,
        color : 'LightGray' ,
        price : '210' ,
    }] ,
    activated : "men" ,
    cart : {} ,
    showSidebar : false ,
    singleItem : {} ,
    articles : [{
        image : 'article.jpg' ,
        title : 'Responsibility' ,
        text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'
    } , {
        image : 'article.jpg' ,
        title : 'Responsibility 2' ,
        text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'
    } , {
        image : 'article.jpg' ,
        title : 'Responsibility 3' ,
        text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'
    } , {
        image : 'article.jpg' ,
        title : 'Responsibility 4' ,
        text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'
    } , {
        image : 'article.jpg' ,
        title : 'Responsibility 5' ,
        text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,'
    }] ,
    gallery : [{
        id : 1,
        url : "article.jpg"
    } , {
        id : 2,
        url : "article.jpg"
    } , {
        id : 3,
        url : "article.jpg"
    } , {
        id : 4,
        url : "article.jpg"
    } , {
        id : 5,
        url : "article.jpg"
    } , {
        id : 6,
        url : "article.jpg"
    } , {
        id : 7,
        url : "article.jpg"
    } , {
        id : 8,
        url : "article.jpg"
    }]


};

export default function (state = INITIAL_STATE , action) {
    switch (action.type) {
        case Types.setActive:
            console.log ( action.activated );
            return {
                ...state ,
                active : action.active ,
                activated : action.activated
            };
        case Types.addToCart:
            return {
                ...state ,
                cart : { ...state.cart , ...action.cart } ,
            };
        case Types.showSidebar:
            return {
                ...state ,
                showSidebar : action.showSidebar ,
            };
        case Types.editItem:
            let itemKey = Object.keys ( action.singleItem )[0];
            return {
                ...state ,
                cart : {
                    ...state.cart ,
                    [itemKey] : {
                        ...state.cart[itemKey] ,
                        quantity : action.singleItem[itemKey].quantity
                    }
                }
            };
        case Types.deleteItem:
            console.log ( 'action.deleteItem' );
            delete state.cart[action.singleItem[0]];
            return {
                ...state ,
            };
        default: {
            return {
                ...state ,
            }
        }
    }
}