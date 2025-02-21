let display = true ;
document.querySelectorAll("question").forEach(question => { 
    question.addEventListener("click", function() {
        let img = this.querySelector("answer");
        if (img) {
            if(display){
                img.src = 'icon-minus.svg';
                display = false ;
            }else{
                img.src = 'icon-plus.svg';
                display = true ;
            }
        }
    });
});