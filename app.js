$(document).ready(function() {

  $("#createTeam").on("submit", function(event){
    event.preventDefault()
    let name = $("#name").val()
    let city = $("#city").val()
    let newTeam = new Team(name, city)
    $("#name").val("")
    $("#city").val("")
    loadDropDown()
  })



  $("#selectTeam").on("submit", function(event){
    $("#teamInfo").empty()
    event.preventDefault()
    let selectedTeamName = $("#teamsDropDown").val()
    let team = Team.findTeamByName(selectedTeamName)

    render(`<h2>${team.name}</h2>`, $("#teamInfo"))
    $("#createPlayer").attr('style','display: block')
    $("#playerTable").attr('style','display: block')
    loadTable(team.id)
  })



  $("#createPlayer form").on("submit", function(event){
    event.preventDefault()
    let selectedTeamName = $("#teamsDropDown").val()
    let teamId = Team.findTeamByName(selectedTeamName).id

    let name = $("#p-name").val()
    let age = $("#p-age").val()
    let homeTown = $("#p-homeTown").val()
    let newPlayer = new Player(name, age, homeTown, teamId)

    $("#p-name").val("")
    $("#p-age").val("")
    $("#p-homeTown").val("")

    loadTable(teamId)
  })

})

  function loadDropDown(){
    $("#teamsDropDown").empty()
    store.teams.forEach(function(team){
      render(`<option>${team.name}</option>`, $("#teamsDropDown"))
    })
  }


  function loadTable(teamId){
    $("#playerTable table td").remove()
    let teamPlayers = Player.teamPlayers(teamId)

    if (teamPlayers.length === 0){
        alert("Selected team ha NO players! Add one below:")
    }
    else {
        teamPlayers.forEach(function(player){
        render(`<tr><td>${player.name}</td><td>${player.age}</td><td>${player.hometown}</td></tr>`, $("#playerTable table"))
      })
    }
  }

  function render(html, into){
    into.append(html)
  }
