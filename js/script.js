function calculate() {
    // Preços das barras, chapas e itens fixos
    const price30x20 = 50.00;
    const price60x40 = 80.00;
    const priceChapa = 50.00;
    const priceCaixaCorreio = 100.00;
    const priceFechadura = 75.00;

    // Preços dos kits
    const priceKit = {
        kit1: 50.00,
        kit2: 60.00,
        kit3: 70.00
    };

    // Obtendo valores dos campos
    const bars30x20 = parseInt(document.getElementById('bars30x20').value) || 0;
    const bars60x40 = parseInt(document.getElementById('bars60x40').value) || 0;
    const chapa = parseInt(document.getElementById('chapa').value) || 0;
    const caixaCorreio = parseInt(document.getElementById('caixaCorreio').value) || 0;
    const fechadura = parseInt(document.getElementById('fechadura').value) || 0;
    const kit = document.getElementById('kit').value;
    
    // Calculando o total de barras, chapas e custos fixos
    const totalBars30x20 = bars30x20;
    const totalBars60x40 = bars60x40;
    const totalChapas = chapa;
    const totalCaixasCorreio = caixaCorreio;
    const totalFechaduras = fechadura;

    const totalBars = totalBars30x20 + totalBars60x40;
    const totalCost = (totalBars30x20 * price30x20) + 
                      (totalBars60x40 * price60x40) + 
                      (totalChapas * priceChapa) + 
                      (totalCaixasCorreio * priceCaixaCorreio) + 
                      (totalFechaduras * priceFechadura) + 
                      (priceKit[kit] || 0);
    
    // Exibindo o resultado
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Total de barras 30x20: ${totalBars30x20}</p>
        <p>Total de barras 60x40: ${totalBars60x40}</p>
        <p>Total de chapas de ferro: ${totalChapas}</p>
        <p>Total de caixas de correio: ${totalCaixasCorreio}</p>
        <p>Total de fechaduras: ${totalFechaduras}</p>
        <p>Total de barras: ${totalBars}</p>
        <p>Custo do Kit selecionado: R$ ${priceKit[kit] || 0}</p>
        <p>Custo total: R$ ${totalCost.toFixed(2)}</p>
    `;
}
