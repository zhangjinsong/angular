function inputEVent(target,eventname){
	return new Observable((observe)=>{
		const handle = (e)=>{oberve.next(e);
		  target.addEventListener(eventname,handle);
		  return () => {
		  	target.removeEventListener(eventname,handle);dd
		  }
		}
	})
}

const ESC_KEY = 27;
const nameInput = document.getElmentById("name") as HTMLInputElement;
const subscription = inputEvent(nameInput,'keydown')
      .subscribe((e:KeyboardEvent) =>{
      	if(e.keyCode == ESC_KEY){
      		nameInput.value = '';
      	}
      })