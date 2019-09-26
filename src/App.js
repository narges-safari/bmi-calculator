import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            bmi: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.reset = this.reset.bind(this);

    }

    handleSubmit(event){
       event.preventDefault();
       this.calculateBMI();
    }
    handleChangeHeight(event){
        event.preventDefault();
        this.setState({
            height: event.target.value
        })
    }
    handleChangeWeight(event){
        event.preventDefault();
        this.setState({
            weight: event.target.value
        })
    }
    calculateBMI() {
        const height = (this.state.height) / 100;
        const weight = (this.state.weight);
        this.setState({
            bmi: Math.round((weight / (height*height))*100)/100
        })

    }
    reset(event){
        event.preventDefault();
        this.setState({
            height:'',
            weight:'',
            bmi: ''
    });

    }


    render() {
        return (
            <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3 className="title">BMI Healthy Weight Calculator</h3>
                        <input className="form-control" type="number" name="height" value={this.state.height} onChange={this.handleChangeHeight} placeholder="Height(cm)" />
                        <input className="form-control" type="number" name="weight" value={this.state.weight} onChange={this.handleChangeWeight} placeholder="Weight(kg)" />
                    </div>
                    <div>
                        <p className="text">Your Body Mass Index (BMI) is: {this.state.bmi}</p>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-secondary" >Calculate</button>
                        <button type="reset" className="btn btn-info" onClick={this.reset}>reset</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default App;
