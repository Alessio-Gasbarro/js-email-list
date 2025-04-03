//Colleghiamo l'api al bottone

const requiredEndpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const button = document.getElementById('randomizer');

//Facciamo in modo che si generino 10 random email
const randomEmail = () => {
    for(let i=0; i < 10; i++){
        axios.get(requiredEndpoint)
            .then((resp) => {
                console.log(resp.data.response)
                document.getElementById(`email${i}`).innerHTML = resp.data.response;
            })
    }
}

randomEmail();
button.addEventListener('click', randomEmail);