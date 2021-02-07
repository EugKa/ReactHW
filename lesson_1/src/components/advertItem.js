import "../styles/advertisment.scss";
export class AdevertEl {
  constructor(root, data, isActive) {
    this.root = root;
    this.data = data;
    this.isActive = isActive;
    this.isExpand = false;
    this.init();
  }

  init() {
    this.render();
    this.renderText();
  }

  deactivate() {
    this.advertEl.classList.remove("active");
  }

  activate() {
    this.advertEl.classList.add("active");
  }

  toggleText() {
    this.isExpand = !this.isExpand;
    this.renderText();

    console.log(this.isExpand);
  }

  renderText() {
    if (this.isExpand) {
      this.text.textContent = this.data.description.slice(0, 56);
    } else {
      this.text.textContent = this.data.description;
    }
  }

  render() {
    const { title, img } = this.data;
    this.advertEl = document.createElement("li");
    this.advertEl.classList.add("advertisments__item");

    if (this.isActive) {
      this.activate();
    }
    //
    this.advertEl.innerHTML = `
            <img src="${img}" class="advertisments__image" />
            <h1 class="advertisments__title">${title}</h1>
        `;

    this.root.append(this.advertEl);

    this.text = document.createElement("div");
    this.advertEl.append(this.text);

    this.toggleBtn = document.createElement("button");
    this.toggleBtn.classList.add("toggle-btn");
    this.toggleBtn.textContent = "toggle";
    this.toggleBtn.addEventListener("click", () => {
      this.toggleText();
    });
    this.advertEl.append(this.toggleBtn);
  }
}
