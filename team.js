function createTeam(){

  let teamId = 0

  return class {
    constructor(name, city){
      this.name = name
      this.city = city
      this.id = ++teamId
      store.teams.push(this)
    }
  }
}

let Team = createTeam()
