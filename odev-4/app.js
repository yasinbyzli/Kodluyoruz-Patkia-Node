const fs = require('fs')

const data = {'name' : 'Employee 1 Name', 'salary' : 2000}
const dataTwo = {'name' : 'Employee 2 Name', 'salary' : 3000}
// Dosya oluşturma
fs.writeFile('./employees.json', JSON.stringify(data), 'utf8', (err) => {
    if (err) throw err
    console.log('Dosya olusturuldu.')
})

// Dosya okuma
fs.readFile('./employees.json', 'utf8', (err, value) => {
    if (err) throw err
    console.log(`Dosya okuma başarılı, değerler : ${value}`)
})

// Veri güncelleme
fs.appendFile('./employees.json', JSON.stringify(dataTwo), 'utf8', (err) => {
    if (err) throw err
    console.log('Veri güncellendi')
})

// Dosya silme
fs.unlink('./employees.json', (err) => {
    if (err) throw err
    console.log('Dosya silindi')
})