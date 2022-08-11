import React, { Component } from 'react';
import './Clock.css';
import { HourglassOutlined } from '@ant-design/icons'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minute: '15',
            second: '00'
        };
    }

    componentDidMount() {
        if (this.props.duration) {
            let date = new Date();
            let endTime = date.setSeconds(date.getSeconds() + Number(this.props.duration));
            this.countFun(endTime);
        }
    }

    //组件卸载取消倒计时
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    countFun = (endTime) => {
        let time = endTime - new Date().getTime();
        this.timer = setInterval(() => {
            // 防止倒计时出现负数
            if (time > 1000) {
                time -= 1000;
                let minute = Math.floor((time / 1000 / 60) % 60);
                let second = Math.floor((time / 1000) % 60);
                this.setState({
                    minute: minute < 10 ? '0' + minute : minute,
                    second: second < 10 ? '0' + second : second,
                });
            } else {
                clearInterval(this.timer)
            }
        }, 1000);
    };

    render() {
        return (
            <div className="remind">
                <div>请确认您的订单信息，并在15分钟内完成支付!</div>
                <div className="icon">
                    <HourglassOutlined />
                </div>
                <div className="clock">
                    {this.state.minute}:{this.state.second}
                </div>
            </div>
        );
    }
}
