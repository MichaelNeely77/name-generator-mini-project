document.querySelector('#generate-names').addEventListener('submit', laodNames);

// Execute the function to query the API
function laodNames(e) {
    e.preventDefault();

    // read the valufes of the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    // Build the URL
    let url = 'http://uinames.com/api/?';
    // REad the origin mnd append to the URL
    if(origin !==''){
        url += `region=${origin}&`;
    }

    console.log(url);

}




//






//




