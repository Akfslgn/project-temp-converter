// (°C → °F): F = (C * 9/5) + 32
// (°F → °C): C = (F - 32) * 5/9

export function celsiusToFahrenheit(celsius) {
    const c = Number(celsius);
    return parseFloat(((c * 9/5) + 32).toFixed(1)); // Returns the result rounded to one decimal place as a number
}

export function fahrenheitToCelsius(fahrenheit) {
    const f = Number(fahrenheit);
    return parseFloat(((f - 32) * 5/9).toFixed(1));
}

