/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 *
 * Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
 Проставит атрибут hidden, если такого атрибута нет вообще
 Проставит класс male/female, в зависимости от содержимого ячейки Gender
 Установит inline-стиль style=«text-decoration: line-through», если значение ячейки Age меньше 18
 */
function highlight(table) {
  const AVAILABLE_CLASSES = {
    'false': 'unavailable',
    'true': 'available'
  };
  const GENDERS = {
    m: 'male',
    f: 'female'
  };
  const rows = table.rows;

  for (const key in rows) {
    const row = rows[key];
    const cells = row.cells;

    if (cells) {
      const is_available = String(cells[3].dataset.available);
      const gender = cells[2].textContent;
      const less_18 = +cells[1].textContent < 18;

      if (is_available === 'undefined') {
        row.setAttribute('hidden', 'true');
      } else {
        row.classList.add(AVAILABLE_CLASSES[is_available]);
      }

      row.classList.add(GENDERS[gender]);

      if (less_18) {
        row.setAttribute('style', 'text-decoration: line-through;');
      }
    }

  }

}
