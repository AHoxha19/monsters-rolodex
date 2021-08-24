import './App.css';
import {CardList} from "./components/card-list/card-list";
import {Component} from "react";
import {SearchBox} from "./components/search-box/search-box";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => this.setState({monsters: json}))
            .catch(e => console.log(`Error getting users: ${e}`));
    }

    render() {
        const {monsters, searchField} = this.state;
        console.log(this.state.monsters);

        const filteredMonsters = monsters.filter(m => {
         return m.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Select monster" handleChange={(e)=>{
                    this.setState({searchField: e.target.value});
                }}/>

                <CardList monsters={filteredMonsters}  />



            </div>
        );
    }



}

export default App;
