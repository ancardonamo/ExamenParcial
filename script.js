function mostrarTipo(){
    let num=document.getElementById(`numero`).value
    if (num== ""){
        alert(`No tiene boletos agregados`)
    }
    else{
        let cat=document.getElementById(`categorias`)
        cat.innerHTML=`<div class="card-body row">
            <p class="col-2">VIP</p>
            <input onclick="cuantasVIP(${num})" class="col" type="checkbox" name="" id="">
            <p class="col-2">General</p>
            <input onclick="cuantasGeneral(${num})" class="col" type="checkbox" name="" id="">
            </div>`
    }
}

function cuantasVIP(numerito){
    let vip=document.getElementById(`VIP`)

    vip.innerHTML=`<div>
                    <p class="col">Cuantas entradas VIP desea:</p>
                    <input class="col cat" type="number" name="" id="n1" min="0" value="0" max="${numerito}" onkeyup="enforceMinMax(this)" onchange="total()">
                </div>`
}
function cuantasGeneral(numerito){
    let general=document.getElementById(`GENERAL`)
    general.innerHTML=`<div>
                    <p class="col">Cuantas entradas General desea:</p>
                    <input class="col cat" type="number" name="" id="n2" min="0" value="0" max="${numerito}" onkeyup="enforceMinMax(this)" onchange="total()">
                </div>`
}

function total(){
    let tot1=parseInt(document.getElementById(`n1`).value)
    let tot2=parseInt(document.getElementById(`n2`).value)
    let mensaje=document.getElementById(`total1`)
    if (tot1>0 && tot2>0) {
        let elTotal=((tot1*500000)+(tot2*350000))*0.8;
        mensaje.innerHTML=``
        mensaje.innerHTML=`<div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">$${elTotal}</p>
                <button onclick="compro()">confirmar compra</button>
            </div>`
        
    }

    if (tot1==0 || tot2==0 || tot1== "" || tot2== "")  {
        let elTotal=((tot1*500000)+(tot2*350000))
        mensaje.innerHTML=``
        mensaje.innerHTML=`<div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">$${elTotal}</p>
                <button onclick="compro(${elTotal})" >confirmar compra</button>
            </div>`
    }
    
}

compro(es){
    alert(`Se compro ${es}`)
}

function enforceMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
        }
    }
}