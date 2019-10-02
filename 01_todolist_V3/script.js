// function isWorking(){
                // console.log('script js is working!');
// }
// isWorking();

let today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
today = mm + '-' + dd + '-' + yyyy;
document.getElementById("date").innerHTML = today;

let myList = {}
let n = 0;

//Function to add task to the list
document.getElementById('submit').onclick = function(){addToTaskList()};

function addToTaskList(){
			n+=1;
			
			let task = document.getElementById('taskinput').value;
			// console.log(task);
		  
			var newDiv = document.createElement('div');

			newDiv.id = 'task' + n;
			newDiv.className = 'taskList';
			var newDivText = document.createTextNode('Task ' +n );
			newDiv.appendChild(newDivText);
			// console.log(newDiv);

			var newTick = document.createElement('div');
			newTick.id = 'tick'+n;
			newTick.className = 'tickbutton';
			// console.log(newTick);

			var newCross = document.createElement('div');
			newCross.id = 'cross'+n;
			newCross.className = 'crossbutton';
			// console.log(newCross);
						   
			document.getElementById('taskbox').appendChild(newDiv);
			document.getElementById('taskbox').appendChild(newTick);
			document.getElementById('taskbox').appendChild(newCross);           

			myList[n] = task;
			console.log(myList);
			console.log(newDiv);
			document.getElementById('taskinput').value = '';
			viewList2(n,task);
}

function viewList2(index,task){
			document.getElementById('task' + index).innerHTML  = '>> ' + '    ' + task;
			
			document.getElementById('tick' + index).onclick = function(){
			document.getElementById('task' + index).style.backgroundColor = '#ABEBC6';
			document.getElementById('tick' + index).style.opacity = 0.5;
			document.getElementById('tick' + index).style.cursor = 'auto';                    
            };
                
			document.getElementById('cross' + index).onclick = function(){removeTask(index)};
            // console.log(myList);
}

//Function to clear List
document.getElementById('clear').onclick = function(){clearList()};

function clearList(){
            for (let key in myList){
				var a = document.getElementById('task' + key);
				var b = document.getElementById('tick' + key);
				var c = document.getElementById('cross' + key);
			  
				document.getElementById('taskbox').removeChild(a);
				document.getElementById('taskbox').removeChild(b);
				document.getElementById('taskbox').removeChild(c);
			}

				document.getElementById('taskinput').value = '';
                n = 0;
                myList = {};
}


// Function to remove the task from the list
function removeTask(j){
			// console.log(j);
			var p = document.getElementById('task' + j)
			var q = document.getElementById('tick' + j)
			var r = document.getElementById('cross' + j)
						  
			document.getElementById('taskbox').removeChild(p);
			document.getElementById('taskbox').removeChild(q);
			document.getElementById('taskbox').removeChild(r);
	   
			const newList = {};
			delete myList[j];
			// console.log(myList);
			for (let k in myList){
					if(k<j){
						newList[k] = myList[k];
						document.getElementById('task' + k).innerhtml = '>> ' + '    ' + newList[k];
					}
					else if(k>j){
						newList[k-1] = myList[k];
						document.getElementById('task' + k).innerhtml = '>> ' + '    ' + newList[k-1];
					}
			}
			newListLength = Object.keys(newList).length;
			// console.log(newListLength);
			console.log(newList);
}

//Function to reload list
// function reloadList(newList,newListLength){
                // for (let h=1;h<newListLength+1;h++){
                                // document.getElementById('task' + h).innerHTML  = h + '.' + '    ' + newList[h];
                                // // document.getElementById('task' + h).style.display = "inline";            
                                // // document.getElementById('tick' + h).style.display = "inline";             
                                // // document.getElementById('cross' + h).style.display = "inline";          
                // }
                // myList = newList;
// }