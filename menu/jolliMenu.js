// import * as firebase from "firebase/app"
// import "firebase/firestore";

const foodsJolli =[
     {
        id: '1',
        name: 'Champ',
        price: 165.00,
        image: require('../assets/Champ.png')
    },  
    {
        id: '2',
        name: 'Bacon Champ',
        price:  208.00,
        image: require('../assets/bChamp.png')
    },  
    {
        id: '3',
        name: 'Amazing Aloha Champ',
        price:  66.00,
        image: require('../assets/AlohaChamp.png')
    },  
    {
        id: '4',
        name: 'YumBurger Value Meal',
        price: 39.00,
        image: require('../assets/YumV.png')
    },  
    {
        id: '5',
        name: 'YumBurger Solo',
        price:  54.00,
        image: require('../assets/YumS.png')
    },  
    {
        id: '6',
        name: 'Cheesy YumBurger ',
        price:  77.00,
        image: require('../assets/CYVM.png')
    },  
    {
        id: '7',
        name: 'Cheesy YumBurger Solo',
        price:  54.00,
        image: require('../assets/CYS.png')
    },  
    {
        id: '8',
        name: 'Bacon Cheesy YumBurger',
        price:  94.00,
        image: require('../assets/BCYVM.png')
    },  

]

// const db = firebase.firestore();
// const res = await db.collection('Menu').doc('Jollibee').set(foodsJolli);
// if (res) {
//     returnData.code = 200;
//     returnData.message = "Saving is successful"
//     returnData.result = result;
// }

// return returnData;

export default foodsJolli;