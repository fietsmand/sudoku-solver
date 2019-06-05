const col = [5,6,[1,2],8,[4,7,5],7,[1,9],2,3]
const row = [
    [1, 9], 6, [1, 5, 9],
    [3, 5],
    [3, 5], 7, 2, 8, 4
]
const completeRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunksint = [0, 3, 6]

const resolveColumns = (s) => {
    let columns = []
    for (i = 0; i < 9; i++) {
        column = []
        s.map(row => {
            column.push(row[i])
        })
        columns.push(column)
    }

    return columns
}
// console.log(columns);

const resolveChunks = (s) => {
    // ltor = left to right
    let ltor = []
    chunksint.map(l => {
        chunksint.map(o => {
            let r = []
            for (i = l; i <= (l + 2); i++) {

                for (p = o; p <= (o + 2); p++) {
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

const newS = [
    [ 5, 3, [ 1, 2, 4 ], [ 2, 6 ], 7, [ 2, 4, 6, 8 ],[ 1, 4, 8, 9 ],[ 1, 2, 4, 9 ],[ 2, 4, 8 ] ],
    [ 6,[ 2, 4, 7 ],[ 2, 4, 7 ],1,9,5,[ 3, 4, 7, 8 ],[ 2, 3, 4 ],[ 2, 4, 7, 8 ] ],
    [ [ 1, 2 ],9,8,[ 2, 3 ],[ 3, 4 ],[ 2, 4 ],[ 1, 3, 4, 5, 7 ],6,[ 2, 4, 7 ] ],
    [ 8, [ 1, 5 ], [ 1, 5, 9 ], 7, 6, [ 1, 4 ], [ 4, 5 ], [ 2, 4, 5 ], 3 ],
    [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
    [ 7, [ 1, 5 ], [ 1, 3, 5 ], 9, 2, [ 1, 4 ], [ 4, 5, 8 ], [ 4, 5 ], 6 ],
    [ [ 1, 9 ], 6, [ 1, 5, 9 ], [ 3, 5 ], [ 3, 5 ], 7, 2, 8, 4 ],
    [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
    [ 3, [ 4, 5 ], [ 4, 5 ], [ 2, 5, 6 ], 8, [ 2, 6 ], 1, 7, 9 ]
]

const compare = (comparray, s) => {
    // newSudoku = []
    missingNums = []
    chunks = resolveChunks(s)
    columns = resolveColumns(s)
    
    c = comparray
    // if (missingNums.length !== s.length)
    s.map((row, rowNum) => {
        row.map((num, colNum) => {
            if(!num.length) {
                let chunkId = getChunk(rowNum, colNum) 
                c.map((j, i) => {
                    if(j === num) {
                        if(chunks[chunkId].includes(j) || s[rowNum].includes(j) || columns[colNum].includes(j)){
                            c.splice(i, 1)
                        }
                    }
                })
                
            } else {
                
            }
        })
        missingNums.push(c)
        c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });

    // //gets numbers that are needed
    // arr.map(num => {
    // })



    // // console.log(c);

    // c.map(n => {
    //     arr.map((num, o) => {
    //         if(num.length) {
    //             num.map((k, i) => {
    //                 if(!c.includes(k)) {
    //                     num.splice(i,1)
    //                     newArray.push(num)
    //                 } else {
    //                     newArray.push(num)
    //                 }
    //             })
    //         } else {
    //             newArray.push(num)
    //         }
    //     })
    // })
    

    return missingNums
}

// console.log(compare(array2, col, row))
console.log(compare(completeRow, newS))