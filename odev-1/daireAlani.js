const arguments = process.argv.slice(2);

const calculate = (radius) => {
    let alan = Math.PI * radius**2;
    console.log(`Dairenin alanı ${alan.toFixed(2)}`)
}

calculate(arguments[0])