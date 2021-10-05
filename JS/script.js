jQuery(document).ready(function()
{

    $('.ripple').ripples({
        dropRadius: 10,
        perturbance: 0.01,
        resolution: 512,
    });

    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    })

    
});