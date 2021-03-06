class Lightsaber {
    constructor(time, id) {
        this.time = time;
        this.render(id);
    }

    handleRender(container) {
        container.classList.add('saber');
        const pictureSrc = '../static/assets/ui/LightsaberHandle.png';
        const picture = document.createElement('img');
        picture.classList.add('saber__handle');
        picture.setAttribute('src', pictureSrc);
        container.appendChild(picture);
    }

    saberRender(container) {
        const saberContainer = document.createElement('div');
        saberContainer.classList.add('saber__container');
        container.appendChild(saberContainer);
        this.saberLight = document.createElement('div');
        this.saberLight.classList.add('saber__light');
        saberContainer.appendChild(this.saberLight);
    }

    render(id) {
        const container = document.querySelector(`#${id}`);
        this.handleRender(container);
        this.saberRender(container);
    }

    progress(time) {
        if (this.time > 0) {
            this.time--;
            this.saberLight.style.width = ((this.time / time) * 100) + '%';
            this.time === 15 ? this.saberLight.classList.add('saber__light--pulse') : null;
            this.time === 10 ? this.saberLight.style.animation = 'pulse .5s linear infinite' : null;
            this.time === 5 ? this.saberLight.style.animation = 'pulse .25s linear infinite' : null;
        }
    }
}

export default Lightsaber;