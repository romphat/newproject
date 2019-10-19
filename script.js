function editName(){
    var newname = prompt("Change your name","Phat Phatharanon-uthai");
  if(!newname == ""){
    document.getElementById("name").innerHTML = newname;
  }
    }

    function changeBg(x){
     var body =document.getElementById("body");

        body.style.backgroundColor =x.value;
    
        }   
     
        function underline(){
            var bg =document.getElementById("bg");
            bg.style.backgroundColor = "#0099cc";
               bg.style.borderBottom = "2px solid black";
               }   
               
               function out(){
                var bg =document.getElementById("bg");
                bg.style.backgroundColor = "#33b5e5";
                   bg.style.borderBottom = "";
                   }         

                   function addSkill() {
                    var li = document.createElement("li");
                    var inputValue = document.getElementById("Input").value;
                    var t = document.createTextNode(inputValue);
                    li.appendChild(t);
                    if (inputValue == "") {
                        alert("Something Error!!");
                    } else {
                        document.getElementById("skill").appendChild(li);
                    }
                    document.getElementById("Input").value = "";
                  
                     }
                  
                    function rmSkill(){
                        var list = document.getElementById("skill");
                         list.removeChild(list.lastChild);
                     }