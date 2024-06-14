console.log("this is ajax js")
let fetbtn=document.getElementById('fetchbtn')
fetbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    //instantiate an xhr object
    console.log("you have clicked fetchbtn")
    const xhr=new XMLHttpRequest();
    //open the object 
    //xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);
    xhr.getResponseHeader('content-type','application/x-www-form-urlencoded');
    //get means only fetch the data(we will give url and it will tell whats inside the url)..post means we will send data also with our request(url with data and response is according to the data)..true means asynchronously run hoga no blocking...

   //what to do on progress(optional ....)
    xhr.onprogress= function(){
        console.log("on progress...")
    }
    xhr.onreadystatechange=function(){
        console.log("ready state is ", xhr.readyState)
    }
    //what to do when response is ready..
    xhr.onload= function(){
        if(this.status==200){
        console.log(this.responseText)
    }
    else{
        console.log("error occur")
    }
}
    //send the request
    params=`{"title":"abc","body":"abx","userID":"6"}`;
    xhr.send(params);
    console.log("we are done..")

}

