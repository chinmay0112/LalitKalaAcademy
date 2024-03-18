function toggleDarkMode() {

    document.body.classList.toggle('dark');}

    function changeFontSize(size) {
        const body = document.body;
        let currentSize = parseInt(window.getComputedStyle(body).fontSize);
    
        switch (size) {
            case 'normal':
                currentSize = 16;
                break;
            case 'larger':
                currentSize += 1;
                break;
            case 'largest':
                currentSize += 2;
                break;
        }
        body.style.fontSize = currentSize + 'px';
    }