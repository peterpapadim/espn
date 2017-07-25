let store = {players: [], teams: []}

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
    $("#teamInfo").children().remove()
    event.preventDefault()
    let selectedTeam = $("#teamsDropDown").val()
    let teamObject = store.teams.filter(function(team){
	     return team.name === selectedTeam
    })[0]
    $("#teamInfo").append(`<h2>${teamObject.name}</h2>`)
    $("#createPlayer").attr('style','display: block')
    $("#playerTable").attr('style','display: block')
    loadTable(teamObject.id)
  })



  $("#createPlayer form").on("submit", function(event){
    event.preventDefault()
    let selectedTeam = $("#teamsDropDown").val()
    let teamObject = store.teams.filter(function(team){
       return team.name === selectedTeam
    })[0]

    let name = $("#p-name").val()
    let age = $("#p-age").val()
    let homeTown = $("#p-homeTown").val()
    let newPlayer = new Player(name, age, homeTown, teamObject.id)

    $("#p-name").val("")
    $("#p-age").val("")
    $("#p-homeTown").val("")

    loadTable(teamObject.id)
  })

})

  function loadDropDown(){
    $("#teamsDropDown").children().remove()
    store.teams.forEach(function(team){
      $("#teamsDropDown").append(`<option>${team.name}</option>`)
    })
  }


  function loadTable(teamId){
    $("#playerTable table td").remove()
    let teamPlayers = store.players.filter(function(player){
	       return player.teamId === teamId
	  })

    if (teamPlayers.length === 0){
      alert("Selected team ha NO players! Add one below:")
    }
    else {
        teamPlayers.forEach(function(player){
        $("#playerTable table").append(`<tr><td>${player.name}</td><td>${player.age}</td><td>${player.hometown}</td></tr>`)
      })
    }
  }
