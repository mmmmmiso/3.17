class Book{
  // constructor:function(){}의 약자
  constructor(type,title){
    this.type = type;
    this.title = title;
  }
  // list:function(){}의 약자
  list(){
    document.write(
      `
      <p>
      ${this.type} : ${this.title}
      </p>
      `
    )
  }
}

const photo = new Book('graphic','photoshop');
const vetor = new Book('graphic','illustrator');
const code = new Book('it','html')
photo.list();
vetor.list();
code.list();