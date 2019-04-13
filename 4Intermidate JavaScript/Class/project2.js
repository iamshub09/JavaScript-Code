class School{
    constructor(name, level, numberOfStudents)
    {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    
    get name(){
   return this._name;   
    }
    
    get level(){
      return this._level;  
    }
    
    get numberOfStudents(){
      return this._numberOfStudents;  
    }
    
    set numberOfStudents(newNumberOfStudents){
      if(typeof this.newNumberOfStudents===number)
        {
          this.numberOfStudents = newNumberOfStudents;
        }
      else
        {
          console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    
    quickFacts()
    {
      console.log(` ${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    
    static pickSubstituteTeacher(substituteTeachers)
    {
   const randomNumber = Math.floor(Math.random()*5);
        return substituteTeachers[randomNumber];
    }
    
  }
  /*Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.*/
  class PrimarySchool extends School{
     constructor(name, numberOfStudents, pickupPolicy )
    {
      super(name,'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    
    get pickupPolicy()
    {
      return this._pickupPolicy;
    }
  }
  
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents )
      this._sportsTeams = sportsTeams;
    }
      get sportsTeams()
    {
      return this._sportsTeams;
    }
  }
  /*
  Create a PrimarySchool instance with the following properties:
  
  Name: 'Lorraine Hansbury'
  Number of Students: 514
  Pickup Policy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'*/
  let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' );
  console.log(lorraineHansbury);
  console.log("    ");
  lorraineHansbury.quickFacts();
  PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log("    ");
  
  let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );
  console.log(alSmith);
  console.log("    ");
  console.log(alSmith.sportsTeams);
  