// 123123  $2b$10$q5Ah/mQPGiqzZOl9ECIZfefqHx3JSHGCpp2raOMOgkaaqruEauly.
// asdfasdf $2b$10$j.anSXAwnw6wMJdVCQcqouGTQx6AnOUzeEyUCtm0UaCJn5FVSZ74W
let users = [
    {
        id:'1',
        username:'sean',
        name:'sean',
        password:'$2b$10$q5Ah/mQPGiqzZOl9ECIZfefqHx3JSHGCpp2raOMOgkaaqruEauly.',
        email:'test@gmail.com',
        url:"https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg",
        createdAt: new Date().toString()
    },
    {
        id:'2',
        username:'jisoo',
        name:'Jisoo',
        password:'$2b$10$j.anSXAwnw6wMJdVCQcqouGTQx6AnOUzeEyUCtm0UaCJn5FVSZ74W',
        email:'jisoo@gmail.com',
        url:"https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg",
        createdAt: new Date().toString()
    }
]

export async function findByUsername (username) {
    return users.find(user => user.username === username)
}

export async function findById (id) {
    return users.find(user => user.id === id)
}

export async function createUser (userInfo) {
    const newUser = {id: Date.now().toString(), ...userInfo, createdAt: new Date().toString()}
    users.push(newUser)
    return newUser.id
} 