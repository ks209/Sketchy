const colorPicker = document.getElementById("colorPicker");
        const pixels = document.querySelectorAll(".pixel");
        var selectedColor = "black";
        var isMouseDown = false;

        colorPicker.addEventListener("input", updateColor);

        pixels.forEach((pixel) => {
            pixel.addEventListener('mousedown', () => {
                isMouseDown = true;
                pixel.style.backgroundColor = selectedColor;
            });

            pixel.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    pixel.style.backgroundColor = selectedColor;
                }
            });

            pixel.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
        });

        function updateColor(event) {
            selectedColor = event.target.value;
        }

        // Initialize the color display
        updateColor({ target: colorPicker });

        var clear=document.getElementById("clear")

        clear.addEventListener("click",function(){location.reload()})