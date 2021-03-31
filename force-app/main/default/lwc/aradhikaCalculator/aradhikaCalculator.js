import { LightningElement, api } from 'lwc';

export default class AradhikaCalculator extends LightningElement {
          @api firstNumber;
          @api secondNumber;
          result;

          connectedCallback(){
                    this.result= parseInt(this.firstNumber) + parseInt(this.secondNumber);
        
          }
          handleChange(event){
                    if(event.target.name=='fstNumber'){
                              this.firstNumber = event.target.value; 
                    }

                    if(event.target.name=='secNumber'){
                              this.secondNumber = event.target.value; 
                    }
          }

          handleAddition(){
                    this.result= parseInt(this.firstNumber) + parseInt(this.secondNumber);
          }
          



          
}