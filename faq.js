document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function() {
        let img = this.querySelector("img");
        let answer = this.nextElementSibling; 

        if (answer.style.display === "block") {
            answer.style.display = "none";
            img.src = "icon-plus.svg"; 
        } else {
            
            document.querySelectorAll(".answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".question img").forEach(icon => icon.src = "icon-plus.svg");

            answer.style.display = "block";
            img.src = "icon-minus.svg"; 
        }
    });
});