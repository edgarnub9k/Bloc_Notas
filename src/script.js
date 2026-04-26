const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn'); 
const notesList = document.getElementById('notes-list'); 


// iniciar la carga de notas 
document.addEventListener('DOMContentLoaded', displayNotes); 

saveBtn.addEventListener('click', () =>{
  const text = noteInput.value; 
  if (text.trim() === "")return; 
  const notes = JSON.parse(localStorage.getItem('notes') || "[]");
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    
    noteInput.value = "";
    displayNotes();
})

function displayNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || "[]");
    notesList.innerHTML = notes.map((note, index) => `
        <div class="note-item">
            ${note}
            <button onclick="deleteNote(${index})" style="width: auto; background: red;">X</button>
        </div>
    `).join('');
}

window.deleteNote = (index) => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
};
