const rangeInputs = document.querySelectorAll('input[type="range"]');
if (rangeInputs.length) {
    rangeInputs.forEach(inp => {
        const fnc = () => {
            const percentage = 100*(inp.value-inp.min)/(inp.max-inp.min);
            const bg = `linear-gradient(90deg, #DC2626 ${percentage}%, #E7E5E4 ${percentage+0.1}%)`;
            inp.style.background = bg;
        }

        fnc();

        inp.addEventListener('input', fnc)
    })
}