window.addEventListener("load", function () {
    let btn = document.querySelector("#btn-Generator");

    let generatorColor = () => {
        let inputColor = document.querySelector("#muestrario").value;
        document.querySelector("#span-Result").innerHTML = `El código del color es: ${inputColor}`
        document.querySelector("#caja-Color").style.background = inputColor;
    }
    btn.addEventListener("click", function () { generatorColor(); })
});