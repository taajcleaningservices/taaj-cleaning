function scrollToQuote(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    this.style.display="none";
    document.getElementById("thanks").style.display="block";

    setTimeout(()=>{
        location.reload();
    },3000);
});
