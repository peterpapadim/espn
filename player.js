function createPlayer(){

  let playerId = 0

  return class {
    constructor(name, age, homeTown, teamId){
      this.name = name
      this.age = age
      this.hometown = homeTown
      this.teamId = teamId
      this.id = ++playerId
      store.players.push(this)
    }

    static teamPlayers(teamId){
      return store.players.filter(function(player){
  	       return player.teamId === teamId
  	  })
    }

  }
}

let Player = createPlayer()
