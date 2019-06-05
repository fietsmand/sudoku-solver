const chunksint = [0, 3, 6]


getChunk = (row, col) => {
    chunksint.map((l, p) => {
        chunksint.map((o, i) => {
            if (col >= l && col <= l + 2 && row >=o && row <= o+2) {
                console.log(p+(i*3));

            }
        })
    })

}

getChunk(6,3)