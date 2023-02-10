const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://img.freepik.com/free-photo/red-apple-in-basket_74190-6134.jpg?w=740&t=st=1676029779~exp=1676030379~hmac=c8add1303a01523d11f46d038c81d3ed058659f4c7accbaa9eb19a15f0e59441'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://img.freepik.com/free-photo/a-top-view-sliced-orange-fresh-ripe-juicy-mellow-isolated-half-cut-pieces-along-with-sliced-lemons-and-green-leaves-on-the-white-background-fruit-color-citrus_140725-17033.jpg?t=st=1676029806~exp=1676030406~hmac=061ebd9b5820f866c0feb14ac7b95dd39b614cdee689ec4ee0a54444936bfa39'},
    {id: 3, title: 'Груши', price: 40, img: 'https://img.freepik.com/free-photo/wooden-board-of-delicious-yellow-pears-on-black-surface_114579-88811.jpg?w=740&t=st=1676029833~exp=1676030433~hmac=5226bb407351f41869dc4dfa60a83e180bfec14373f4c9e4f1f429271691b3b7'}
]

const modal = $.modal({
    title: 'Eagle Modal',
    closable: true,
    content: `
        <p>lorem ipsum text none </p>
        <p>lorem ipsum text none </p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
            modal.close()
        }},
        {text: 'Cansel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})
