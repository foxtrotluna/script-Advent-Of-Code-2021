const Part1 = async (buffer) =>{
    const input = buffer.toString()
    const split = input.split('\n')
    let count = 0 // Times the depth measurement increases
    let previous = parseInt(split[0])+parseInt(split[1])+parseInt(split[2]) // The previous depth measurement
    for (let i=0;i<split.length-2;i++){
        const sum = parseInt(split[i])+parseInt(split[i+1])+parseInt(split[i+2])
        if (sum > previous) {
            count++
        }
        previous = sum
    }
    console.log(count)
}

export default Part1