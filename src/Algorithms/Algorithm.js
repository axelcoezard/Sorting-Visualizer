export default class Algorithm {

  constructor (name) {
    this.name = name
    this.steps = []
    this.next_step = 0
  }

  addStep (step) {
    this.steps.push(step)
  }

  getStep (index) {
    return this.steps[index]
  }

  removeStep (index) {
    delete this.steps[index]
  }

}
