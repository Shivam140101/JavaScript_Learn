{/* <div class="col-sm-3">
                <div class="card">
                    <img src="../../image/image.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> */}


class Country{

    countries = [];

    getCountries = async ()=>{
       let response = await fetch('https://restcountries.com/v3.1/all')
       this.countries = await response.json()
    }

    render = async() =>{
       await this.getCountries();

       const root = document.getElementById('root');

       for(const country of this.countries){
        console.log(country);

        // Parent Div
        let parentDiv = document.createElement('div');
        parentDiv.className = 'col-sm-3 my-2';

        //card div
        let card = document.createElement('div');
        card.className = 'card';

        //image
        let img = document.createElement('img');
        img.className = "card-img-top";
        img.src = country.flags.svg;

        //card body
        let cardBody = document.createElement('div');
        cardBody.className = "card-body"

        //h5
        let h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.innerText = country.name.common;

        // append to card Body
        cardBody.append(h5);

        //append to card
        card.append(img);
        card.append(cardBody);


        //append to parent div
        parentDiv.append(card);

        // append to rootDiv
        root.append(parentDiv)
       }

    }
}

let country = new Country();
country.render();

            