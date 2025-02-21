document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function() {
        let img = this.querySelector("img");
        let answer = this.nextElementSibling;
        if (answer.classList.contains("active")) {
            answer.classList.remove("active");
            answer.style.maxHeight = answer.scrollHeight + "px"; 
            setTimeout(() => {
                answer.style.maxHeight = "0";
            }, 10); 
            img.src = "icon-plus.svg";
        } else {
            document.querySelectorAll(".answer.active").forEach(ans => {
                ans.classList.remove("active");
                ans.style.maxHeight = ans.scrollHeight + "px"; 
                setTimeout(() => {
                    ans.style.maxHeight = "0";
                }, 10); 
            });
            document.querySelectorAll(".question img").forEach(icon => icon.src = "icon-plus.svg");
            answer.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            img.src = "icon-minus.svg";
        }
    });
});