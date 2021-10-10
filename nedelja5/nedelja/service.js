
let count = 5
const data = [
    {
        id: 1,
        desc: 'neki opis 1',
        done: true
    },
    {
        id: 2,
        desc: 'neki opis 2',
        done: false
    },
    {
        id: 3,
        desc: 'neki opis 3',
        done: false
    },
    {
        id: 4,
        desc: 'neki opis 4',
        done: true
    }
]
const add = (item) => {
    data.push({id:count++,...item})
    return count - 1
}
const deleteById = (id) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index,1)
}
const changeById = (id, noviItem) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index,1, noviItem)
}
export default {
    data,
    add,
    deleteById,
    changeById
}