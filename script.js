const button=document.getElementById('button');
const circle=document.querySelector('.animate-circle');
const task=document.getElementById('task');
const description=document.getElementById('description')
const secondsElement = document.getElementById('seconds')
const minutesElement = document.getElementById('minutes')
const hourElement = document.getElementById('hour')
const entriesField = document.getElementById('entries')

let timeIntervalId

button.addEventListener('click',function(){
    const check=button.textContent;
    circle.classList.toggle('pulse');
    
    if(check === 'Start'){
        button.textContent='Stop'
        button.style.cssText='color: rgb(255, 0, 81);border-color:rgb(255, 0, 81);'
        startTimer()
        
        
    }else{
        clearInterval(timeIntervalId)
        addNewEntry()
        button.textContent = 'Start'
        button.style.cssText=' color: rgb(0, 255, 0);border-color:rgb(0, 255, 0);'
        task.value = ''
        description.value = ''
        secondsElement.textContent = '00'
        minutesElement.textContent = '00'
        hourElement.textContent = '00'


    }
    
})

function startTimer() {
    let seconds = 0 
    let minutes = 0 
    let hours = 0 
    timeIntervalId = setInterval(function() {
        seconds++
        if(seconds === 60) {
            seconds = 0
            minutes++
        }
     
        if(minutes === 60) {
            minutes = 0
            hours++
        }

        secondsElement.textContent = seconds.toString().padStart(2, "0")
        minutesElement.textContent = minutes.toString().padStart(2, "0")
        hourElement.textContent = hours.toString().padStart(2, "0")
    }, 1000)
}

function addNewEntry() {
    entriesField.innerHTML += `
        <div class="entry">
            <div>${task.value}</div>
            <div>${description.value}</div>
            <div>${hourElement.textContent}:${minutesElement.textContent}:${secondsElement.textContent}</div>
        </div>
    `
}