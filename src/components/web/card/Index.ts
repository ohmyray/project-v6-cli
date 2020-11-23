import Main from './main.vue';
const CardConstructor = Vue.extend(Main);
export class Card {
  private map: any;
  constructor(map: any) {
    this.map = map;
  }

  public init() {
    const tree = document.createElement('div');
    tree.style.position = 'absolute';
    tree.style.zIndex = '1999';
    tree.style.top = '0';
    tree.style.left = '0';
    const box = document.createElement('div');
    box.id = "tree-box";
    box.style.height = '100px';
    box.style.width = '100px';
    tree.appendChild(box);

    const instance = new CardConstructor()

    instance.$mount("#tree-box")
  }
}