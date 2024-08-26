function calculateVao() {
    // Obtendo valores dos campos
    const largura = parseFloat(document.getElementById('largura').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;
    
    // Calculando o resultado
    const area = largura * altura;
    
    // Exibindo o resultado
    const resultElement = document.getElementById('resultVao');
    resultElement.innerHTML = `
        <p>Largura do Vão: ${largura} metros</p>
        <p>Altura do Vão: ${altura} metros</p>
        <p>Área do Vão: ${area.toFixed(2)} metros quadrados</p>
    `;
}
