
// Conversion functions to clean up
const toCelsius = (temp) => {
    let celsius = (temp - 32) * 5 / 9  
    return celsius
}

const toF = (temp) => {
    let f = (temp * 9 / 5) + 32
    return f
} 


document.getElementById('convertButton').addEventListener('click', () => {
    // get value from temp field converted to a number
    const temp = parseInt(document.getElementById('temperatureInput').value) 
    // get option value
    const optionEl = document.getElementById('conversionType').value 
    // select result element
    const result = document.getElementById('result')
    // clear result
    result.innerHTML = '' 
    // validate input
    if (isNaN(temp)) {
        result.innerHTML = 'Please input a valid number!'
        return
    }
    // conversion

    if (optionEl =='toCelsius') {
        let theResult = toCelsius(temp).toFixed(2)
        result.innerHTML = `${temp}F is equal to ${theResult} Celsius`
    } else {
        let theResult = toF(temp).toFixed(2)
        result.innerHTML = `${temp}C is equal to ${theResult} Celsius`
    }
    

})