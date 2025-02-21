document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function() {
        let img = this.querySelector("img");
        let answer = this.nextElementSibling;

        if (answer.classList.contains("active")) {
            // Start closing animation
            answer.classList.remove("active");
            answer.style.maxHeight = answer.scrollHeight + "px"; // Set to current height
            setTimeout(() => {
                answer.style.maxHeight = "0";
            }, 10); // Small delay to trigger the transition

            img.src = "icon-plus.svg";
        } else {
            // Close any open answers first
            document.querySelectorAll(".answer.active").forEach(ans => {
                ans.classList.remove("active");
                ans.style.maxHeight = ans.scrollHeight + "px"; // Set to current height
                setTimeout(() => {
                    ans.style.maxHeight = "0";
                }, 10); // Small delay to trigger the transition
            });

            document.querySelectorAll(".question img").forEach(icon => icon.src = "icon-plus.svg");

            // Open selected answer smoothly
            answer.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            img.src = "icon-minus.svg";
        }
    });
});