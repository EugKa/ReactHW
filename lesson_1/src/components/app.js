import {AdvertList} from './advertList.js'
import '../styles/bace.scss'
export class App {
    constructor(root) {
        this.root = root;
        this.init()
    }

    init() {
        this.render();
        this.fetchData();
    }

    fetchData() {
        fetch('http://localhost:4000/advertisments')
            .then(response => response.json())
            .then(advertisments => {
                this.advertisments = advertisments;
                this.renderAdvert()
                console.log(advertisments);
            });
    }
    
    render() {
        this.content = document.createElement('div')
        this.content.classList.add('page')
        this.root.append(this.content)
    }

    renderAdvert() {
        this.list = new AdvertList(this.content, this.advertisments);
        this.list.render();
    }
}