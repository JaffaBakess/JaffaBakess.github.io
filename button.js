var called = 0;
function callME() {
  called += 1;
  document.getElementById("called").innerHTML = called;
}
var answered = 0;
function answerME() {
  answered += 1;
  document.getElementById("answered").innerHTML = answered;
}
var slam = 0;
function slamME() {
  slam += 1;
  document.getElementById("slam").innerHTML = slam;
}
var tps = 0;
function tpsME() {
  tps += 1;
  document.getElementById("tps").innerHTML = tps;
}
