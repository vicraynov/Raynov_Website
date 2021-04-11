/*------------------------------------TOP BUTTON --------------------- */
var mybutton = document.getElementById("topBtn");
window.onscroll = function() {
    scrollFunction()
};
// 20px
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// Click
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//------------------------------------- Form send to email ----------------------------------- */
window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("bookForm");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// ---------------------------------- Hamburger

function openNav() {
    document.getElementById("hSidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("hSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}