// const inputBox = document.querySelector("input");
//       const button = document.querySelector("button");
//       button.addEventListener("click", clickfun);
//        summitValue = 1;

//       function clickfun() {
//         var listitem = document.createElement("li");
//         listitem.innerText = inputBox.value;
//         listitem.insertAdjacentHTML("beforeend",`<a class="deletebtn" style="float:right;"><i class="fa-solid fa-trash"></i></a> <a class="editbtn" style="float:right; margin-right: 10px;" ><i class="fa-regular fa-eye-slash"></i></a>`);
//         document.querySelector("ol").appendChild(listitem);
//         inputBox.value = " ";
//       }
// const OL = document.getElementsByTagName("ol");
//  const inputBox = document.querySelector("input");
//       const button = document.querySelector("button");
//      button.addEventListener("click", clickfun);
     
//        summitValue = 1;

//       function clickfun() {
//         var listitem = document.createElement("li");
//         listitem.innerText = inputBox.value;
//         listitem.insertAdjacentHTML("beforeend",`<a class="deletebtn" style="float:right;"><i class="fa-solid fa-trash"></i></a> <a class="editbtn" style="float:right; margin-right: 10px;" ><i class="fa-regular fa-eye-slash"></i></a>`);
//       OL.appendChild(listitem);
//         inputBox.value = " ";
         
      //   var lenoficon = document.getElementsByClassName("deletebtn").length;
      //  for(let  j= 0; j< lenoficon; j++){
      //   document.getElementsByClassName("deletebtn")[j].addEventListener("click", removeitemfun);
      //   function removeitemfun(){
      //               UL.child.removeChild[j];
      //   }
      //  }


        // var lenclass = document.getElementsByClassName("deletebtn").length;
        // for (let i = 0; i < lenclass; i++) {

        //    document.getElementsByClassName("deletebtn")[i];
        //   document.getElementsByClassName("deletebtn")
        //     [i].addEventListener("click", function () {
        //       this.parentElement.remove();
        //     });
        //   document
        //     .getElementsByClassName("editbtn")[i].addEventListener("click", function () {
        //       inputBox.value = this.parentElement.firstChild.textContent;
        //     });
        // }
      // }

      //first file
       // function renderList(items){
      //     const ol = document.querySelector("ol");
      //     ol.innerHTML = " ";
      //     items.forEach(function(item, idx){
      //         const listitem = document.createElement("li");
      //         const span1 = document.createElement("span");
      //         span1.innerText = item;
      //         const btn = document.createElement("button");
      //         const edit = document.createElement("button");
      //         btn.innerText = "Delete";
      //         edit.innerText = "Edit";
      //          listitem.appendChild(edit);
      //             edit.addEventListener("click", function(){
      //                 const index = items.indexOf(item);
      //                 console.log("editIndex", index, items[index]);
      //             });
      //         btn.addEventListener("click", function(){
      //             const index = items.indexOf(item);
      //             console.log(index);
      //         });
      //         listitem.appendChild(span1);
      //         listitem.appendChild(btn);
      //         ol.appendChild(listitem);
      //     });
      // }
      //second
      //     const inputBox = document.getElementById("input");
//       const button = document.getElementById("button");     
//       const OL = document.getElementById("ollist");
//          let clickbtntime = 1;
//        let editindex = null;
//        let startnum;
//        let liarr = [];
//       button.addEventListener("click", clickfun);
      

//       function clickfun() {
              
//         if(inputBox.value === "")//why not == operator.
//         {
//             alert("please Enter something");
//             return; 
//         }
//             const editBtns = document.querySelectorAll(".edit");
//         const deleteBtns = document.querySelectorAll(".delete");
//          const liItems = document.querySelectorAll("#ollist li"); 
//            if(clickbtntime !== null){         
//                   liItems[editindex].querySelector('.text').textContent = inputBox.value.trim();
//                     liarr.splice(editindex,1,inputBox.value);
//                  inputBox.value = " ";
//                   clickbtntime = 1;                 
//                   console.log(liarr);
//                  }       

//          else {
//           var listitem = inputBox.value;
//           liarr.push(listitem);
//           console.log(liarr);
//          var li = document.createElement("li");
//          li.className = "listitem";

//           var spanText = document.createElement("span");
//           spanText.textContent = inputBox.value;
//           spanText.className = 'text';

//            var divicon = document.createElement("div");
//            divicon.className = 'icons';

//            divicon.insertAdjacentHTML("afterbegin", '<span class=delete><i class="fa-solid fa-trash"></i></span>');
//            divicon.insertAdjacentHTML("afterbegin", '<span class=edit><i class="fa-regular fa-eye-slash"></i></i></span>');
            
//            li.append(spanText,divicon);
//            ollist.appendChild(li);
//           inputBox.value = " ";
//            updateEvent();
//          }   
//     function updateEvent(){  
             
       
//          deleteBtns.forEach((btn,index)=> {

//             btn.addEventListener("click",()=>{
//             liarr.splice(index,1);
              //  console.log(liarr);  
//             liItems[index].remove(); 
              //  if(liItems[index].queryselector("text").textContent == inputBox.value)  {
              //  clickbtntime == null;
              //  updateEvent();
// }    
             
//              });  
             
//              });
            
              
//         editBtns.forEach((ebtn,ind)=>{
//                ebtn.addEventListener("click",()=>{
//                inputBox.value = liItems[ind].querySelector('.text').textContent;
//                 clickbtntime = 2;
//                 editindex = ind;
                
//             });
//         });
         
    
       
//     }
// }
       