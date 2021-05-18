import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data =  [
    {
      id:1,
      name:"Luis",
      lastName:" Agrt",
      handle:"MKJ"
    },
    {
      id:2,
      name:"Tuull",
      lastName:"Dyui",
      handle:"HUI"
    },
    {
      id:3,
      name:"Tom",
      lastName:"Holli",
      handle:"OIU"
    },
    {
      id:4,
      name:"Aert",
      lastName:"Dfg",
      handle:"OIU"
    }
  ]

  item:any;

  obj = {
    id:0,
    name:"",
    lastname:"",
    handle :"",
  }

  title:string;

  showForm = false;

  showDetail = false;

  buttonTitle = "Crear";

  constructor(){
    this.title = 'Curso de Angular';
  }

  clickHandler(e){

    this.showForm = !this.showForm;

    if (this.showForm) {
      this.buttonTitle = 'Cancelar'
    }
    else{
      this.buttonTitle = 'Crear'
    }
  }

  handlerSubmit(e){
    e.preventDefault();
    //console.log(this.obj)
    if(this.obj.id){
      console.log(this.obj)

    }
    else{
      let newObj = {
        id : this.data.length +1,
        name: this.obj.name,
        lastName: this.obj.lastname,
        handle: this.obj.handle
      }
      this.data.push(newObj);
    }

  }

  delete(id:number){
    console.log(id)
    this.data = this.data.filter(element => {
      return element.id != id;
    })
  }

  detail(item:any){
    this.item = item;
    this.showDetail = true
  }

  loadForm(item:any){

    this.obj.id = item.id;
    this.obj.name = item.name;
    this.obj.lastname = item.lastName;
    this.obj.handle = item.handle;
  }

}
