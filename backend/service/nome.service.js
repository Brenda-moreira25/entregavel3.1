import { Queue } from "../models/Queue.js";

export class nomeService {
  constructor() {
    this.fila = new Queue();
    this.fila.queue(
  { id: 1, cliente: 'Ana', itens: ['X-burger', 'Batata'], status: 'na_fila', horaPedido: new Date().toISOString() },
  { id: 2, cliente: 'Bruno', itens: ['Coca-cola'], status: 'na_fila', horaPedido: new Date().toISOString()}

)
  }
  listarFila() {
  return this.fila.toArray();
}
  
  
  
  
  validaAutenticacao(autenticacao) {
    const [prefixo, numero] = autenticacao.split("-");

    if (prefixo !== "RBD" || Number(numero) % 2 === 0) {
      return false;
    }

    return true;
  }

  pagaRecompensa(valorRecompensa) {
    const valorTesouro = this.fila.getTesouro();

    if (valorRecompensa >= valorTesouro) {
      return false;
    }

    const novoValorTesouro = valorTesouro - valorRecompensa;
    this.fila.setTesouro(novoValorTesouro);
    console.log(
      `O novo valor do tesouro é de ${novoValorTesouro} moedas de ouro`,
    );

    return true;
  }
 
} 
