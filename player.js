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
  }
}

let Player = createPlayer()
