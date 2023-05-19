import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 1 + 4 = 5', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }))

  it('Deve garantir que 5 - 2 = 3',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let subtracao = service.calcular(5, 2, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(3);
  }))

  it('Deve garantir que 5 / 2 = 2.5', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(5, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(2.5);
  }))


  it('Deve garantir que 5 * 2 = 10', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplicacao = service.calcular(5, 2, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(10);
  }))

  it('Deve garantir 0 para operacao invalida', 
  inject([CalculadoraService], (service: CalculadoraService) => {
    let oprecaoInvalida = service.calcular(5, 2, '%');
    expect(oprecaoInvalida).toEqual(0);
  }))

});
