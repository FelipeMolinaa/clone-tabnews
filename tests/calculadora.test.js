const calculadora = require("../models/calculadora")

test("somar 2 + 2 deve retornar 4", () =>{
    const resultado = calculadora.Somar(2,2);
    expect(resultado).toBe(4)
})

test("somar 5 + 100 deve retornar 4", () =>{
    const resultado = calculadora.Somar(5, 100);
    expect(resultado).toBe(105)
})

test("somar 'banana' + 100 deve retornar 'erro'", () =>{
    const resultado = calculadora.Somar('banana', 100);
    expect(resultado).toBe("erro")
})

test("somar 5 + 'banana' deve retornar 'erro'", () =>{
    const resultado = calculadora.Somar(5, 'banana');
    expect(resultado).toBe("erro")
})

test("somar 'banana' + 'banana' deve retornar 'erro'", () =>{
    const resultado = calculadora.Somar('banana', 'banana');
    expect(resultado).toBe("erro")
})

test("dividir 20 / 2 deve retornar 10", () =>{
    const resultado = calculadora.Dividir(20, 2);
    expect(resultado).toBe(10)
})

test("dividir 2 / 0 deve retornar 'erro'", () =>{
    const resultado = calculadora.Dividir(0, 2);
    expect(resultado).toBe('erro')
})

test("dividir 0 / 2 deve retornar 'erro'", () =>{
    const resultado = calculadora.Dividir(2, 0);
    expect(resultado).toBe('erro')
})

test("dividir 2 / 400000000000 deve retornar 0.5", () =>{
    const resultado = calculadora.Dividir(2, 4);
    expect(resultado).toBe(0.5)
})