let temperature = 37;

if(temperature <= 0){
    console.log("Its freezing outside!")
}
else if (temperature >= 0 && temperature <= 15){
    console.log("Its cold,wear a jacket")
}
else if ( temperature >= 16 && temperature <= 25){
    console.log("The weather is pleasant")
}
else if (temperature >= 26 && temperature <= 35){
    console.log("Its Warm, stay hydrated")
}
else if( temperature > 35){
    console.log("Its too hot! Avoid going outside")
}