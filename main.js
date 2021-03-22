menu_list_array=["chiken tandoori pizza","veg supreme pizza","paneer tikka pizza","deluxe vegei pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menu'>"
menu_list_array.sort();
for(var 1=0;i<menu_list_array.lenth;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i] +'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("displayname").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<session class='cards'>"
    for(var i=0;i<menu_list_array.lenth;i++){

        htmldata=htmldata+'<div class="card">' + <img src="pizzalmg"> + menu_list_array[i]
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedamount").innerHTML = htmldata;

}