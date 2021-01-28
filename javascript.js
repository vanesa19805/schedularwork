 
//THEN the current day is displayed at the top of the calendar *

$("#currentDay").text(moment().format("dddd, MMMM Do"))

//if event has passed time block, change color to gray -using past time css
//if we are current  in in this time change color to red - using present css
// if event has not passed keep block green- using future css
var currentHour= moment().hour()

var myTime= [9,10,11,12,13,14,15,16,17]

console.log(currentHour)

for (let i = 0; i < myTime.length; i++) {
    
    if( currentHour >  myTime[i]  ){
        $("#"+i ).addClass("past")
    }
    if(currentHour === myTime[i]){
        $("#"+i).addClass("present")
    } 
    if(currentHour < myTime[i]){
        $("#"+i).addClass("future")
    }
    if(localStorage.getItem(i)){
        $("#"+i).val(localStorage.getItem(i))
    }
}


//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

$(".input-group-text").on("click",function(){
    var dataID= $(this).attr("data-id")
    var event= $("#"+dataID).val()
    localStorage.setItem(dataID,event)
})

