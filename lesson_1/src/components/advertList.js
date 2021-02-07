import { AdevertEl } from "./advertItem.js";
import "../styles/advertisment.scss";
export class AdvertList {
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.activeIndex = 0;
    console.log("lengght", this.data.length);
  }

  increaseIndex() {
    this.items[this.activeIndex].deactivate();
    this.activeIndex =
      this.activeIndex < this.data.length - 1 ? this.activeIndex + 1 : 0;
    this.items[this.activeIndex].activate();
    console.log("inc+1", this.activeIndex);
  }
  decreaseIndex() {
    this.items[this.activeIndex].deactivate();
    this.activeIndex =
      this.activeIndex >= 1 ? this.activeIndex - 1 : this.data.length - 1;
    this.items[this.activeIndex].activate();
    console.log("dec-1", this.activeIndex);
  }

  toFirst() {
    this.items[this.activeIndex].deactivate();
    this.activeIndex = 0;
    this.items[this.activeIndex].activate();
    console.log("tofirst", this.activeIndex);
  }
  toLast() {
    this.items[this.activeIndex].deactivate();
    this.activeIndex = this.data.length - 1;
    this.items[this.activeIndex].activate();
    console.log("tolast", this.activeIndex);
  }
  render() {
    console.log("activeIndex", this.activeIndex);
    this.advertList = document.createElement("ul");
    this.advertList.classList.add("advertisments");

    this.items = this.data.map((advertisment, i) => {
      return this.renderEl({ ...advertisment }, i);
    });

    this.controls = document.createElement("div");
    this.controls.classList.add("advertisments__controls");
    this.advertList.append(this.controls);

    this.decrBtn = document.createElement("button");
    this.decrBtn.classList.add("advertisments__btn");
    this.decrBtn.textContent = "<";
    this.decrBtn.addEventListener("click", () => {
      this.decreaseIndex();
    });
    this.controls.append(this.decrBtn);

    this.toFirstBtn = document.createElement("button");
    this.toFirstBtn.classList.add("advertisments__btn");
    this.toFirstBtn.textContent = "<<<<";
    this.toFirstBtn.addEventListener("click", () => {
      this.toFirst();
    });
    this.controls.append(this.toFirstBtn);

    this.toLastBtn = document.createElement("button");
    this.toLastBtn.classList.add("advertisments__btn");
    this.toLastBtn.textContent = ">>>>";
    this.toLastBtn.addEventListener("click", () => {
      this.toLast();
    });
    this.controls.append(this.toLastBtn);

    this.incrBtn = document.createElement("button");
    this.incrBtn.classList.add("advertisments__btn");
    this.incrBtn.textContent = ">";
    this.incrBtn.addEventListener("click", () => {
      this.increaseIndex();
    });
    this.controls.append(this.incrBtn);

    this.root.append(this.advertList);
  }

  renderEl(advertisment, i) {
    const isActive = this.activeIndex === i;
    return new AdevertEl(this.advertList, advertisment, isActive);
  }
}
