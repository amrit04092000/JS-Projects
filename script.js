document.querySelector('#push').onclick = function () {
    console.log('Button clicked');
  if (document.querySelector('#newTask input').value.length == 0) {
    alert("Please enter Task");
  } 
  else {
    document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('#newTask input').value}
                    </span>
                    <button class="delete">
                        <i class="far fa-trash-alt"></i>
                    </button>
                <div>
        `;
  }
};
