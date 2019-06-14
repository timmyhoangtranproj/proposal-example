document.addEventListener('DOMContentLoaded', () => {
    let cardList = document.querySelector('#card-list')
    let data
    let game
    let shell

    axios.get('https://raw.githubusercontent.com/timmyhoangtranproj/proposal-example/master/g2ggames.json').then( function(result) {
        data = result.data
        for ( let i=0; i<data.length; i++) {
            game = data[i]
            shell = document.createElement('div')
            shell.classList.add('card')
            shell.innerHTML =  `
            <div class="image">
                <img src="${game.thumbnail}">
            </div>
            <div class="content">
                <div class="header" style="text-align: center">
                    ${game.name}
                </div>
                <div class="meta">
                    &nbsp;&nbsp;&nbsp;&nbsp;${game.description}
                </div>
            </div>
            <div class="extra content" style="text-align: center">
                <a href="${game.url}" target="_blank">
                    <button class="ui blue button">Get this free game</button>
                </a>
            </div>
            `
            cardList.appendChild(shell)
        }
    })
})
$('.top.menu .item').tab()
hljs.initHighlightingOnLoad()

function takeValue(x) {
	document.getElementById('inputwindow').value += x
}

function clearInput(y) {
	document.getElementById('inputwindow').value = y
}

function calculateResult() {
	let result = eval(document.getElementById('inputwindow').value)
	document.getElementById('inputwindow').value = result
}