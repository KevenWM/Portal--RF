function veneto30() {
    reset()
    const div = document.getElementById('container-veneto30');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function vpmulti() {
    reset()
    const div = document.getElementById('container-vpmulti');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function vpprev() {
    reset()
    const div = document.getElementById('container-vpprev');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function vpfidc() {
    reset()
    const div = document.getElementById('container-vpfidc');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function vplatache() {
    reset()
    const div = document.getElementById('container-vplatache');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function vpfip() {
    reset()
    const div = document.getElementById('container-vpfip');
    div.style.display = 'block';
    div.innerHTML = `    <div class="embreve">
    <h1> EM BREVE </h1>
</div>
`
}

function reset() {

    const div1 = document.getElementById('container-vpprev');
    const div2 = document.getElementById('container-vplatache');
    const div3 = document.getElementById('container-vpmulti');
    const div4 = document.getElementById('container-vpfidc');
    const div5 = document.getElementById('container-vpfip');
    const div6 = document.getElementById('container-veneto30');


    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';

}