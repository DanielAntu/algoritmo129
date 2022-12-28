const input_container = document.querySelector('.input-container')
const res = document.querySelector('.res')
const calcular = document.querySelector('#calcular')
const closebtn = document.querySelector('#closebtn')
const salario = document.querySelector('#sal')
const reset = document.querySelector('#reset')
const pdes = document.querySelector('#pdes')
const desc = document.querySelector('#desc')

// funçoes
const verifytext = (text) => {
    return text.replace(/[^0-9,]/g, '')
}

const verifyDesconto = (s) => {
    let desconto = 0
    if (s <= 600) {
        desconto = 0
        return desconto
    } else if (s <= 1200) {
        desconto = 0.2
        return desconto
    } else if (s <= 2000) {
        desconto = 0.25
        return desconto
    } else {
        desconto = 0.30
        return desconto
    }
}

const verifySDesconto = (s) => {
    let desconto = ''
    if (s <= 600) {
        desconto = '0'
        return desconto
    } else if (s <= 1200) {
        desconto = '20%'
        return desconto
    } else if (s <= 2000) {
        desconto = '25%'
        return desconto
    } else {
        desconto = '30%'
        return desconto
    }
}

const calculoDesc = (s) => {
    let desconto = verifyDesconto(s)
    let valor = s * desconto
    return valor
}

// eventos
salario.addEventListener('input', (e) => {
    if (salario.value.length > 0) {
        calcular.removeAttribute('disabled')
    } else {
        calcular.setAttribute('disabled', '')
    }
    const updateValue = verifytext(e.target.value)

    e.target.value = updateValue
})

calcular.addEventListener('click', () => {
    calcular.removeAttribute('disabled')
    const sala = salario.value.replace(',', '.')
    const sal = Number(sala)
    const desconto = calculoDesc(sal)
    pdes.innerHTML = verifySDesconto(sal)
    desc.innerHTML = `R$${desconto.toFixed(2)}`
    input_container.classList.add('hide')
    res.classList.remove('hide')
})

reset.addEventListener('click', () => {
    salario.value = ''
})

closebtn.addEventListener('click', () => {
    input_container.classList.remove('hide')
    res.classList.add('hide')
    calcular.setAttribute('disabled', '')
    salario.value = ''
})