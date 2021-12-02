import readFileAsync from 'read-file-async'

import Part1 from './parts/part1.js'
import Part2 from './parts/part2.js'

const filename = process.env.TEST ? './inputs/testinput.txt' : './inputs/input.txt'
const run = async () =>{
    const buffer = await readFileAsync(filename)
    console.log('Part 1:')
    Part1(buffer)
    console.log('------\n Part 2:')
    Part2(buffer)
}

run()