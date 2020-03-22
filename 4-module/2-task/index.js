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
  // const diagonalCells = rows.map((row) => {
  //   const cells = Array.from(row.cells);
  //   const rowID = row
  //   return cells.filter((cell) => cell.cellIndex === rowID);
  // });
  //
  // diagonalCells.forEach((cell) => {
  //   cell.setAttribute('style', 'background-color: red;');
  // });
}
