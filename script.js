function scrollToQuote(){
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

/* FORM */
document.getElementById("quoteForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("quoteForm").style.display = "none";
    document.getElementById("thankYou").classList.remove("hidden");

    setTimeout(()=>{
        location.reload();
    },3000);
});

/* TEXT ANIMATION */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});
