fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {

        const gallery = data.slice(0, 12);


        const images = gallery.map(item => {
            const img = document.createElement('img');
            img.src = item.url;
            const div = document.createElement('div');
            div.classList.add('images');
            div.appendChild(img);
            return div;
        });


        const container = document.createElement('div');
        container.classList.add('grid');
        container.append(...images);
        document.body.appendChild(container);
    })
