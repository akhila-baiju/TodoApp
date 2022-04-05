
function createList(){
   return new Promise(function(resolve,reject)
  {
      var success=false;
      var xhttp=new XMLHttpRequest();
      xhttp.onreadystatechange= function()
      {
      if(this.readyState == 4 && this.status == 200)
          {
              var response=JSON.parse(this.responseText);
              var output="";
              let tab = 
                  `<tr style="background-color:bisque">
                  <td><b>Status</b></td>
                  <td align="center"><b>Description</b></td>
                  </tr>`;
                  var a={}
                  for(var i=0;i<response.length;i++)
                      {  
                          if(i%4==0 || i%3==0 || i%2==0 ) {
                            tab += `<tr> 
                            <td><li><input type='checkbox' checked='true'></td>
                            <td>${response[i].title}</td></tr>`
                          }else{
                          tab += `<tr > 
                          <td><li><input type='checkbox' name='check[]' id='conducted' onclick='checkBoxLimit()' ></td>
                          <td>${response[i].title}</td></tr>`
                          }
                      }
                  document.getElementById("todo").innerHTML=tab;
          }
      }
      xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);
      xhttp.send();
  if(!success){
      resolve();
  }else{
      reject();
  }
  
  })
 }
 function checkBoxLimit() {   
  var checkBoxGroup = document.forms['todo_list']['check[]'];			
  var limit = 5;
  for (var i = 0; i < checkBoxGroup.length; i++) {
      checkBoxGroup[i].onclick = function() {
          var checkedcount = 0;
          for (var i = 0; i < checkBoxGroup.length; i++) {
              checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
          }
          if (checkedcount > limit) {
              alert("Congrats. 5 Tasks have been Successfully Completed");						
              this.checked = false;
          }
      }
  }
}

createList()
.then(checkBoxLimit)
.catch(function(e){
   // console.log(e);
})