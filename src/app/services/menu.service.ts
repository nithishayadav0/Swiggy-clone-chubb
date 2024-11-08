import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems = [
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Vegg Supreme',
      price: '309/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: 'V Supreme',
      price: '370/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
      name: 'fried-salmon-steak-cooked-green',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGnAPWCpa7cRiRop_FCgv7_i0gu5z-MxtKQ&s",
      name: 'V Supreme',
      price: '459/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic-cheese-pizza',
      price: '879/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      name: 'V Suprem',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuZnWQ3bF1Lvn-EOB7ty4iFjuRW08tWfltg&s",
      name: 'Vegg Supreme',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Red Stiletto Restaurant",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'pizza',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "The Nouveau Table",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Corn PIzza',
      price: '479/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Nouveau Table",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: 'Burger',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
   
    {
      ImageName: "The Nouveau Table",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Veg Supreme',
      price: '370/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Nouveau Table",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg",
      name: 'Juicy burger',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
  

    {
      ImageName: "The Nouveau Table",
      src: "https://static.vecteezy.com/system/resources/previews/015/933/115/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
      name: 'Pani puri',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Nouveau Table",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic cheesa pizza',
      price: '389/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "The Nouveau Table",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQzQqVBk7LmMbMSaEuRy3AkVv1lyGqThm4Q&s",
      name: 'drum sticks',
      price: '670/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Nouveau Table",
      src: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png",
      name: 'pine apple',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
  
    {
      ImageName: "The Nouveau Table",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Nouveau Table",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Winstonian",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcmfO3zma_X5bDB_h5DaMduTuDZlnHqgZ7g&s",
      name: 'Pui platter',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Winstonian",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic cheesa pizza',
      price: '389/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "The Winstonian",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQzQqVBk7LmMbMSaEuRy3AkVv1lyGqThm4Q&s",
      name: 'drum sticks',
      price: '670/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The Winstonian",
      src: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png",
      name: 'pine apple',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
  
    {
      ImageName: "The Winstonian",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "The The Winstonian",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Lettuce Eat Bistro",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Vegg Supreme',
      price: '309/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Lettuce Eat Bistro",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: 'V Supreme',
      price: '370/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "Lettuce Eat Bistro",
      src: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
      name: 'fried-salmon-steak-cooked-green',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Lettuce Eat Bistro",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGnAPWCpa7cRiRop_FCgv7_i0gu5z-MxtKQ&s",
      name: 'V Supreme',
      price: '459/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Lettuce Eat Bistro",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: 'V Supreme',
      price: '370/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic-cheese-pizza',
      price: '879/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      name: 'V Suprem',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcmfO3zma_X5bDB_h5DaMduTuDZlnHqgZ7g&s",
      name: 'Pui platter',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Basic B Burgers",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic cheesa pizza',
      price: '389/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png",
      name: 'pine apple',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
  
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Vegg Supreme',
      price: '309/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcmfO3zma_X5bDB_h5DaMduTuDZlnHqgZ7g&s",
      name: 'Pui platter',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Not Your Grandpa’s Grill",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic cheesa pizza',
      price: '389/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Take It Cheesy",
      src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      name: 'V Suprem',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "Take It Cheesy",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuZnWQ3bF1Lvn-EOB7ty4iFjuRW08tWfltg&s",
      name: 'Vegg Supreme',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Take It Cheesy",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'pizza',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    
    {
      ImageName: "Take It Cheesy",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Corn PIzza',
      price: '479/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Fauna Kitchen",
      src: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      name: 'Burger',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Fauna Kitchen",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'classic cheesa pizza',
      price: '389/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Fauna Kitchen",
      src: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png",
      name: 'pine apple',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
  
    
    {
      ImageName: "Wine O’Clock Tapas Bar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Wine O’Clock Tapas Bar",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Wine O’Clock Tapas Bar",
      src: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: 'Vegg Supreme',
      price: '309/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Chinese Wok",
      src: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
      name: 'V Suprem',
      price: '399/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Chinese Wok",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Chinese Wok",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
      name: 'Burgerr',
      price: '979/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Chinese Wok",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcmfO3zma_X5bDB_h5DaMduTuDZlnHqgZ7g&s",
      name: 'Pui platter',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
    {
      ImageName: "Haute Dog Diner",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s",
      name: 'Fries',
      price: '379/-',
      description: 'Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with a flavorful topping.'
      ,count: 0 
    },
   
  ];

  getMenuItems() {
    return this.menuItems;
  }

  updateItemCount(itemName: string, count: number) {
    const item = this.menuItems.find(menuItem => menuItem.name === itemName);
    if (item) {
      item.count = count;
    }
  }
  resetMenuItemCounts() {
    this.menuItems.forEach(item => item.count = 0);
  }
}
