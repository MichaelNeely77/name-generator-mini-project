document.querySelector('#generate-names').addEventListener('submit', laodNames);

// Execute the function to query the API
function laodNames(e) {
    e.preventDefault();

    // read the valufes of the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    // Build the URL
    let url = '/uinames-master/uinames.com/api/names?';
    // REad the origin mnd append to the URL
    if(origin !==''){
        url += `region=${origin}&`;
    }

    if(genre !==''){
        url += `genre=${genre}&`;
    }
    
    if(amount !==''){
        url += `amount=${amount}&`;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true );

    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse(this.responseText);

            let html = '<h2>Generated Names</h2>';
            html += '<ul class = "list">';
            names.forEach(function(name) {
                html += `
                    <li>${name.name}</li>
                `;
            });


            html += '</ul>';
            document.querySelector('#result').innerHTML = html;

        }
    }

    xhr.send();

}




//






//




