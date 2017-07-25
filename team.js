function createTeam(){

  let teamId = 0

  return class {
    constructor(name, city){
      this.name = name
      this.city = city
      this.id = ++teamId
      store.teams.push(this)
    }

    static findTeamByName(teamName){
      return store.teams.filter(function(team){
         return team.name === teamName
      })[0]
    }
  }

}

let Team = createTeam()
