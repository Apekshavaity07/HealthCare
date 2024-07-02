var Preloader = document.getElementById('loading');

function myfunction(){
    Preloader.style.display = 'none';
}

var Active = document.getElementById("Active");
        var activeBtn = Active.getElementsByClassName("active-btn");
        for (var i = 0; i < activeBtn.length; i++) {
            activeBtn[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += "active";
            });
        }