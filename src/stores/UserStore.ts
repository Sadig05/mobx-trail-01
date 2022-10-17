import { makeAutoObservable } from "mobx";

class UserStore{
     word: string = "cNap";

    constructor(){
        makeAutoObservable(this);
    }


     handleWord = () => {
     
        if(this.word === "cNap") {
            this.word = " Nippon"
            console.log(this.word);
            
        }   else {
            this.word = "cNap";
            console.log(this.word);
            
        }

        
    }
    
}

export default UserStore;














