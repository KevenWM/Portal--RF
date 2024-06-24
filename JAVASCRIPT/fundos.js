function veneto30() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    //Muda o nome
    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VÊNETO CORPORATE</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O fundo tem como objetivo compor uma carteira diversificada com exposição à títulos de renda fixa,  selecionados de forma quantitativa e qualitativa, pela equipe de gestão da Vêneto com o objetivo de obter ganhos de capital mediante operações nos mercados de crédito privado, utilizando-se dos instrumentos disponíveis tanto nos mercados à vista quanto nos mercados de derivativos, podendo recorrer, entre outros, a mecanismos de hedge, de arbitragem e alavancagem para alcançar seus objetivos.</p>`

    //Muda o link do maisretorno
    iframe.innerHTML = iframe.innerHTML = `<div class="div-status"> <iframe id="iframe-maisret" class="fundos-maisret"
    src="https://maisretorno.com/fundo/veneto-corporate-fi-rf-lp" scrolling="no"
    frameborder="0"></iframe></div>`

    //`<div class="div-status">
    //<iframe class="fundos-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    //scrolling="no" frameborder="0"></iframe>
    //</div>`

    // Muda a tabela de rendimentos
    tabela.innerHTML = `<div class="div-status-tabela">
      <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/veneto-corporate-fi-rf-lp"
          scrolling="no" frameborder="0"></iframe>
  </div>`
    //tabela.innerHTML = `<div class="div-status-tabela">
    //<iframe class="tabela-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    //    scrolling="no" frameborder="0"></iframe>
    //</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/EM BREVE.pdf" type="text/pdf">`
}

function vpmulti() {
    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP MULTI SELECTION FIC FIM</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O fundo tem como objetivo compor uma carteira diversificada com exposição à fundos multimercado,  selecionados de forma quantitativa e qualitativa, pela equipe de gestão da Vêneto com o objetivo de obter ganhos de capital mediante operações nos mercados de juros, câmbio, ações, commodities e dívida, utilizando-se dos instrumentos disponíveis tanto nos mercados à vista quanto nos mercados de derivativos, podendo recorrer, entre outros, a mecanismos de hedge, de arbitragem e alavancagem para alcançar seus objetivos.</p>`

    iframe.innerHTML = `<div class="div-status"> <iframe id="iframe-maisret" class="fundos-maisret"
    src="https://maisretorno.com/fundo/vp-multi-selection-fic-fim" scrolling="no"
    frameborder="0"></iframe></div>`

    // Muda a tabela de rendimentos

    tabela.innerHTML = `<div class="div-status-tabela">
      <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-multi-selection-fic-fim"
          scrolling="no" frameborder="0"></iframe>
  </div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/VP MULTI SELECTION FIC FIM.pdf" type="text/pdf">`

}

function vpprev() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP PREV PREMIUM FIRF</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O VP PREV PREMIUM tem como objetivo obter retornos
    superiores à variação do CDI no médio e longo prazo através de aplicações concentradas prioritariamente em ativos financeiros que diretamente ou indiretamente estejam expostos ao risco de crédito privado. Além disso, faz parte da estratégia uma diversificação de setores e ativos financeiros, focado em bancos e debêntures de empresas de elevada qualidade e com um prêmio adequado. São realizados acompanhamentos periódicos de todos os ativos para avaliação de crédito e ajustes das posições do fundo.</p>`

    //Muda o link do maisretorno

    iframe.innerHTML = `<div class="div-status">
    <iframe class="fundos-maisret" src="https://maisretorno.com/fundo/vp-previdencia-premium-fie-fi-rf-cp"
        scrolling="no" frameborder="0"></iframe>
</div>`
    // Muda a tabela de rendimentos

    tabela.innerHTML = `<div class="div-status-tabela">
 <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-previdencia-premium-fie-fi-rf-cp"
     scrolling="no" frameborder="0"></iframe>
</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/VP PREVIDENCIA.pdf" type="text/pdf">`
}

function vpfidc() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP CRED ESTRUTURADO FIC FIM CP</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O fundo, constituído sob a forma de condomínio aberto com prazo de duração indeterminado, tem como objetivo superar seu benchmark, atrelado ao CDI, mediante aplicação dos recursos em cotas de fundos de investimento de diversas classes, predominantemente em cotas de fundos de investimento em direitos creditórios, padronizados ou não, e em cotas de fundos de investimento em cotas de fundos de investimento em direitos creditórios, padronizados ou não. O resgate das cotas do fundo tem sua cotização em D+128 e liquidação em D+130..</p>`

    //Muda o link do maisretorno

    iframe.innerHTML =
        `<div class="div-status">
    <iframe class="fundos-maisret" src="https://maisretorno.com/fundo/vp-credito-estruturado-fic-fim-cp"
        scrolling="no" frameborder="0"></iframe>
</div>`
    // Muda a tabela de rendimentos

    tabela.innerHTML =
        `<div class="div-status-tabela">
    <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-credito-estruturado-fic-fim-cp"
     scrolling="no" frameborder="0"></iframe>
