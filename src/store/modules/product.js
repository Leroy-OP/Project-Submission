const state ={
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Mercedes G-wagon",
            itemPrice : "KSH 5,000,000",
            itemQuantity : 30,
            itemImage: '/public/Images/G - Wagon.jpeg',
            description:'If you are looking for luxury compatible in all environments then search no more'
      },
      {
            itemNumber: 2,
            itemName : "Mercedes Gle-Coupe",
            itemPrice : "KSH 10,000,000",
            itemQuantity : 4,
            itemImage: '/public/Images/2024 Mercedes-Benz GLE 63s Coupe.jpeg',
            description:'With this model you move to your work place in elegance'
      },
     {
             itemNumber: 3,
             itemName : "BMW x6",
             itemPrice : "KSH 7,000,000",
             itemQuantity : 10,
             itemImage: '/public/Images/download (1).jpeg',
             description:'Impress your work mates and collegues in late night company dinners'
         },
         {
             itemNumber: 4,
             itemName : "Audi Q5",
             itemPrice : "KSH 8,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Audi Q5 45 TFSI quattro Technology 2021- ₹63 lakh _ Real-life review.jpeg',
            description:'You will never be disappointed by the speed perfomance of this vehicle '
         }, 
         {
             itemNumber: 5,
             itemName : "Audi q7",
             itemPrice : "KSH 1,100,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (2).jpeg',
             description:'This vehicle is flexible as it complements perfomance with practicability'
         },
         {
             itemNumber: 6,
             itemName : "Range rover sport",
             itemPrice : "KSH 6,500,000",
             itemQuantity : 30,
             itemImage: '/public/Images/2023 Range Rover Sport in Borasco Grey, Perfect Specs !.jpeg',
            description:'A vehicle that prompts other drivers to drive away in shame due to its solid and shouting aura'
         },
         {
             itemNumber: 7,
             itemName : "Landrover Discovery",
             itemPrice : "KSH 8,050,000",
             itemQuantity : 30,
             itemImage: '/public/Images/2021 Land Rover Discovery HSE, White and Black Specs !.jpeg',
             description:'This vehicle allows you to go for camping with family and friends as it has big room'
         },
         {
          itemNumber: 8,
             itemName : "Landrover Defender",
             itemPrice : "KSH 9,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (3).jpeg',
             description:'Similar to G-Wagon this is luxury in hostile environments'
         },
        {
          itemNumber: 9,
             itemName : "Bentley",
             itemPrice : "KSH 5,000,0000",
             itemQuantity : 50,
             itemImage: '/public/Images/download (4).jpeg',
            description:'Musicians and celebrities come gather here!'
        },
        {
          itemNumber: 10,
             itemName : "Lamborghini Urus",
             itemPrice : "KSH 55,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (5).jpeg',
           description:'Sportsmen would enter their training facilities with respect with this italian machine'
        },
        {
          itemNumber: 11,
             itemName : "Rolls Royce",
             itemPrice : "KSH 12,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/rolls royce phantom chanel - luxury car.jpeg',
           description:'Great all time CEOs would travel in pomp and glory with this luxurious model'
        },
        {
          itemNumber: 12,
             itemName : "Ford Ranger Predator",
             itemPrice : "KSH 9,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Grey 2023 Ford Ranger Predator Widebody Build.jpeg',
           description:'Engineers and architects this well suites you!'
        },
        {
          itemNumber: 13,
             itemName : "Mercedes E Class",
             itemPrice : "KSH 6,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Blue Mercedes.jpeg',
           description:'Content creators and social media personalities here is a vibe.'
        },
        {
          itemNumber: 14,
             itemName : "Mazda Cx5",
             itemPrice : "KSH 7,500,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Mazda CX-5.jpeg',
           description:'Gentlemen,your girlfriends would blush more if you gift them this power SUV'
        },
        {
          itemNumber: 15,
             itemName : "Porsche Cayenne",
             itemPrice : "KSH 4,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Porsche Cayenne Collective on Instagram_ _Cayenne Turbo Coupé in Nogaro Blue 📸 @paulmillerporsche_.jpeg',
           description:'The Gen Z teenage dream model'
        },
        {
          itemNumber: 16,
             itemName : "Jeep Wrangler",
             itemPrice : "KSH 3,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (6).jpeg',
           description:'Traverse the rugged terrains with majesty in this invincible piece of machinery'
        },
        {
          itemNumber: 17,
             itemName : "Landcruiser prado",
             itemPrice : "KSH 5,500,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (7).jpeg',
           description:'This luxurious piece of model would fit well in a presidential motorcade'
        },
        {
          itemNumber: 18,
             itemName : "Lexus",
             itemPrice : "KSH 12,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/Lexus lx570 black.jpeg',
           description:'Even the head of state himself has this as one oh his favourites!'
        },
        {
          itemNumber: 19,
             itemName : "Mitsubishi Outlander",
             itemPrice : "KSH 13,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/2023 Mitsubishi Outlander PHEV Tops Out At $49,995 _ Carscoops.jpeg',
           description:'Manouvre through the woods with this unique suv with long lasting abilities'
        },
        {
          itemNumber: 20,
             itemName : "Mazda Axella",
             itemPrice : "KSH 9,000,000",
             itemQuantity : 30,
             itemImage: '/public/Images/download (8).jpeg',
           description:'First time car buyers this vehicle well suites you as it is styling and high performing yet cost efficient'
        },
    ],
}
const getters ={
stock: (state) => state.stockDetails
}
const actions ={

}
const mutations ={

}
export default {
    state,
    getters,
    actions,
    mutations
}

