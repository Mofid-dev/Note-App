const notesContainer = document.querySelector('.notes')
const container = document.querySelector(".container")
const cancelBtn = document.querySelector(".cancel-btn")
const saveBtn = document.querySelector(".save-btn")
const createBtn = document.querySelector(".create-btn")
const writingSection = document.querySelector(".writing-section")
const readingSection = document.querySelector(".reading-section")
// const readerCancelBtn = document.querySelector(".reader-cancel-btn")
const notes = [
    {
        title: "note title 1",
        content: "content 1 is here",
        data: "20-09-2025"
    },
    {
        title: "note title 2",
        content: "content 2 is here",
        data: "20-09-2025"
    },
    {
        title: "note title 3",
        content: "content 3 is here",
        data: "20-09-2025"
    },
    {
        title: "note title 4",
        content: "content 4 is here",
        data: "20-09-2025"
    },
    {
        title: "note title 5",
        content: "content 5 is here",
        data: "20-09-2025"
    },
    {
        title: "note title 6",
        content: "content 6 is here",
        data: "20-09-2025"
    },  
];

function formattingDate() {

    const today = new Date()

    const day = String(today.getDate()).padStart(2, "0")
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const year = today.getFullYear()

    return `${day}-${month}-${year}`
}

function displaynotes() {
    let html = ""
    notes.forEach((note, index) => {
        html += `
            <div data-index="${index}" class="note-card">
                <h2 onclick="readingCard(${index})">${note.title}</h2>
                <p onclick="readingCard(${index})" class="note-content">${note.content}</p>
                <div class="note-footer">
                    <div class="date">${note.data}</div>
                    <button onclick="deleteNote(${index})" class="delete-note-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `
    });
    notesContainer.innerHTML = html
}

function readingCard(oldIndex) {
    writingSection.style.display = "none"
    readingSection.style.display = "flex"
    container.style.display = "none"
    let html = ""
    notes.forEach((note, index) => {
        let matchNote;
        if (index === oldIndex) {
            matchNote = note
            html = `
                <div class="head">
                    <h1>${matchNote.title} </h1>
                    <button class="reader-cancel-btn" onclick="cancelReading()"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <p>${matchNote.content}</p>
            `
            readingSection.innerHTML = html
        }
        
    })
}

function deleteNote(index) {
    notes.splice(index, 1);
    displaynotes()
}

createBtn.addEventListener("click", function () {
    container.style.display = "none"
    writingSection.style.display = "flex"
})

cancelBtn.addEventListener("click", function () {
    container.style.display = "flex"
    writingSection.style.display = "none"
})

saveBtn.addEventListener("click", function addNote() {
    const title = document.querySelector(".title-input").value
    const content = document.querySelector(".content-input").value
    notes.push({
        title: title,
        content: content,
        data: formattingDate()
    })

    displaynotes()

    container.style.display = "flex"
    writingSection.style.display = "none"

    title = ""
    content = ""
})

function cancelReading() {
    container.style.display = "flex"
    readingSection.style.display = "none"
}

displaynotes()