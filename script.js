function initializeDOM(parentElementID) {
    window[parentElementID] = document.querySelector('#'+parentElementID)
    Array.from(window[parentElementID].children).forEach(element => {
        if (element.id) {initializeDOM(element.id)}        
    });
}
initializeDOM('body')

