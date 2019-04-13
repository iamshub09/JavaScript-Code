const team = {
    _players: [
              {
                firstName: 'shubham',
                            lastName: 'mathur',
                            age: 23
              },
              {
                firstName: 'sonu',
                            lastName: 'balaji',
                            age: 31
              },
              {
                firstName: 'kaku',
                            lastName: 'Sanchez',
                            age: 31
              }
              ],

 
    _games: [
             {
               opponent: 'sak',
                         teamPoints: 42,
                         opponentPoints: 27
              },
              {
               opponent: 'duk',
                         teamPoints: 4,
                         opponentPoints: 7
              },
              {
               opponent: 'muk',
                         teamPoints: 2,
                         opponentPoints: 2
              }
             ],
   
  
    get players(){
      return this.team._players;
    },
    
      get games(){
      return this.team._games;
   },
    
  /*name should not be same in getter and setter */
    
    
    // INSERT NEW ELEMENTS IN AN ARRAY OF OBJECT USING METHODS 
    
    addPlayer(firstName, lastName, age){
      let player ={
       firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player);   // here may be mistake
    },
    
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        points: myPts,
        opponentPoints: oppPts
      };
      this._games.push(game); // error can come
    }
    
  }
  // console all players
  team.addPlayer('RANI', 'MUKHARJII', 28);
  team.addPlayer('prachi', 'sharma', 12);
  team.addPlayer('priyanshi', 'jain', 23);
  console.log(team._players);
  
  // console all game oppoint
  team.addGame('kola', 120, 33);
  team.addGame('dudu', 32, 22);
  team.addGame('tuimur', 33, 22);
  console.log(team._games);
  
  