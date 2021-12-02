const Part1 = async (buffer) =>{
    const input = buffer.toString()
    const split = input.split('\n')
    let count = 0 // Times the depth measurement increases
    let previous = split[0] // The previous depth measurement
    for (const depth of split){
        if (parseInt(depth) > parseInt(previous)) {
            count++
        }
        previous = depth
    }
    console.log(count)
}

export default Part1