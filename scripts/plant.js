   // button togol

function buttonTogol(id) {
    const allButton = document.getElementById('allButton');
    const thrivingButton =document.getElementById('thrivingButton');
    const struglingButton =document.getElementById('struglingButton');

    allButton.classList.remove('bg-black', 'text-white')
    struglingButton.classList.remove('bg-black', 'text-white')
    thrivingButton.classList.remove('bg-black', 'text-white')

    allButton.classList.add( "bg-gray-400", "text-black")
    thrivingButton.classList.add( "bg-gray-400", "text-black")
    struglingButton.classList.add( "bg-gray-400", "text-black")

    const selected =document.getElementById(id);
    selected.classList.remove("bg-gray-400" , "text-black")
    selected.classList.add('bg-black', 'text-white')
    
}

//  ......allplant heading innertext change 

function totalCount(){
    const allElement =document.getElementById('allCountInhead');
  const allPlantbox =document.getElementById('all-plants-container');
  
   let totalCountInhead =document.getElementById('allCountInhead');
   console.log(allPlantbox);

   const totalCount = allPlantbox.children;
   console.log(totalCount);
   
   const childNumber = totalCount.length
   console.log(childNumber)
  totalCountInhead.innerText = childNumber;
}
totalCount();