import Algorithm from "./Algorithm"

class BubbleSort extends Algorithm {

  constructor() {
    super("Tri à bulles")
  }

  execute(items) {
    let new_items = [...items]

    let pointer = 0
    while (pointer < new_items.length) {
      let left = 0
      let right = 1
      while (right < new_items.length - pointer) {
        this.addStep({ "select": [left, right] })
        if (new_items[right].size < new_items[left].size) {
          let tmp = new_items[left]
          new_items[left] = new_items[right]
          new_items[right] = tmp
          this.addStep({
            "swap": { left, right }
          })
        }
        left++
        right++
      }
      pointer++
    }    
  }
}

// this.addStep({
//   "swap": {
//     pointer, minimum_index
//   }
// })

export default BubbleSort