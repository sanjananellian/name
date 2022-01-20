array=[]
function submit() {
var one= document.getElementById("input1").value;
var two= document.getElementById("input2").value;
var three= document.getElementById("input3").value;
var four= document.getElementById("input4").value;
array.push(one)
array.push(two)
array.push(three)
array.push(four)
console.log(array)
document.getElementById("display_name").innerHTML=array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort(){
var sort= array.sort();
console.log(sort)
document.getElementById("display_name").innerHTML=sort;
}

