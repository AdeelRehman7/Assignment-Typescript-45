function makeshirt(size: string = `large`, text: string = ` I love typescript`): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)
}
makeshirt();
makeshirt(`medium`)
makeshirt(`small`, `I need a big shirt to wear`)