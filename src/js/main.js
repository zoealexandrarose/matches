function loadMore(){
    const productUrl = 'products/products.json';
    //implement fetch api
    fetch("products/products.json")
        .then(function (response) {
            return response.json();
        }).then((completedata) => {
        let data1 = "";
        let lastindex=parseInt(document.getElementById("lastindex").value);
        let ceiling=12+lastindex;
        //Loads entire json but presents what amount you want
        completedata.map((values) => {
            //Verification of the ceiling and status of the last known index
            if(ceiling>values.index && values.index>=lastindex){
                data1 += `<div class="col-3">
                        <img src=${values.image} class="img-fluid">
                        <h3 class="title">${values.designer}</h3>
                        <p>${values.name}</p>
                        <p class="text-center"><small>${values.price}</small></p>
                        </div>`
                lastindex++;
                document.getElementById("lastindex").value++;
            }
        });
        document.getElementById('cards').innerHTML += data1;
        //load json into html
    })
}

window.onload = function(){
    loadMore();
    //load full function
};
