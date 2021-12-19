import React from "react";

import Style from "../styles/Skill.module.css";

interface Props {
    icon: string;
    text: string;
    level: number;
}

class Skill extends React.Component<Props> {

    render() {
        return (
            <div className="w-32 bg-white rounded-lg shadow-md p-2">
                <img src={this.props.icon} className="w-full" />
                <div className="text-center">{ this.props.text }</div>

                <div className="flex justify-center">
                    <div className={Style.star} style={{
                        "--frag": Math.min(Math.max(this.props.level, 0), 1) * 100 + "%"
                    } as React.CSSProperties}></div>

                    <div className={Style.star} style={{
                        "--frag": Math.min(Math.max(this.props.level - 1, 0), 1) * 100 + "%"
                    } as React.CSSProperties}></div>

                    <div className={Style.star} style={{
                        "--frag": Math.min(Math.max(this.props.level - 2, 0), 1) * 100 + "%"
                    } as React.CSSProperties}></div>

                    <div className={Style.star} style={{
                        "--frag": Math.min(Math.max(this.props.level - 3, 0), 1) * 100 + "%"
                    } as React.CSSProperties}></div>

                    <div className={Style.star} style={{
                        "--frag": Math.min(Math.max(this.props.level - 4, 0), 1) * 100 + "%"
                    } as React.CSSProperties}></div>
                </div>
            </div>
        );
    }

}

export default Skill;