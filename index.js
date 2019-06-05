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


const chunksint = [0, 3, 6]
//sudoku[0][0]
//sudoku[0][1]
//sudoku[0][2]
//sudoku[1[0]
//sudoku[1][1]
//sudoku[1][2]
//sudoku[2][0]
//sudoku[2][1]
//sudoku[2][2]
    
// row[0 - 2] && col[0 - 2]
// row[3 - 5] && col[3 - 5]
// row[6 - 8] && col[6 - 8]

const completeRow = [1,2,3,4,5,6,7,8,9];

const resolveColumns = (s) => {
    let columns = []
    for(i = 0; i < 9; i++){
        column = []
        sudoku.map(row => {
            column.push(row[i])
        })
        columns.push(column)
    }

    return columns
}
// console.log(columns);

const resolveChunks = (s) => {
    let ltor = []
    chunksint.map(l => {
        chunksint.map(o => {
            let r = []
            for(i = l; i <= (l+2); i++){

                for (p = o; p <= (o+2); p++) {
                    r.push(s[i][p])
                }
            }
            ltor.push(r)
        })
    })

    return ltor
}


const getChunk = (row, col) => {
    let c;

    chunksint.map((l, p) => {
        chunksint.map((o, i) => {
            if (col >= l && col <= l + 2 && row >= o && row <= o + 2) {
                c = p + (i * 3);
            } 
        })
    })

    return c
}

const compare = (comparray, arr) => {
    c = comparray

    //gets numbers that are needed
    arr.map(num => {
        if (!num.length) {
            // console.log(num);
            c.map((j, i) => {
                if (j === num) {
                    c.splice(i, 1)
                }
            })
        }
    })
    c.map(n => {
        arr.map((num, o) => {
            if (num.length) {
                num.map((k, i) => {
                    if (!c.includes(k)) {
                        num.splice(i, 1)
                        if(num.length === 1){
                            arr[o] = num[0]
                        }
                    }
                })
            }
        })
    })


    return arr
}

let newSudoku = s => {
    newestSudoku = []
    let columns = resolveColumns(s)
    let chunks = resolveChunks(s)
    const c = completeRow
    // console.log(columns);
    s.map((row, i) => {

        newRow = []
        console.log(row);
        row.map((num, k) => {
            
            let newNum = []
            chunkId = getChunk(i, k)
            // row = compare(completeRow, row)
            // columns[0] = compare(completeRow, columns[k])
            // compare(completeRow, chunks[chunkId])
            if(num === 0) {
                for(j = 1; j <= 9; j++){
                    if(!row.includes(j) && !columns[k].includes(j) && !chunks[chunkId].includes(j)){
                        newNum.push(j)
                    }
                }
            } else if (num.length > 1) {
    
                num.map(n => {
                    if (!row.includes(n) && !columns[k].includes(n) && !chunks[chunkId].includes(n)) {
                        newNum.push(n)
                    }
                })
                
            } else {
                c.map((j, i) => {
                    if (j === num) {
                        c.splice(i, 1)
                    }
                })
                c.map(n => {
                    // row.map((num, o) => {
                    //     if (num.length) {
                    //         num.map((k, i) => {
                    //             if (!c.includes(k)) {
                    //                 num.splice(i, 1)
                    //                 newNum = num
                    //             } else {
                    //                 newNum = num
                    //             }
                    //         })
                    //     } else {
                    //                 newNum = num
                    //     }
                    // })
                    columns[k].map((num, o) => {
                        if (num.length) {
                            num.map((k, i) => {
                                if (!c.includes(k)) {
                                    num.splice(i, 1)
                                    newNum = num
                                } else {
                                    newNum = num
                                }
                            })
                        } else {
                            newNum = num
                        }
                    })
                })
                if(!newNum.length || newNum === [] ) {
                    newNum = num;
                }
            }

            if(newNum.length === 1){
                newNum = newNum[0]
            }

            newRow.push(newNum)
        });
        newestSudoku.push(newRow)
    })
    return newestSudoku
}




resolveSudoku = (a) => {

    let newSud = a

    let possibilities = [1]

    resSud = d => {
        d.map(async (row, i) => {
            row.map((num, j) => {
                if(num === 0 || num === [0] || num.length > 1) {
                    // console.log("this many ", i, " ", j);
                    possibilities.push([i, j])
                } 
            })
        })
    }

    i = [0, 1, 2, 3, 6, 6, 6, 6, 6, 8]


    // for (i = 0; possibilities.length!== 0; i++) {
    //     console.log(possibilities.length);
    //     possibilities = []
    //     newSud = newSudoku(newSud)


    //     resSud(newSud)
    // }


    i.map(p => {
        console.log(possibilities.length);
        possibilities = []
        newSud = newSudoku(newSud)
        
        
        resSud(newSud)
        // console.log(possibilities);
        // console.log(newSud.map(r => r));
          
    })
}

resolveSudoku(sudoku)
// console.log(newSudoku);
