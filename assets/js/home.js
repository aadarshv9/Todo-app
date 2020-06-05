var deletelistArr;

$("#delete-button").click(function(event){
    event.preventDefault();
    deletelistArr = [];
    var inputs = document.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            deletelistArr.push(inputs[i].id);
          }
    }

    if(deletelistArr.length != 0){
        $.ajax({
            url: '/delete-item',
            success: function(){
                location.reload();
            },
            type: "get",
            async: false,
            data: {
                deleteItem: deletelistArr
            }
        });
    }
    
});