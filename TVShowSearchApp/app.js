const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImg();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get('http://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
})

const makeImages = (shows) => {
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}

const deleteImg = () => {
    const imgs = document.querySelectorAll('img');
    for (img of imgs) {
        img.remove();
    }
}