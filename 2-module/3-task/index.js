let calculator = {
  a: null,
  b: null,
  read: (first, last) => {
    this.a = first;
    this.b = last;
  },
  sum: () => this.a + this.b,
  mul: () => this.a * this.b,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
