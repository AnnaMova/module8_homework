const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    try {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then ((response)=> { 
            return response.json();
            })
        .then ((data)=> {
            console.log(data);
            const container = document.querySelector('.containerImg');
            data.forEach(image => {
                const img = document.createElement('img');
                img.src = image.url; 
                container.appendChild(img);
            });
        });
    
    }catch(event){
            event.messege("Ошибка");
    }
 })