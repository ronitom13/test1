//Javascript Document

let url = 'https://ronitom13.github.io/Lab-4/lab4.json';

//create new XHR object, it allows us to fetch data without a page refresh

fetch(url).then(function(response){
    response.json().then(function(CrazyItems){
        console.log(CrazyItems)
    });
});


function CrazyItems(jsonObj){
    let CrazyItems = jsonObj.CrazyItems;
    let section = document.querySelector('section');
    for(let i = 0; i < CrazyItems.length; i++){
        //build HTML elements dynamically
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        img.setAttribute('src', 'https://ronitom13.github.io/Lab-4/images/'+CrazyItems[i].image);
        img.setAttribute('alt', CrazyItems[i].image);
        h2.textContent = CrazyItems[i].name;
        p1.textContent = 'Price: ' + CrazyItems[i].price;
        p2.textContent = 'Details: ' + CrazyItems[i].details;

        article.append(img);
        article.append(h2);
        article.append(p1);
        article.append(p2);
        section.append(article);
    }
}


