const obj = {
    name : 'oscar',
    age : 32,
    country : 'MX',
};

let { name, ...all } = obj;
console.log(name, all); //oscar { age: 32, country: 'MX' }

let { country, ...all } = obj;
console.log(all); //{ name: 'oscar', age: 32 }

const obj1 = {
    name: 'Rita',
    age: 39
}

const obj2 = {
    ...obj1,
    country: 'PE'
}
console.log(obj2) //{ name: 'Rita', age: 39, country: 'PE' }


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello gaturro'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(Response => console.log(Response))
    .catch(error => console.error(error))
    .finally(()=>console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-10-07');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day); //2021 10 07

