document.getElementById('btnTem').addEventListener('click',()=>{
    const cod = 'câncer'
    if(document.getElementById('senha').value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }else if(document.getElementById('senha').value == ''){
        alert('Preencha os dados solicitados')
    }else{
        alert('Senha incorreta')
    }
})