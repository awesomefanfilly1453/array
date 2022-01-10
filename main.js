var student_array=[];
function submit(){
    var displayarray=[];
    for (var j=1 ; j<=4; j++)
        {
            var name=document.getElementById("name_of_the_student_"+j).value;
            student_array.push(name);
        }
    var length=student_array.length;
    for (var k=0; k<length ; k++)
        {
            displayarray.push("<h4> NAME = "+student_array[k]+"</h4>");
        }
         document.getElementById("display_name_with_commas").innerHTML=displayarray;
    var removecommas=displayarray.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    var display_sorted_array=[];
      var length=student_array.length;
    for (var k=0; k<length ; k++)
        {
           display_sorted_array.push("<h4> NAME = "+student_array[k]+"</h4>");
        }
     document.getElementById("display_name_with_commas").innerHTML=display_sorted_array;
    var removecommas1=display_sorted_array.join(" ");
     document.getElementById("display_name_without_commas").innerHTML=removecommas1;
}