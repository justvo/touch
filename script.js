const image = document.getElementsByClassName('main-box')[0];

image.addEventListener('click', (e) => {

    const x = e.clientX - image.getBoundingClientRect().left;
    const y = e.clientY - image.getBoundingClientRect().top;


    if ((document.querySelectorAll('.text-container')).length < 5) {

        const message = document.createElement('div');
        message.className = 'text-container';
        
        console.log(message.clientWidth);
        console.log(image.clientWidth);
        console.log(x);
        if(x + message.clientWidth > image.clientWidth){

            message.style.left = (image.clientWidth - message.clientWidth) + 'px';
        } else{
            message.style.left = x + 'px';
        }
        message.style.top = y + 'px';
        message.textContent = 'Ваш текстовий повідомлення';

        const svgCross = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCross.setAttribute("width", "20");
        svgCross.setAttribute("height", "20");
        svgCross.setAttribute("viewBox", "0 0 20 20");


        const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line1.setAttribute("x1", "5");
        line1.setAttribute("y1", "5");
        line1.setAttribute("x2", "15");
        line1.setAttribute("y2", "15");
        line1.setAttribute("stroke", "#000");
        line1.setAttribute("stroke-width", "2");

        const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line2.setAttribute("x1", "15");
        line2.setAttribute("y1", "5");
        line2.setAttribute("x2", "5");
        line2.setAttribute("y2", "15");
        line2.setAttribute("stroke", "#000");
        line2.setAttribute("stroke-width", "2");


        svgCross.appendChild(line1);
        svgCross.appendChild(line2);

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.appendChild(svgCross);

        message.appendChild(closeButton);
        
        image.appendChild(message);
        closeButton.addEventListener('click', () => {

            message.remove();

        })
    }
});