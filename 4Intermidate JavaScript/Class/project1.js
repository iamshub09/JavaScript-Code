class Media {

    constructor(title)
     {
       this._title = title;
       this._isCheckedOut = false;
       this._ratings = [];
     }
   
   get title(){
     return this._title;
   }
   get ratings(){
     return this._ratings;
   }
   
   get isCheckedOut(){
     return this._isCheckedOut;
   }
   set isCheckedOut(value){
     this._isCheckedOut = value;
   }
   
   toggleCheckOutStatus(){
    /*
     if (this._isCheckedOut === true)
       {
         return this._isCheckedOut===false; 
       }
     else
     {(this._isCheckedOut === false)
       return this._isCheckedOut===true; 
     }
     */
     this._isCheckedOut = !this._isCheckedOut;
   }
   getAverageRating()
     {
   let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum/lengthOfArray;
     } 
     
     addRating(value2)
     {
       this.ratings.push(value2);
     }
   }
   /*
   
   Next, we''ll build a Book class that extends Media. If you feel comfortable building the Book class on your own, give it a shot. If not, use the steps below to help you along the way.
   
   Whether you want to follow the steps or not, use the list of properties, getters, and methods as a reference.
   
   Book
   Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
   Getters: all properties have a getter
   Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating
   
   */
   
   class Book extends Media{
     constructor(author,title,pages)
     {
       super(title);
       this._author = author;
       this._pages = pages;
     }
     
    get author()
     {
       return this._author;
     }
     
    get pages()
     {
       return this._pages;
     }
   }
   
   /*Let's see if you can create an entire Movie class using only the property, getter, and method specifications below:
   
   Movie
   properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
   getters: all properties have a getter
   methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating */
   
   class Movie extends Media{
     constructor(director,title,runTime)
     {
       super(title);
       this._director = director;
       this._runTime = runTime;
     }
     
     get director(){
       return this._director;
     }
     
     get runTime(){
       return this._runTime;
     }
   }
   
   let historyOfEverything = new Book('Bill Bryson' , 'A Short History of Nearly Everything' , 544);
   historyOfEverything.toggleCheckOutStatus();
   console.log(historyOfEverything._isCheckedOut);
   historyOfEverything.addRating(4);
   historyOfEverything.addRating(5);
   historyOfEverything.addRating(5);
   console.log(historyOfEverything.getAverageRating());
   
   let speed = new Movie('Jan de Bont', 'speed', 116);
   speed.toggleCheckOutStatus();
   console.log(speed._isCheckedOut);
   speed.addRating(1);
   speed.addRating(1);
   speed.addRating(5);
   console.log(speed.getAverageRating());
   console.log(speed.ratings);