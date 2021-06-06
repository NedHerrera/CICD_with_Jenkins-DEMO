exports.validarnumeros = function(a,b)
{
    return validar(a,b)
}

function validar(a,b)
{
    if (a > b) {
        console.log("Es verdadero")
        console.log(a + " es mas grande que " + b)
        return true
    }
    console.log("Es falso")
    console.log(a + " es mas peque;o que " + b)
    return false;
}
