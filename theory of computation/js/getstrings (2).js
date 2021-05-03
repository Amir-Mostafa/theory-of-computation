$(document).ready(function () {
    


    $("#button_git").click(function(){
        var regix=$("#input_regex").val();
        import RandExp from "randexp";
        const randexp = new RandExp(/[a-z]{6}/);
        randexp.gen();
    });
    
})



