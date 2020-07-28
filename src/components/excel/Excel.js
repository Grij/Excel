export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
// ПРоитерировали компоненты с большой буквы и получили екземпляры компонентов КРУТЬ!
    this.components.forEach(Component => {
      const component = new Component()
      // afterbegin, afterend, beforender, beforebegin
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
