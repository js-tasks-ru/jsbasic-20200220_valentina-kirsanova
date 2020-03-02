/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (!name) {
    return false;
  }

  const stringLength = name.length;

  const lessThan4 = stringLength < 4;
  const isEmpty = stringLength === 0;
  const hasSpaces = name.includes(' ');

  return !isEmpty && !lessThan4 && !hasSpaces;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
