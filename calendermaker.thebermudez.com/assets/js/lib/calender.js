var CalenderMonthdata = {
//calender month data so i can generate proper calender for month
    0: {
        name: "January",
        days: 31, 
        color: "rgb(66, 134, 244)", 
        calenderbackgroundColor: "linear-gradient(to left, #005aa7, #fffde4)"},

    1: {
        name: "February",
        days: 28, 
        color: "rgb(179, 105, 239)", 
        calenderbackgroundColor:"linear-gradient(to left, #3494e6, #ec6ead)"},

    2: {
        name: "March",
        days: 31, 
        color: "rgb(77, 234, 205)", 
        calenderbackgroundColor: "linear-gradient(to left, #007991, #78ffd6)"},

    3: {
        name: "April",
        days: 30, 
        color: "rgb(77, 234, 173)", 
        calenderbackgroundColor: "linear-gradient(to right, #11998e, #38ef7d)"},

    4: {
        name: "May",
        days: 31, 
        color: "rgb(58, 255, 87)", 
        calenderbackgroundColor: "linear-gradient(to left, #11998e, #38ef7d)"},

    5: {
        name: "June",
        days: 30, 
        color: "rgb(229, 32, 107)", 
        calenderbackgroundColor: "linear-gradient(to right, #da4453, #89216b)"},

    6: {
        name: "July",
        days: 31, 
        color: "rgb(255, 108, 89)", 
        calenderbackgroundColor: "linear-gradient(to right, #f85032, #e73827)"},

    7: {
        name: "August",
        days: 31, 
        color: "rgb(255, 147, 89)", 
        calenderbackgroundColor: "linear-gradient(to right, #fc4a1a, #f7b733)"},

    8: {
        name: "September",
        days: 30, 
        color: "rgb(255, 194, 89)", 
        calenderbackgroundColor: "linear-gradient(to left, #fc4a1a, #f7b733)"},

    9: {
        name: "October",
        days: 31, 
        color: "rgb(255, 156, 7)", 
        calenderbackgroundColor: "linear-gradient(to left, #ffb347, #ffcc33)"},

    10: {
         name: "November",
         days: 30, 
         color: "rgb(255, 226, 7)", 
         calenderbackgroundColor: "linear-gradient(to right, #fffc00, #ffffff)"},

    11: {
         name: "December",
         days: 31, 
         color: "rgb(7, 193, 255)", 
         calenderbackgroundColor: "linear-gradient(to right, #360033, #0b8793)"},

}

var now = new Date();
var month = now.getMonth();
var calender = document.getElementById("calender");
var rowNumber = 0;
var table = document.createElement('table'), tr, td, row, cell;
var calenderDays = CalenderMonthdata[month].days 
var calenderMonthName = CalenderMonthdata[month].name
var calenderColor = CalenderMonthdata[month].color
var calenderBackgroundColor = CalenderMonthdata[month].calenderbackgroundColor
var specificDay = {}
var todoText = 0
var gettd = document.getElementsByTagName('td');
var tdHTML = ""
var clickedDate = ''

//making a loop to figure out how many calender squares to make
for (row = 0; row < (Math.ceil(calenderDays)/7); row++) {
    tr = document.createElement("tr");
    for (cell = 0; cell < 7; cell++) {
        td = document.createElement("td");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.getElementById("calender").appendChild(table);

//this loop gets the dates right on the calender
//this loop is to create an object with the keys being the days so i can assign events to the keys and have to information be retained
for (i = 1; i < calenderDays + 1; i++) {
    gettd[i - 1].innerHTML = [i];
    specificDay[i] = gettd[i].innerHTML
}

//all of that up top was generating the calender format and presentation depending on month
//going to change the color and month of the calender depending on the month

function changeMonth(month) {
    var calenderMonthName = CalenderMonthdata[month].name
    var calenderDays = CalenderMonthdata[month].days 
    var calenderColor = CalenderMonthdata[month].color
    var calenderBackgroundColor = CalenderMonthdata[month].calenderbackgroundColor
    $('#container').css("backgroundColor", calenderColor);
    $('body').css("background", calenderBackgroundColor);
    document.getElementById("calenderMonthName").innerHTML = calenderMonthName;
};

changeMonth(month);
//starting logic on how to add events to the calender
//1 now that calender has been generated we can call on specific parts of it now too so
//have buttons change the date on click
$('#leftButton').click(function(){
    month = month -= 1
    changeMonth(month);
});

$('#rightButton').click(function(){
    month = month += 1
    changeMonth(month);
});

$('td').click(function(){
        $('#dateof').html(now.getMonth() + 1 + "/" + this.innerHTML + "/" + now.getFullYear());
        $("#container").fadeOut(500, function(){
        $("#container").css("display", "none");
        $("#schedule").fadeIn(500);
        clickedDate = 5
    });  
    return clickedDate
});

eventdays = {};


$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new event text from input
        var todoText = ($(this).val());
        $(this).val("");
        var div = '<div>todoText</div>';
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        //this loop is made to save the event text to a variable so i can use it later to show what events you have for that day
         for(var i = 0; i < 29; i++) {
            if(eventdays[i] == null) {
                eventdays[i] = todoText;
                return(eventdays[i]);
                specificDay.clickedDate.push(eventdays[i]);
            }
        }
    }
});


$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
    //i need to eventually make it so when you remove a event the eventday variable for that event gets set to null
        $(this).remove();
    });
    event.stopPropagation();
});