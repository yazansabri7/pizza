 async function getpizza(){
    const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    const request = await response.json();
    const data =request.recipes;
    const result=data.map(function(pizza){
        return `
            <div class="pizza-section">
                <h2>${pizza.title}</h2>
                <img src="${pizza.image_url}" />
            </div>
        
        `;
    }).join('');
    document.querySelector(".pizza .row").innerHTML=result;
}
getpizza();