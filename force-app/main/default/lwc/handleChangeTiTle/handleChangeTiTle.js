import { LightningElement } from 'lwc';

export default class HandleChangeTiTle extends LightningElement {
          title;

          handleChange(event){
                    this.title=event.target.value;
                    
          }
          
}