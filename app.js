
const btn = document.getElementById('btn');
const title = document.getElementById('title');
const year = document.getElementById('year');
const length = document.getElementById('length');
const rating = document.getElementById('rating');
const picture = document.getElementById('pic');
const cast = document.getElementById('cast');
const plot_h3 = document.getElementById('plot_h3');




btn.addEventListener('click', () =>{

    const input = document.getElementById('input');
    const inputValue = input.value;

    const config = {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1d18daafe8msha705f48890ca5c4p1ed968jsnf59eb7ea8127",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    }

    fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${inputValue}`, config)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
  
            title.innerHTML = data.title;            
            year.innerHTML = `Year: ${data.year}`;          
            length.innerHTML = `Length: ${data.length}`;             
            rating.innerHTML = `Rating: ${data.rating}`; 
            picture.src = data.poster;
            plot_h3.innerHTML = `Plot: ${data.plot}`;

            document.getElementById('delete').classList.remove('delete');
            document.getElementById('hr_delete').classList.remove('delete');
            
            cast.innerHTML = '';


            data.cast.forEach((actors)=>{
                const li = document.createElement('li');
                li.innerHTML = 
                `<li>
                   ${actors.actor}: ${ actors.character} 
                </li>`
                li.classList.add('ani')
                cast.append(li)

            })
             
        })

    
 
})


    

        






