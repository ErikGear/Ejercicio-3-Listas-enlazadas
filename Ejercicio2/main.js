class NodoDoble {
  constructor(data) {
    this._data = data;
    this._next = null;
    this._previous = null;
  }

  set setData(newData) {
    this._data = newData;
  }
  get getData() {
    return this._data;
  }

  set setNext(newNext) {
    this._next = newNext;
  }
  get getNext() {
    return this._next;
  }

  set setPrevious(newPrevious) {
    this._previous = newPrevious;
  }
  get getPrevious() {
    return this._previous;
  }
}

class ListaDoble {
  static valorLimite = 9;
  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  get getSize() {
    return this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  insertarNodo(nodo) {
    const nuevoNodo = new NodoDoble(nodo);
    if (this.head === null) {
      this.head = nuevoNodo;
      this.tail = nuevoNodo;
    } else {
      this.tail._next = nuevoNodo;
      nuevoNodo._previous = this.tail;
      this.tail = nuevoNodo;
    }

    this.size++;
  }

  recorrerLista() {
    let tmp = this.head;

    while (tmp !== null) {
      console.log(`${tmp._data}`);
      tmp = tmp._next;
    }
  }

  recorridoInverso() {
    let tmp = this.tail;

    while (tmp !== null) {
      console.log(`${tmp._data}`);
      tmp = tmp._previous;
    }
  }

  eliminarNodo(nodo) {
    if (this.size === 0) {
      throw "Error, Lista sin elementos";
    }

    //cuando el nodo es la cabeza HEAD
    if (this.head._data === nodo) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head._next;
        this.head._previous = null;
      }
      this.size--;

      //cuando el nodo esta en la cola
    } else if (this.tail._data === nodo) {
      this.tail = this.tail._previous;
      this.tail._next = null;
      this.size--;
    } else {
      //cuando el nodo esta en el medio de la lista
      let tmp = this.head;

      while (tmp._next !== null) {
        if (tmp._next._data === nodo) {
          tmp._next = tmp._next._next;
          tmp._next._previous = tmp;
          this.size--;
          break;
        }
        tmp = tmp._next;
      }
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  nodosMayores() {
    let tmp = this.head;

    while (tmp !== null) {
      if (tmp.getData > ListaDoble.valorLimite) {
        console.log(`${tmp._data}`);
      }
      tmp = tmp._next;
    }
  }
}

const enterosPositivos = new ListaDoble();
for (let i = 0; i < 10; i++) {
  const numero = Math.floor(Math.random() * (20 - 1) + 1) + 1;
  enterosPositivos.insertarNodo(numero);
}


//mostrando lista
enterosPositivos.recorrerLista();
console.log("\n");

enterosPositivos.nodosMayores();
console.log("\n");

