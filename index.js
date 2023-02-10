let fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://img.freepik.com/free-photo/red-apple-in-basket_74190-6134.jpg?w=740&t=st=1676029779~exp=1676030379~hmac=c8add1303a01523d11f46d038c81d3ed058659f4c7accbaa9eb19a15f0e59441'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://img.freepik.com/free-photo/a-top-view-sliced-orange-fresh-ripe-juicy-mellow-isolated-half-cut-pieces-along-with-sliced-lemons-and-green-leaves-on-the-white-background-fruit-color-citrus_140725-17033.jpg?t=st=1676029806~exp=1676030406~hmac=061ebd9b5820f866c0feb14ac7b95dd39b614cdee689ec4ee0a54444936bfa39'},
    {id: 3, title: 'Груши', price: 40, img: 'https://img.freepik.com/free-photo/wooden-board-of-delicious-yellow-pears-on-black-surface_114579-88811.jpg?w=740&t=st=1676029833~exp=1676030433~hmac=5226bb407351f41869dc4dfa60a83e180bfec14373f4c9e4f1f429271691b3b7'}
]

const toHTML = fruit => `
<div class="col">
                <div class="card">
                    <img class="card-img-top" style="height: 300px;" src="${fruit.img}"  alt="${fruit.title}">
                    <div class="card-body">
                      <h5 class="card-title">${fruit.title}</h5>
                      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
                      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
                    </div>
                  </div>                  
            </div>
`

function render() {
    const html = fruits.map(toHTML).join('') //fruit => toHTML(fruit)
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
    title: 'Цена на Товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler(){
            priceModal.close()
        }}
    ]
})

// const confirmModal = $.modal({
//     title: 'Вы уверены?',
//     closable: true,
//     width: '400px',
//     footerButtons: [
//         {text: 'Отменить', type: 'secondary', handler(){
//             confirmModal.close()
//         }},
//         {text: 'Удалить', type: 'danger', handler(){
//             confirmModal.close()
//         }}
//     ]
// })

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
    if (btnType === 'price') {
        priceModal.setContent(`
        <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()
        console.log(fruit)
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch(() => {
            console.log('cansel')
        })
        // confirmModal.setContent(`
        // <p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>
        // `)
        // confirmModal.open()
    }
})