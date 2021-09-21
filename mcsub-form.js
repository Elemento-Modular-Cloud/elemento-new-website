var email = document.getElementById('email')
var label = document.getElementById('email-label')

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
        });
        this.button.addEventListener('click', function(e){
            this.classList.add('is-done','is-active');
            
            setTimeout(function(){ 
              button.innerHTML = "Email registered!"
            }, 500);
          });
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
