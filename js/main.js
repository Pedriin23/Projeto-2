var flag = 0;

function muda_cor(){

    let body = document.getElementById("bg");

    if(flag == 0){
    body.style.backgroundColor = "#3d828b";
    flag = 1;
}else{
    body.style.backgroundColor = "#2ba9fd";
    flag = 0;
}
}