const axios = require('axios').default;

async function addNewBook() {
    await axios.post('http://localhost:3000/books', {
        ID: 3,
        name: 'My Boook',
        author: 'Me and only me'
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
}

async function addExistentBook() {
    await axios.post('http://localhost:3000/books', {
        ID: 2,
        name: 'Os Lusiadas',
        author: 'Luis de Camoes'
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.response.data);
        });
}

async function readBooks() {
    await axios.get('http://localhost:3000/books')
        .then((response) => {
            response.data.map((el) => {
                axios.get('http://localhost:3000/books/' + el.ID)
                    .then((response) => {
                        console.log(response.data);
                    });
            });
        });
}

async function readLog() {
    await axios.get('http://localhost:3000/log')
        .then((response) => {
            console.log(response.data);
        });
}

addNewBook();
addExistentBook();
readBooks();
readLog();