
function assembleia() {
    reset()
    const div = document.getElementById('container-assembleia');
    div.style.display = 'block';
    div.innerHTML = `    <div id="container">
    <iframe class="googlesheets"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRpuf_Vbeg095025hVjIitjIEiFKYZsO7OEUP9_GLR5Yz2COUOEI7-QlRK9UIZRt-q-wSOGAL4PEn7p/pubhtml"
        scrolling="no"></iframe>
</div>
`
}


function primarias() {
    reset()
    const div = document.getElementById('container-primarias');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`

}

function secundario() {
    reset()
    const div = document.getElementById('container-secundario');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function operacoes() {
    reset()
    const div = document.getElementById('container-operacoes');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function empresas() {
    reset()
    const div = document.getElementById('container-empresas');
    div.style.display = 'block';
}

function reset() {

    const div1 = document.getElementById('container-assembleia');
    const div2 = document.getElementById('container-primarias');
    const div3 = document.getElementById('container-secundario');
    const div4 = document.getElementById('container-operacoes');
    const div5 = document.getElementById('container-empresas');

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';


}

/* Seleciona o elmento da página que quero editar*/
/*let btassembleia = document.querySelector('#container-rendafixa')

document.getElementById("container-assembleia").style.display = "block"

btassembleia.innerHTML = `<div type="button" class="collapsible"> <button>Simpar</button> </div>
    <div class="content-collap">Texto muito louco</div>`*/





