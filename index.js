const showCapitals = document.getElementById('showCapitals');
const capitalList = document.getElementById('capitalList');

showCapitals.addEventListener('click',getCapitalList);

function getCapitalList() {
    fetch('https://restcountries.eu/rest/v2/regionalbloc/eu')
        .then(res=>res.json())
        .then(data => showCapitalList(data));
};

function showCapitalList(data){
    for (let i = 0;i<data.length - 1;i++){
        let capital = document.createElement('li');
        capital.innerHTML = `${data[i].capital}`;
        capitalList.append(capital);
    }
};