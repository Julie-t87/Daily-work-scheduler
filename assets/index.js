// current day is displayed at the top of the calendar
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;
  
  // each time block is color-coded to indicate whether it is in the past, present, or future
  $('.time-block').each(function () {
    var time = $(this).data('time')
    var current = moment().hours()
  
    if (current < time) {
      $(this).children('.reminders').addClass('future')
    } else if (current > time) {
      $(this).children('.reminders').addClass('past')
    } else if (current === time) {
      $(this).children('.reminders').addClass('present')
    }
  
  });
  
  // save text input to the local storage
  function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
  };
  
  $(".saveBtn").click(clickHandler)
  
  // retrieve & display text
  $("#9AM").val(localStorage.getItem("9AM"));
  $("#10AM").val(localStorage.getItem("10AM"));
  $("#11AM").val(localStorage.getItem("11AM"));
  $("#12PM").val(localStorage.getItem("12PM"));
  $("#1PM").val(localStorage.getItem("1PM"));
  $("#2PM").val(localStorage.getItem("2PM"));
  $("#3PM").val(localStorage.getItem("3PM"));
  $("#4PM").val(localStorage.getItem("4PM"));
  $("#5PM").val(localStorage.getItem("5PM"));