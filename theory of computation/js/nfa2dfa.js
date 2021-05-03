$(document).ready(function () {
    'use strict';
    $('#input_regex').keyup(function () {
        convert();
    });

 $("#input_string").keyup(function(){

    check();
 })

});


function convert()
{
    var nfa = regexToNfa($('#input_regex').val()),
            dfa;
        $('#alert_error').hide();
        if (typeof nfa === 'string') {
            $('#p_error').text(nfa);
            $('#alert_error').show();
        } else {
            dfa = nfaToDfa(nfa);
            $('svg').attr('width', $('svg').parent().width());
            genAutomataSVG('svg', dfa);
        }
        check();
}

function check()
{
    if($("#input_regex").val()=="")
    {
        
        return
    }
    else if($("#input_string").val()=="")
    {
        $("#input_string").removeClass("is-valid")
        $("#input_string").addClass("is-invalid")
        
        return
    }
    else
    {
        $("#input_regex").removeClass("is-invalid")
        $("#input_regex").addClass("is-valid")

        $("#input_string").removeClass("is-invalid")
        $("#input_string").addClass("is-valid")
    }
    var regex=new RegExp($("#input_regex").val());
    var string=$("#input_string").val();
    var m;
    var arr=[]
    var c=0;
    do
    {
         m=regex.exec(string)
         
         if(m!=null&&m[0]!="")
         {
         arr.push(m[0]);
         string=string.replace(m[0],'@');
         
         }
         c++;
    }while(m&&c<300);

    var s=$("#input_string").val();
    var res="";

    if(arr.length==1&&arr[0].length==s.length)
    {
        $("#input_string").removeClass("is-invalid")
        $("#input_string").addClass("is-valid")

    }
    else
    {
        $("#input_string").removeClass("is-valid")
        $("#input_string").addClass("is-invalid")
        
    }

}
