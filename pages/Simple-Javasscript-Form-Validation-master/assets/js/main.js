let condition = {
    name:false,
    phone:false,
    mail:false,
    gender:false,
    agreement:false
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function endUserAgreement() {
    Swal.fire({
        title: '<strong>End User Agreement</strong>',
        icon: 'info',
        html:
            `Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Gravida neque convallis a cras semper 
            auctor neque vitae tempus. Sed odio morbi 
            quis commodo odio aenean. Vitae purus faucibus 
            ornare suspendisse sed nisi lacus sed. 
            Enim blandit volutpat maecenas volutpat 
            blandit aliquam etiam erat. 
            Arcu cursus vitae congue mauris. 
            Facilisi cras fermentum odio eu. 
            Semper auctor neque vitae tempus quam. 
            Egestas fringilla phasellus faucibus scelerisque eleifend. 
            Eu augue ut lectus arcu bibendum. 
            Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. 
            Hac habitasse platea dictumst quisque sagittis. 
            Pellentesque habitant morbi tristique senectus. 
            Purus semper eget duis at tellus at urna condimentum mattis. 
            Nisl tincidunt eget nullam non nisi est. Ut tortor pretium 
            viverra suspendisse potenti nullam ac tortor vitae. 
            Imperdiet dui accumsan sit amet nulla facilisi morbi.
            <br>
            <br>
            <a href="#">Read more</a>`,
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
    })
}
function nameHandler(e){
    if (e.target.value.length !== 0 ){
        condition.name = true
    } else {
        condition.name = false
    }
}
function emailHandler(e) {
    const val = e.target.value
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (emailRegex.test(val.trim())) {
        e.target.classList.add("mailValid")
        e.target.classList.remove("mailInValid")
        condition.mail = true
    } else {
        e.target.classList.remove("mailValid")
        e.target.classList.add("mailInValid")
        condition.mail = false
    }
    if (!val) {
        condition.mail = false
        e.target.classList.remove("mailInValid")
    }
}
function phoneHandler(e) {
    const val = e.target.value
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (phoneRegex.test(val.trim())) {
        e.target.classList.add("phoneValid")
        e.target.classList.remove("phoneInValid")
        condition.phone = true
    } else {
        e.target.classList.remove("phoneValid")
        e.target.classList.add("phoneInValid")
        condition.phone = false
    }
    if (!val) {
        condition.phone = false
        e.target.classList.remove("phoneInValid")
    }
}
function genderHandler(e) {
   condition.gender = true
}
function agreementHandler(e){
        condition.agreement = !condition.agreement
}
const onSubmit =(e)=> {
    if (condition.name && condition.agreement && condition.mail && condition.phone && condition.gender) {
        e.target.classList.add("disabled")
        delay(3000).then(() => {
            e.target.classList.remove("disabled")
            Swal.fire(
                'Good job!',
                'Data have been submited',
                'success'
            )
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please check your input',
        })
    }
}