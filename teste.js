import { Queue } from './models/Queue.js';

const fila = new Queue();
let proximoId = 0;

function criarPedido(cliente, itens) {
  return {
    id: proximoId++,
    cliente,
    itens,
    status: 'na_fila',
    horaPedido: new Date().toISOString(),
  };
}

fila.queue(criarPedido('Ana', ['X-burger', 'Batata']));
fila.queue(criarPedido('Bruno', ['Coca-cola']));

console.log(fila.toArray());
console.log('Tamanho da fila:', fila.length());
console.log('Próximo pedido:', fila.peek());