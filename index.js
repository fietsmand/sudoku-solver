// const sudoku = [
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,3,0,8,5],
//     [0,0,1,0,2,0,0,0,0],
//     [0,0,0,5,0,7,0,0,0],
//     [0,0,4,0,0,0,1,0,0],
//     [0,9,0,0,0,0,0,0,0],
//     [5,0,0,0,0,0,0,7,3],
//     [0,0,2,0,1,0,0,0,0],
//     [0,0,0,0,4,0,0,0,9],
// ]

const sudoku = [
    [5,3,0,0,7,0,0,0,0], //i = 0
    [6,0,0,1,9,5,0,0,0], //i = 1
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
//   ^ sudoku[i=8][k=0]
]

//sudoku[0][0]
//sudoku[0][1]
//sudoku[0][2]
//sudoku[1[0]
//sudoku[1][1]
//sudoku[1][2]
//sudoku[2][0]
//sudoku[2][1]
//sudoku[2][2]
    
    
let columns = []
for(i = 0; i < 9; i++){
    column = []
    sudoku.map(row => {
        column.push(row[i])
    })
    columns.push(column)
}
// console.log(columns);

sudoku.map((row, i) => {
    newRow = []
    row.map((num, k) => {
        let newNum = []
        if(num === 0) {
            for(j = 1; j <= 9; j++){
                if(!row.includes(j) && !columns[k].includes(j) ){
                    newNum.push(j)
                }
            }
            // for(n = 0; n < 9; n++) {
            //     // if (sudoku[j][k])

            // }
        } else {
            newNum = [num];
        }
        newRow.push(newNum)
        // console.log(newNum);
    });

    
    console.log(newRow);
    
})