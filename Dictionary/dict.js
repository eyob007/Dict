$(function(){
$(document).ready(
        function ()
        {
            $("#search_btn").click(
                    function ()
                    {
                        var value=$("#ss").val();
                        //alert(value);
                        $.ajax("dict.php", {
                            "type": "get",
                            "data": 
                                    {"s":value},
                            
                            "dataType": 'json'
                        }).done(ajaxdone).fail(function(){
                            alert('why fail');
                        });
//                       var s= $("#display_area").val();
//                       $("#display_area").val(s+"hi \n");
                   function ajaxdone(data)
                    {
                        $("#dip_def").empty();
                        $("#dip_def").append("<dl>");
                        $("#dip_def").append("<dt><strong>"+data[0].word+": </strong> <dt>");
                        for(var i=0;i<data.length;i++)
                        {  
                            var x=" <dd><strong>("+data[i].wordtype+")</strong> <em>"+ data[i].definition+"</em>";
                           $("#dip_def").append(x);

//                            
//                             var s= $("#display_area").val();
//                           $("#display_area").val(s+ "\n"+x);
                        }
                        $("#dip_def").append("</dd></dl>");
                    }
                    });
                   
        }
);
});

