fetch('https://randomuser.me/api/')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Extract the user data from the response
            const user = data.results[0];
            const userDataDiv = document.getElementById('userData');

            // Display user data on the page
            userDataDiv.innerHTML = `
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>City: ${user.location.city}</p>
                <p>Country: ${user.location.country}</p>
                <img src=" ${user.picture.medium}" alt="User Image">
            `;
        })
        .catch(error => console.error('Error fetching data:', error));