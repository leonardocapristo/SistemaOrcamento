function calculate() {
    // Preços das barras, chapas e itens fixos
    const price30x20 = 50.00;
    const price60x40 = 80.00;
    const priceChapa = 50.00;
    const priceCaixaCorreio = 100.00;
    const priceFechadura = 75.00;
    const priceTinta = 80.00;
    const priceSacosPeso = 20.00; // Adicione o preço do saco de peso
    const priceMotor = {
        motor4: 200.00,
        motor8: 250.00,
        motor16: 300.00
    };

    // Preços dos kits
    const priceKit = {
        kit1: 50.00,
        kit2: 60.00,
        kit3: 70.00
    };

    const kitNames = {
        kit1: 'Kit 15x15',
        kit2: 'Kit 15x18',
        kit3: 'Kit 18x18'
    };

    const motorNames = {
        motor4: 'Motor 4 segundos',
        motor8: 'Motor 8 segundos',
        motor16: 'Motor 16 segundos'
    };

    // Obtendo valores dos campos
    const bars30x20 = parseInt(document.getElementById('bars30x20').value) || 0;
    const bars60x40 = parseInt(document.getElementById('bars60x40').value) || 0;
    const chapa = parseInt(document.getElementById('chapa').value) || 0;
    const kit = document.getElementById('kit').value;
    const motor = document.getElementById('motor').value;
    const sacosPeso = parseInt(document.getElementById('sacosPeso').value) || 0;
    
    // Custos adicionais fixos
    const totalCaixasCorreio = 1; // Valor fixo
    const totalFechaduras = 1; // Valor fixo

    // Calculando o total de barras, chapas e custos fixos
    const totalBars30x20 = bars30x20 > 0 ? bars30x20 : 0;
    const totalBars60x40 = bars60x40 > 0 ? bars60x40 : 0;
    const totalChapas = chapa > 0 ? chapa : 0;
    const totalCostBars30x20 = totalBars30x20 * price30x20;
    const totalCostBars60x40 = totalBars60x40 * price60x40;
    const totalCostChapas = totalChapas * priceChapa;
    const totalCostCaixasCorreio = totalCaixasCorreio * priceCaixaCorreio;
    const totalCostFechaduras = totalFechaduras * priceFechadura;
    const totalCostKit = priceKit[kit] || 0;
    const totalCostMotor = priceMotor[motor] || 0;
    const totalCostSacosPeso = sacosPeso * priceSacosPeso;
    
    // Cálculo total
    const totalCost = totalCostBars30x20 + 
                      totalCostBars60x40 + 
                      totalCostChapas + 
                      totalCostCaixasCorreio + 
                      totalCostFechaduras + 
                      totalCostKit + 
                      totalCostMotor + 
                      totalCostSacosPeso + 
                      priceTinta; // Tinta é sempre incluída

    // Exibindo o resultado
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        ${totalBars30x20 > 0 ? `<p>Total de barras 30x20: ${totalBars30x20} (R$ ${totalCostBars30x20.toFixed(2)})</p>` : ''}
        ${totalBars60x40 > 0 ? `<p>Total de barras 60x40: ${totalBars60x40} (R$ ${totalCostBars60x40.toFixed(2)})</p>` : ''}
        ${totalChapas > 0 ? `<p>Total de chapas de ferro: ${totalChapas} (R$ ${totalCostChapas.toFixed(2)})</p>` : ''}
        ${totalCostKit > 0 ? `<p>Custo do Kit selecionado: ${kitNames[kit] || 'Não selecionado'} (R$ ${totalCostKit.toFixed(2)})</p>` : ''}
        ${totalCostMotor > 0 ? `<p>Custo do Motor selecionado: ${motorNames[motor] || 'Não selecionado'} (R$ ${totalCostMotor.toFixed(2)})</p>` : ''}
        <p>Custo da tinta: R$ ${priceTinta.toFixed(2)}</p>
        <p>Custo dos sacos de peso: ${sacosPeso} (R$ ${totalCostSacosPeso.toFixed(2)})</p>
        <p>Custo da caixa de correio: R$ ${totalCostCaixasCorreio.toFixed(2)}</p>
        <p>Custo da fechadura: R$ ${totalCostFechaduras.toFixed(2)}</p>
        <p class="total-cost">Custo total: R$ ${totalCost.toFixed(2)}</p>
    `;
}
