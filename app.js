let curSpeed = 1;

setTimeout(() => {
    console.log('WASD Playback Speed by Airo/Time2Sleep')
    const speedMenuX2 = document.querySelector('.menu-settings.speed .menu-item:nth-child(3)')
    const speeds = [2.25, 2.5, 2.75, 3].sort().reverse()
    let new_speeds = '';
    speeds.forEach(speed => {
        new_speeds += `
        <div class="menu-item">
            <button data-speed="${speed}" type="button">
                <div class="item-key">${speed}</div>
                <div class="item-icon icon-select"></div>
            </button>
        </div>`
    })

    speedMenuX2.insertAdjacentHTML('beforebegin', new_speeds);

    document.addEventListener('click', (event) => {
        if(event.target.closest('.menu-settings.speed')){
            document.querySelectorAll('.menu-settings.speed .menu-item button').forEach(btn => {
                btn.classList.remove('item-selected')
            })
            event.target.closest('.menu-settings.speed .menu-item button').classList.add('item-selected')
            curSpeed = event.target.closest('.menu-item').querySelector('button').dataset.speed
            updateSpeedText()
        }

        if(event.target.closest('.airo-speed-js')){
            const speedContainer = document.querySelector('.menu.menu-settings.menu-right.menu-up .menu-settings.speed')
            const mainContainer = document.querySelector('.menu.menu-settings.menu-right.menu-up .menu-settings.main')
            const qualityContainer = document.querySelector('.menu.menu-settings.menu-right.menu-up .menu-settings.quality')
            const menuContainer = document.querySelector('.menu.menu-settings.menu-right.menu-up')
            if(speedContainer.style.display  == 'none') {
                speedContainer.style.display = 'block'
                qualityContainer.style.display = 'none'
                menuContainer.style.display = 'block'
                mainContainer.style.display = 'none'
            } else {
                speedContainer.style.display  = 'none'
            }

        }
    })

    document.querySelector('.custom-media-control .player-controls .buttons-container .buttons-right').style.alignItems = 'center'
    document.querySelector('.player-controls .buttons-right').insertAdjacentHTML('afterbegin', `<div style="font-size: 12px; cursor: pointer" class="airo-speed-js">${curSpeed}x</div>`);
}, 3000)


function updateSpeedText(){
    document.querySelector('.airo-speed-js').innerHTML = `${curSpeed}x`
}