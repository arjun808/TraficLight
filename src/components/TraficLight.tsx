    import React, { Component } from 'react';
    import Signal from './Signal';

  
    interface PropsType {
        light: Array<"green" | "yellow" | "red">;
    }
    interface stateProps{
        isActive:number
    }

    export default class TrafficLight extends Component<PropsType,stateProps> {
        private intervalId: NodeJS.Timeout | null = null;
        constructor(props: PropsType) {
            super(props);
            this.state={
                isActive:0
            }
        }
        componentDidMount(): void {
           this.intervalId=  setInterval(()=>{
                 this.setState((prev)=>({
                    isActive:(this.state.isActive+1)%3
                 }))
            },1000)
             
        }
        componentWillUnmount() {
        
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        }
        render() {
            const { light } = this.props;
            return (
                <div>
                    {light.map((li, index) => (
                        <Signal color={li} isActive={this.state.isActive===index} key={index} />  
                    ))}
                </div>
            );
        }
    }
