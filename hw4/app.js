const man ={
    name:"Ibraghim",
    age:18,
    address:"Tokyo",
    device:"Lenovo ThinkBook 14",

}







const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    const request = new XMLHttpRequest();
    request.open("GET","project.json");
    request.setRequestHeader("Content-type","application/json");
    request.send();
    request.addEventListener("load",()=>{
        console.log(JSON.parse(request.response));
        const project = JSON.parse(request.response);
        document.querySelector(".name").innerHTML = project.name;
        document.querySelector(".age").innerHTML = project.age;
        document.querySelector(".address").innerHTML = project.address;
        document.querySelector(".device").innerHTML = project.device
    });
});