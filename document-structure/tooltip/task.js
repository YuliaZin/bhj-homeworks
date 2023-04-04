let arrOfTooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltip = document.createElement("div");
tooltip.setAttribute("data-position", "bottom");

arrOfTooltips.forEach((item) => {
    tooltip.className = "tooltip";
    

    item.onclick = () => {
        
        tooltip.className = "tooltip tooltip_active";
        tooltip.textContent = item.title;
        tooltip.style.top = item.getBoundingClientRect().top + item.getBoundingClientRect().height + "px";
        tooltip.style.left = item.getBoundingClientRect().left + "px";

        item.parentElement.insertBefore(tooltip, item);

        return false
    }

    tooltip.onclick = () => {
        tooltip.className = "tooltip";
    }
})