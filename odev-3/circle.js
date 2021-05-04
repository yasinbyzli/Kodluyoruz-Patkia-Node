const circleArea = yariCap => {
    let hesapla = Math.PI * yariCap ** 2
    console.log(hesapla)
}

const circleCircumference = yariCap => {
    let hesapla = 2 * Math.PI * yariCap 
    console.log(hesapla)
}

module.exports = {
    circleArea,
    circleCircumference
}