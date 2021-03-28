let users = [];
let products = [];

const elem = 100000;

for(let i = 0; i < elem; i++){
    users.push({
        id: i,
        nombre: `nombre-${i}`
    })

    products.push({
        id: i,
        nombre: `nombre-producto-${i}`,
        user_id: Math.floor(Math.random() * elem)
    })
}

const keyBy = (arr, key) => arr.reduce((acc, el) => {
    acc[el[key]] = el;
    return acc;
})

const keyedUsers = keyBy(users, 'id');

console.time(1)
const mezclados = products.map(x => ({
    ...x,
    user_id: keyedUsers[x.user_id]
}));
console.timeEnd(1)

console.log('mezclados', mezclados[0])