
$(document).ready(function () {
    

    function getMapSize(x) {
        var len = 0;
        for (var count in x) {
                len++;
        }
    
        return len;
    }
    function unique(arr) {
        var u = {}, a = [];
        for(var i = 0, l = arr.length; i < l; ++i){
            if(!u.hasOwnProperty(arr[i])) {
                a.push(arr[i]);
                u[arr[i]] = 1;
            }
        }
        return a;
    }
   
    $("#button_git").click(function(){
        var regix=$("#input_regex").val();
        var rdx = new RandExp(regix);
        var res = rdx.gen();
        let map=new Map()
        str=``;
        var c=0;
        var arr=[];
        console.log(res)
        while (unique(arr).length<10&&c<100) {
            c=c+1;
            res=rdx.gen()
            arr.push(res);  
        }
        arr=unique(arr);
        $(".result").empty()
        $(".result").append("<ul>")
        for(let i=0;i<arr.length;i++)
        {
            $(".result").append(`<li>${arr[i]}</li>`);
        }
            $(".result").append("</ul>")
        
    });
    
})