</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/VP CREDITO ESTRUTURADO.pdf" type="text/pdf">`
}

function vplatache() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP LATACHE FC FIM CP</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">Fundo desenhado junto à Latache Capital e com o objetivo de investir no Latache Crédito Estruturado FIM CP. A Latache conta com cerca de R$ 1 bilhão sob gestão e tem o Pedro Sternick como sócio gestor da companhia. A estratégia busca atuar como hedge fund de crédito com mandato híbrido, realizando investimentos oportunísticos em high yield, crédito estruturado e special situations. O produto investido tem benchmark CDI e liquidação em D+723, enquanto que o fundo da Vêneto tem cotização em D+725 e liquidação em D+757.</p>`

    //Muda o link do maisretorno

    iframe.innerHTML = `<div class="div-status">
    <iframe class="fundos-maisret" src="https://maisretorno.com/fundo/vp-latache-special-situations-fic-fim-cp"
        scrolling="no" frameborder="0"></iframe>
</div>`
    // Muda a tabela de rendimentos

    tabela.innerHTML = `<div class="div-status-tabela">
 <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-latache-special-situations-fic-fim-cp"
     scrolling="no" frameborder="0"></iframe>
</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/VP LATACHE.pdf" type="text/pdf">`
}

function vpfip() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP LONG ONLY</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O fundo tem como objetivo compor uma carteira diversificada com exposição à fundos de ações, selecionados de forma quantitativa e qualitativa, pela equipe de gestão da Vêneto com o objetivo de obter ganhos de capital mediante operações nos mercados de renda variável, utilizando-se dos instrumentos disponíveis tanto nos mercados à vista quanto nos mercados de derivativos, podendo recorrer, entre outros, a mecanismos de hedge, de arbitragem e alavancagem para alcançar seus objetivos.</p>`

    //Muda o link do maisretorno

    iframe.innerHTML = `<div class="div-status">
    <iframe class="fundos-maisret" src="https://maisretorno.com/fundo/vp-long-only-fia-responsabilidade-limitada"
        scrolling="no" frameborder="0"></iframe>
</div>`
    //`<div class="div-status">
    //<iframe class="fundos-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    //    scrolling="no" frameborder="0"></iframe>
    //</div>`
    // Muda a tabela de rendimentos

    tabela.innerHTML = `<div class="div-status-tabela">
 <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-long-only-fia-responsabilidade-limitada"
     scrolling="no" frameborder="0"></iframe>
</div>`
    //`<div class="div-status-tabela">
    //<iframe class="tabela-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    // scrolling="no" frameborder="0"></iframe>
    //</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/Long Only.pdf" type="text/pdf">`
}

function vpcredit() {

    const nome = document.getElementById('nome-fundo');
    const descrip = document.getElementById('descrip-fundo');
    const iframe = document.getElementById('iframe-maisretorno');
    const tabela = document.getElementById('iframe-tabela');
    const pdf = document.getElementById('pdf-funds-holder');

    //Muda o nome
    nome.innerHTML = `<h3 id="nome-fundo" class="title-dmc">VP CREDIT SELECTION</h3>`

    //Muda a descrição
    descrip.innerHTML = `<p class="title-dmc-desc">O fundo tem como objetivo compor uma carteira diversificada com exposição à títulos de renda fixa,  selecionados de forma quantitativa e qualitativa, pela equipe de gestão da Vêneto com o objetivo de obter ganhos de capital mediante operações nos mercados de crédito privado, utilizando-se dos instrumentos disponíveis tanto nos mercados à vista quanto nos mercados de derivativos, podendo recorrer, entre outros, a mecanismos de hedge, de arbitragem e alavancagem para alcançar seus objetivos.</p>`

    //Muda o link do maisretorno
    iframe.innerHTML = iframe.innerHTML = `<div class="div-status"> <iframe id="iframe-maisret" class="fundos-maisret"
    src="https://maisretorno.com/fundo/vp-credit-selection-fic-fim" scrolling="no"
    frameborder="0"></iframe></div>`

    //`<div class="div-status">
    //<iframe class="fundos-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    //scrolling="no" frameborder="0"></iframe>
    //</div>`

    // Muda a tabela de rendimentos
    tabela.innerHTML = `<div class="div-status-tabela">
      <iframe class="tabela-maisret" src="https://maisretorno.com/fundo/vp-credit-selection-fic-fim"
          scrolling="no" frameborder="0"></iframe>
  </div>`
    //tabela.innerHTML = `<div class="div-status-tabela">
    //<iframe class="tabela-maisret" src="https://maisretorno.com/fundo/veneto-investimento-fim-cp-ie"
    //    scrolling="no" frameborder="0"></iframe>
    //</div>`

    pdf.innerHTML = `<embed id="" width="80%" height="600px" src="../PDF/Credit Selection.pdf" type="text/pdf">`
}

