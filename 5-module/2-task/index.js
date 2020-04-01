/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  const COLUMNS = [
    'name',
    'age',
    'salary',
    'city'
  ];
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.template = `
      <thead>
          <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Salary</td>
              <td>City</td>
          </tr>
      </thead>
      <tbody></tbody>
  `;
  this.el.insertAdjacentHTML('afterbegin', this.template);

  /**
   * @param {Array} rows
   */
  this.insertValues = (rows) => {
    const tbody = this.el.getElementsByTagName('tbody')[0];

    Array.from(tbody.rows).forEach((row) => row.remove());

    rows.forEach((row) => {
      const tr = document.createElement('tr');
      const tds = Object.values(row);

      tds.forEach((cell) => {
        const td = document.createElement('td');
        td.innerText = `${cell}`;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  };
  this.insertValues(items);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {

    const sort_by = COLUMNS[column];

    switch (sort_by) {
      case 'name':
        const names = items.map((item) => item[sort_by]);
        desc ? names.sort().reverse() : names.sort();
        items.map((item, id) => Object.assign(item, {name: names[id]}));
        break;
      default:
        items.sort((a, b) => desc ? b[sort_by] - a[sort_by] : a[sort_by] - b[sort_by]);
    }

    this.insertValues(items);
  };
}
