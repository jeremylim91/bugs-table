// create a button
const createBugButton = document.createElement('BUTTON');
createBugButton.classList.add('createBugButton');
createBugButton.innerHTML = ' Create A Bug';
document.body.appendChild(createBugButton);

const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');

// create elements of a form
const createForm = () => {
  const labelForProblemElement = document.createElement('label');
  labelForProblemElement.setAttribute('for', 'formProblemElement');
  labelForProblemElement.innerHTML = 'Problem';
  const problemElement = document.createElement('input');
  problemElement.setAttribute('type', 'text');
  problemElement.setAttribute('name', 'formProblemElement');
  problemElement.setAttribute('id', 'formProblemElement');

  const labelForErrorTextElement = document.createElement('label');
  labelForErrorTextElement.setAttribute('for', 'formErrorTextElement');
  labelForErrorTextElement.innerHTML = 'Error Text';
  const errorTextElement = document.createElement('input');
  errorTextElement.setAttribute('type', 'text');
  errorTextElement.setAttribute('name', 'formErrorTextElement');
  errorTextElement.setAttribute('id', 'formErrorTextElement');

  const labelForCommitElement = document.createElement('label');
  labelForCommitElement.setAttribute('for', 'formCommitElement');
  labelForCommitElement.innerHTML = 'Commit';
  const commitElement = document.createElement('input');
  commitElement.setAttribute('type', 'text');
  commitElement.setAttribute('name', 'formCommitElement');
  commitElement.setAttribute('id', 'formCommitElement');

  document.body.appendChild(labelForProblemElement);
  document.body.appendChild(problemElement);
  document.body.appendChild(labelForErrorTextElement);
  document.body.appendChild(errorTextElement);
  document.body.appendChild(labelForCommitElement);
  document.body.appendChild(commitElement);
  document.body.appendChild(submitBtn);
};

// add an event listener that creates a "form" when the usr clicks on the button
createBugButton.addEventListener('click', () => {
  createForm();
});
submitBtn.addEventListener('click', () => {
  const data = {
    problemContent: document.getElementById('formProblemElement').value,
    errorTextContent: document.getElementById('formErrorTextElement').value,
    commitContent: document.getElementById('formCommitElement').value,
  };
  console.log(data);
  // manage the post request
  // Make a request to create an item
  axios.post('/createBug', data)
    .then((response) => {
    // handle success
      console.log(response);
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
});

// set the data object
// const ProblemContent = document.getElementById('formProblemElement').value;
// const errorTextContent = document.getElementById('formErrorTextElement').value;
// const commitContent = document.getElementById('formCommitElement').value;
