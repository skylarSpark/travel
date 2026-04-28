function switchTheme() {
    let btn = document.getElementById("theme-switch");

    /* 
     * credit to Daweb Schools with video https://youtu.be/GzM42IXDPA4?si=R1hwdtsisBQFlXCN
    */
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        btn.textContent = "Dark Mode";
    } else {
        document.body.classList.add("dark");
        btn.textContent = "Light Mode";
    }
}
