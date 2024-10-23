document.getElementById('cep').addEventListener('blur', async function () {
    const cep = this.value
    
    if(cep.length === 8 || cep.length === 9){
        try{
            const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)

            const data = await response.json()
            document.getElementById('rua').value = data.address;
            document.getElementById('bairro').value = data.district;
            document.getElementById('cidade').value = data.city;
            document.getElementById('estado').value = data.state;

            if(data.city === undefined){
                document.getElementById('rua').value = "";
                document.getElementById('bairro').value = "";
                document.getElementById('cidade').value = "";
                document.getElementById('estado').value = "";
                alert("CEP não encontrado, tente novamente.")
            }

        } catch (error){
            console.log(error.message)
            alert("Erro ao buscar o CEP, tente novamente.")
        }
    } else {
        alert("CEP inválido. Insira um CEP com 8 números.")
    }
})