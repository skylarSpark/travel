function toggleTheme() {
    let btn = document.getElementById("theme-toggle");
    if (document.body.className === "dark") {
        document.body.className = "";
        btn.textContent = "Dark Mode";
    } else {
        document.body.className = "dark";
        btn.textContent = "Light Mode";
    }
}
