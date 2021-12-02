const Part1 = async (buffer) =>{
    const input = buffer.toString()
    const split = input.split('\n')
    let horizontal = 0
    let vertical = 0
    let aim = 0
    for(const command of split){
        const values = command.split(' ')
        if (values[0] == 'forward'){
            horizontal += parseInt(values[1])
            vertical += (aim*parseInt(values[1]))
        }
        if (values[0] == 'down'){
            aim += parseInt(values[1])
        }
        if (values[0] == 'up'){
            aim -= parseInt(values[1])
        }
    }
    console.log('H: '+horizontal)
    console.log('V: '+vertical)
    console.log('Product: '+(horizontal*vertical))
}

export default Part1