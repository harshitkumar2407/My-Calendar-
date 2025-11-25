const monthYearLabel = document.querySelector("#month-year");
const prevBtn = document.querySelector("#prev-month");
const nextBtn = document.querySelector("#next-month");
const grid =document.querySelector(".calendar-grid");

let  currentDate = new Date();

const monthNames =[
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

function updateHeader() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    monthYearLabel.textContent = `${monthNames[month]} ${year}`;
}

function generateCalendar() {
    grid.innerHTML ="";

    const year = currentDate.getFullYear();
    const month =currentDate.getMonth();

    const daysInMonth = new Date(year,month + 1 , 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();
    firstDay = firstDay === 0 ? 6 : firstDay - 1;
//                                                                  ADD EMPTY BOXES BEFORE DAY 1
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        grid.appendChild(emptyDiv);
    }
//                                                                  ADD THE REAL DAY NUMBERS
    for (let day = 1; day <= daysInMonth; day++) {
        const div =document.createElement("div");
        div.textContent =day;
//                                                                  HIGHLIGHT TODAY
        const today = new Date();
    if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
    ) {
        div.classList.add("today");
    }

        grid.appendChild(div);       
    }
}
   // Initial load
    updateHeader();
    generateCalendar(); 

    // prevBtn.addEventListener("click", () => {
    //     console.log("Prev clicked");
    // });

    // nextBtn.addEventListener("click", () => {
    //     console.log("Next clicked");
    // });


    prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateHeader();
    generateCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateHeader();
    generateCalendar();
});

window.addEventListener("keydown",function (detail) {
    console.log(detail);
     if (detail.key == "ArrowRight") {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateHeader();
        generateCalendar();
     }

     if (detail.key == "ArrowLeft") {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateHeader();
        generateCalendar();
     } 
})