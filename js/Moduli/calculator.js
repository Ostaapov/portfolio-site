export function sum(a, b) {

    return a + b;
}

export function raz(a, b){

    return a - b;
}

export function umn(a, b){

    return a * b;
}

export function del(a, b){

    if (b === 0) {
        throw new Error("Деление на ноль невозможно");
      }
      return a / b;
}