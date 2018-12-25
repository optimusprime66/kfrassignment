class Header extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return (
          <h1 class = "head">{this.props.title}</h1>
      );
  }
};

class Block extends React.Component{
  constructor(props){
      super(props);
      this.handleLikeAction = this.handleLikeAction.bind(this);
      this.handleDisikeAction = this.handleDisikeAction.bind(this);
      this.handleAverageAction = this.handleAverageAction.bind(this);
  }    

  handleLikeAction(){
      this.props.item.vote = this.props.item.vote + 1;
      render();
  }

  handleDisikeAction(){
      this.props.item.vote = this.props.item.vote - 1;
      render();
  }
  handleAverageAction(){
    this.props.item.vote = this.props.item.vote +0;
    render();
}

  render(){
      return(
          <div class = "childTree">
              {this.props.item.name}<br/>
              ({this.props.item.type})<br/>
              At {this.props.item.restaurant}
              ,{this.props.item.location}<br/>
              {this.props.item.price} BDT TAKA<br/>
              {this.props.item.vote}Votes
              <button onClick = {this.handleLikeAction} >Vote+1</button>
              <button onClick = {this.handleDisikeAction}>Vote-1</button>
              <button onClick = {this.handleAverageAction}>Vote+0</button>
          </div>
      );
  }
};

class ItemList extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return (
          <div class = "parentTree">
              {this.props.items.map(item => <Block key ={item} item = {item}/>)}
          </div>
      );
  }
};

class FormElement extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return (
          <div  class="input-field inline">
          
          
          
     
      
              <form  class="validate" onSubmit = {this.props.clearForm}>
                  Item Name :
                  <input type = "text/string" id="email_inline"  class="validate" name ="name" placeHolder = "Write Item Name"></input><br></br>
                  Item Type :
                  <input type = "text/string" class="col-xs-2" id="ex2" name = "type" placeHolder = "Write this Item Type"></input><br></br>
                  Restaurant Name :
                  <input type = "text/string" class="col-xs-2" id="ex2" name = "restaurant" placeHolder = "Write Restaurant Name"></input><br/>
                  Location :
                  <input type = "text/string" class="col-xs-2" id="ex2" name = "location" placeHolder = "Write Restaurant Location"></input><br/>
                  Price :
                  <input type = "text/string" class="col-xs-2" id="ex2" name = "price" placeHolder = "Write Item Price"></input><br/>
                  Review :
                  <input type = "text/string" class="col-xs-2" id="ex2" name = "review" placeHolder = "Write Item Personal Review"></input><br/>
              
                  <button class="btn waves-effect waves-light">Add This item</button>
              </form>
          </div>

      );
  }
};


class App extends React.Component{
  constructor(props){
      super(props);
      this.clearForm = this.clearForm.bind(this);
  }

  clearForm(){
      event.preventDefault();
      const name = event.target.elements.name.value;
      const type = event.target.elements.type.value;
      const restaurant = event.target.elements.restaurant.value;
      const location = event.target.elements.location.value;
      const price = event.target.elements.price.value;
      const review = event.target.elements.review.value;
      if(name && type  && restaurant && location && price){
          items.push({name : name, type : type, restaurant : restaurant, location : location, price : price, review : review, vote : 0});
      }
      
      event.target.elements.name.value = "";
      event.target.elements.type.value = "";
      event.target.elements.restaurant.value = "";
      event.target.elements.location.value = "";
      event.target.elements.price.value = "";
      event.target.elements.review.value = "";

      render();    

  }

  render(){
      return (
          <div id= "Title" >
              <Header title = "MY Foods Reviews"/>
              <FormElement clearForm = {this.clearForm} />
              <Header title = "List Of All The Good Items Foods Of Mine "/>
              <ItemList items = {items}/>
          </div>            
      )
  }
}


const render = () => {
  ReactDOM.render(<App/>, document.querySelector("#root"));
}

const items = [];
render();