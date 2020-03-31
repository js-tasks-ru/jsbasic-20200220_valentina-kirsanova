/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  const rows = table.rows;
  for (const row of rows) {
    const rowId = row.rowIndex;
    const cells = row.cells;

    for (const cell of cells) {
      const cellId = cell.cellIndex;
      if (cellId === rowId) {
        cell.style.background = 'red';
      }
    }
  }
}
