const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }

    if (top > window.innerHeight) {
        return false
    }

    return true
}

for (let item of reveal) {
    document.addEventListener("scroll", () => {
        if (isVisible(item)){
            item.className = 'reveal_active'
        } else
            item.className = 'reveal'
    })
}
