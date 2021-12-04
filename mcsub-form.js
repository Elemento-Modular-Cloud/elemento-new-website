var email = document.getElementById('email')
var label = document.getElementById('email-label')

function validateEmail(mail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

new Mcsub('#mailchimpform', {
    user:  '4f312c8c16810c3c59ec2d0d6',
    list:  '4a0560ee16',
    callback:  'cb',
    reponse:  '#response',
    onInit(){
        console.log(this.element) // Example
        email.addEventListener('click', function() {
            button.classList.add('is-active');
            label.classList.add('min-label')
        }, {passive: true});
        this.button.addEventListener('click', function(e){
            console.log(email.value)
            if(validateEmail(email.value)){
                this.classList.add('is-done','is-active');
                
                setTimeout(function(){ 
                button.innerHTML = String(email.value).toLowerCase()+" registered!"
                }, 500);
            } else {
                this.classList.remove('is-done');
                this.classList.add('is-invalid');

                button.innerHTML = "Invalid email!"

                sleep(3000).then(() => {
                    button.innerHTML = "Submit";
                    this.classList.remove('is-invalid');
                });
            }
          }, {passive: true});
    },
    onSubmit(){
        console.log(this.button); // Example
    },
    onSuccess(){
        console.log('Subscribe Sucess'); // Example
    },
    onError(){
        console.log('Subscribe Error'); // Example
    },
    complete(){
        console.log(this.inputs); // Example
    }
});
