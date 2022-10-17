const openElements = [];

const close = (element) => {
    element.classList.add('hidden');

    const index = openElements.indexOf(element);
    
    if (index >= 0) {
        openElements.splice(index, 1)
    }

    element.style.zIndex = null;

    sync();
}

const open = (element) => {
    const index = openElements.indexOf(element);

    if (index >= 0) {
        openElements.splice(index, 1);
    }
    
    openElements.push(element);

    element.classList.remove('hidden');

    console.log(openElements);

    sync();
}

const toggle = (element) => {
    if (openElements.includes(element)) close(element);
    else open(element);
}

const sync = () => {
    openElements.forEach((element, i) => {
        element.style.zIndex = i;
    })
}

// Apple Button - On Click
const appleButton = document.querySelector("#appleButton");
// console.log(appleIcon);

const appleDropdown = document.getElementById("appleDropdown");
console.log(appleDropdown);


appleButton.addEventListener("click", () => {
    console.log("clicked apple button");
    // console.log(appleDropdown.classList);
    toggle(appleDropdown);
    // appleDropdown.classList.toggle("hidden");
})


// System Drive Folder Button - On Click
const systemDriveButton = document.querySelector("#systemDriveAppButton");
console.log(systemDriveButton);

const systemDrivePopup = document.getElementById("systemDriveModal");
console.log(systemDrivePopup);


systemDriveButton.addEventListener("click", () => {
    console.log("clicked mac system drive app");
    open(systemDrivePopup);
})


// MacPaint Folder Button - On Click
const macPaintButton = document.querySelector("#macPaintAppButton");
console.log(macPaintButton);

const macPaintFolderPopup = document.getElementById("macPaintAppModal");
console.log(macPaintFolderPopup);

Array.from(document.getElementsByClassName('box__header__close')).forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        close(closeButton.parentElement.parentElement);
    })
});

Array.from(document.getElementsByClassName('box')).forEach(box => {
    box.addEventListener('click', (event) => {
        if (!event.target.parentElement.classList.contains('box__header__close')) {
            open(box);
        }
    })
});

macPaintButton.addEventListener("click", () => {
    console.log("clicked macPaint folder app");
    ("box__paint--hidden");
    open(macPaintFolderPopup);
})

// Woodcut paint file Button - On Click
const woodcutButton = document.querySelector("#woodcutFileButton");
console.log(woodcutButton);

const woodcutFilePopup = document.getElementById("woodcutModal");
console.log(woodcutFilePopup);

const openedDocuments = [];

woodcutButton.addEventListener("click", () => {
    console.log("clicked woodcut file");
    open(woodcutFilePopup)
})

// Memo file Button - On Click
const memoButton = document.querySelector("#memoFileButton");
console.log(memoButton);

const memoFilePopup = document.getElementById("memoModal");
console.log(memoFilePopup);


memoButton.addEventListener("click", () => {
    console.log("clicked memo file");
    open(memoFilePopup)
})


const datetime = new Date().toLocaleString();
console.log(datetime);
document.getElementById("timestamp").textContent = datetime; 


const refreshTime = () => {
    const timeDisplay = document.getElementById("timestamp");
    const dateString = new Date().toLocaleString('en-AU', {
        year: '2-digit',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'short',
    });
    const formattedString = dateString.replace(",", " ");
    // Thu, 13 Oct 22, 04:41:48 pm

    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);

    // icon.addEventListener("click", ()=> {
//     console.log("clicked");
//     const text = document.getElementById("text");
//     text.innerText = "You clicked me";
//     text.className
// } )

// icon.addEventListener("click", ()=> {
//     console.log("clicked");
//     const div = document.getElementById("div");
//     console.log(div.classList);
//     div.classList.toggle("hidden")
   
// } )

// 1) select the element
// 2) add the event listener e.g. "clicked", onhover
// 3) add in your function which will be executed when event occurs


// const time = document.querySelector("#timestamp");
// console.log(time);