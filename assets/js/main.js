function webLoad() {
    history.pushState('', '', window.location.pathname);
    $(this).scrollTop(0);
}

$(document).ready(function () {
    jQuery(".preloader").fadeOut("slow");
});

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    }
}

$(document).on('click', 'a[href^="#"]', function (event) {
    window.setTimeout(function () {
        offsetAnchor();
    }, 0);
});


function navMenu() {
    Swal.fire({
        html:
            `
<div class="mobile-menu">
        <div class="header-inner d-flex align-items-start flex-column">
            <a href="/"><img
                    src="data:image/jpeg;base64,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"
                    height="70" width="70" alt="Angga Adji Surya"
                    style="border-radius: 50%;"/></a>
            <a href="index.html" class="site-title dot mt-3">Angga Adji Surya</a>
            <span class="site-slogan">Fullstack Web Developer</span>
            <nav class="navbar" id="mynavbar">
                <ul class="vertical-menu nav nav-pills">
                    <li class="nav-item"><a href="#home" class="nav-link"><i class="fa fa-home" aria-hidden="true"></i>Home</a>
                    </li>
                    <li class="nav-item"><a href="#about" class="nav-link"><i class="fa fa-user"
                                                                              aria-hidden="true"></i></i>About</a></li>
                    <li class="nav-item"><a href="#skill" class="nav-link"><i class="fa fa-bolt"
                                                                              aria-hidden="true"></i></i></i>Skill</a>
                    </li>
                    <li class="nav-item"><a href="#experience" class="nav-link"><i class="fa fa-briefcase"
                                                                                   aria-hidden="true"></i>Experience</a>
                    </li>
                    <li class="nav-item"><a href="#education" class="nav-link"><i class="fa fa-graduation-cap"
                                                                                  aria-hidden="true"></i>Education</a>
                    </li>
                    <li class="nav-item"><a href="#portfolio" class="nav-link"><i class="fa fa-certificate"
                                                                                  aria-hidden="true"></i></i>
                        Portfolio</a></li>
                    <li class="nav-item"><a href="#contact" class="nav-link"><i class="fa fa-phone"
                                                                                aria-hidden="true"></i>Contact</a></li>
                </ul>
            </nav>
            <div class="footer mt-auto">
                <ul class="social-icons list-inline">
                    <li class="list-inline-item">
                        <a href="https://facebook.com/inact25" target="_blank">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/vlavalv/" target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/inact25" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://idcsharp.com" target="_blank">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                <span class="copyright">©2020 Angga Adji Surya</span>
            </div>
        </div>
        </div>
    `,
        position: 'bottom-end',
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        focusConfirm: false,
    })

}

