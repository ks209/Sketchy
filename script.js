const colorPicker = document.getElementById("colorPicker");
        const pixels = document.querySelectorAll(".pixel");
        var selectedColor = "black";
        var isMouseDown = false;
        var isTouchDown = false;

        colorPicker.addEventListener("input", updateColor);

        pixels.forEach((pixel) => {
            pixel.addEventListener('mousedown', () => {
                event.preventDefault();
                isMouseDown = true;
                pixel.style.backgroundColor = selectedColor;
                console.log("mousedown");
            });

            pixel.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    pixel.style.backgroundColor = selectedColor;
                }
                console.log("mousemove");
            });

            pixel.addEventListener('mouseup', () => {
                isMouseDown = false;
                console.log("mouseup");
            });

            pixel.addEventListener('touchstart', (event) => {
                event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
                isTouchDown = true;
                pixel.style.backgroundColor = selectedColor;
            });
        
            pixel.addEventListener('touchmove', (event) => {
                event.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
                if (isTouchDown) {
                    pixel.style.backgroundColor = selectedColor;
                }
            });
        
            pixel.addEventListener('touchend', () => {
                isTouchDown = false;
            });

        });

        function updateColor(event) {
            selectedColor = event.target.value;
        }

        // Initialize the color display
        updateColor({ target: colorPicker });

        var clear=document.getElementById("clear")

        clear.addEventListener("click",function(){location.reload()})

        console.log("connected")