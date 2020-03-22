/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const list = document.createElement('ul');

  const items = friends.map((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    return li;
  });

  items.forEach((item) => {
    list.appendChild(item);
  });

  return list;
}
