const menu = {
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },

    
      get appetizers() {
         return this._courses.appetizers
    },
      
      get mains() {
         return this._courses.mains
    },
      get desserts() {
         return this._courses.desserts
    },
    
      
      set appetizers(appetizers) {
         this._courses.appetizers = appetizers;
    },
      
        set mains(mains) {
         this._courses.mains = mains;
    },
      
        set desserts(desserts) {
         this._courses.desserts = desserts;
    },
          
      courses(){
        return {
          appetizers:this.appetizers,
        mains:this.mains,
        desserts:this.desserts
        }
      },
    
//menu.appetizers{'appetizers','app1',1.00}************************************************************
// You do not need to create setter methods, because we don't want anyone to change the values saved to these keys.








      addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
         
        name : dishName,
        price: dishPrice,
      };
     
      return this._courses[courseName].push(dish);  // important
     
        },
      
      getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        //console.log(dishes); ALL DISHES COMES HERE
        const randomIndex = Math.floor(Math.random() * dishes.length);
        //console.log(randomIndex)                            //Random numbers : 0,1,2 [app0,main1,des2]
        return dishes[randomIndex];
      },
      
      generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and total price is ${totalPrice}`
      }
    }
    
    menu.addDishToCourse('appetizers','app1',1.00);   // courseName -- DishName -- PriceName
    menu.addDishToCourse('appetizers','app2',2.00);
    menu.addDishToCourse('appetizers','app3',3.00);
    
    menu.addDishToCourse('mains','main1',1.00);
    menu.addDishToCourse('mains','main2',2.00);
    menu.addDishToCourse('mains','main3',3.00);
    
    menu.addDishToCourse('desserts','des1',1.00);
    menu.addDishToCourse('desserts','des2',2.00);
    menu.addDishToCourse('desserts','des3',3.00);
    
    const meal = menu.generateRandomMeal();
    console.log(meal);
    