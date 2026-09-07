class MinStack {
    public stack: number[][]
    
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        let top = this.stack.length-1

        if(top === -1){
            this.stack.push([val,val])
        }else{
            if(val < this.stack[top][1]){
            this.stack.push([val,val])

            }else{
            this.stack.push([val,this.stack[top][1]])

            }
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1][0]
    }


    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length-1][1]
        
    }
}
