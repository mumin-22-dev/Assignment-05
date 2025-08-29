

// heart section-------------------

let newAvailableHeart = 0 ;
const heartButton = document.querySelectorAll(".heart-btn");
const availableHeart = document.getElementById("available-heart");

for(let i = 0 ; i < heartButton.length ; i++){
    heartButton[i].addEventListener("click" , function(){
        newAvailableHeart++
        availableHeart.textContent = newAvailableHeart ;
    })
}


// call coin section---------------- 

let newAvailableCoin = 100 ;
const callButton = document.querySelectorAll(".call-btn");
const availableCoin = document.getElementById("available-coin");

const historyList = document.getElementById("history-list");
const clearHistoryButton= document.getElementById("clear-history-btn")

for(let a = 0 ; a < callButton.length ; a++){
    callButton[a].addEventListener("click" , function(){
        if(newAvailableCoin >= 20){
            newAvailableCoin = newAvailableCoin - 20 ;
            availableCoin.textContent = newAvailableCoin ;

            alert("calling.....")
        }
        else{
            alert("You have not sufficient coin");
            return; 
        }

     // Call History Section ----------------


        const callHistoryContainer = document.getElementById("call-history-container");
        const card = this.closest(".card");
        const serviceName = card.querySelector(".name").innerText;
        const serviceNumber = card.querySelector(".number").innerText;

        
        const time = new Date().toLocaleTimeString();

        
        const div = document.createElement("div");
        div.classList.add("p-4", "mt-2", "rounded-lg", "bg-white", "flex", "justify-between", "items-center", "shadow", "w-[206px]", "h-[100px]");
        div.innerHTML = `
            <div>
                <h1 class="text-base font-bold">${serviceName}</h1>
                <h1 class="font-bold text-sm text-gray-500">${serviceNumber}</h1>
            </div>
            <div>
                <h2 class="font-bold text-xs ">${time}</h2>
            </div>
        `;

        historyList.appendChild(div);
     });

    
    }

    clearHistoryButton.addEventListener("click" , function(){
        historyList.innerHTML = " " ;

    })





// copy counter section-------------

let newTotalCopy = 0 ;

const copyButton = document.querySelectorAll(".copy-btn");
const totalCopy = document.getElementById("total-copy");

for(let n = 0 ; n < copyButton.length ; n++){
    copyButton[n].addEventListener("click" , function(){
        newTotalCopy++
        totalCopy.textContent = newTotalCopy ;
        
    })
}


// end section --------------