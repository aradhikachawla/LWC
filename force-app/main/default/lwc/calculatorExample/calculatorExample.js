import { LightningElement } from 'lwc';

export default class CalculatorExample extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    handleAddition(){
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }


    handleChange(event){
        if(event.target.name=='fstNumber'){
            this.firstNumber = event.target.value;
        }
        else if(event.target.name=='secNumber'){
            this.secondNumber = event.target.value;
        }
    }



/* Note:  We could simply us below code as well but from above we 
understand how the target.name can be used

    handleChangeFirst(event){
            this.firstNumber = event.target.value;
    }

    handleChangeSecond(event){
            this.secondNumber = event.target.value;   
    }

*/

}