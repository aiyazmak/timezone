(function update_time(){

var e = moment().tz("America/Edmonton").format('h:mm:ss a');
var h = moment().tz("US/Central").format('h:mm:ss a');
var nm = moment().tz("Asia/Kolkata").format('h:mm:ss a');
$('.edmon').text('Edmonton,Alberta: ' + e);
$('.houston').text('Houston,Texas: ' +  h);
$('.mum').text('Mumbai,Maharashtra: ' + nm);
setTimeout(update_time, 1000);




})();


//var dispAll = moment.tz.names();
//console.log(dispAll);
