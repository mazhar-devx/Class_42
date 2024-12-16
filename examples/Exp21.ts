const form : HTMLElement | null = document.getElementById('myForm');
if(form){
    form.addEventListener('submit' , handleSubmit);
}
interface FormSubmissionData {
fname : string;
Iname : string;
email: string;
}
function handleSubmit(event: Event){
    event.preventDefault();
    const form = document.getElementById('myForm') as HTMLFormElement;
    const formData: FormSubmissionData = {
        fname: (form.elements.namedItem('fname') as HTMLInputElement).value,            
        Iname: (form.elements.namedItem('lname') as HTMLInputElement).value ,           
        email: (form.elements.namedItem('email') as HTMLInputElement).value  ,          
        }
        console.log('Form Data:', formData) ;
}

// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// npm install -g typescript