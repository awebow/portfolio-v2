import React from "react";
import classNames from "classnames";

import Style from "../styles/IconButton.module.css";

interface Props {
    icon: string;
    text: string;
    href?: string;
    style?: "capsule" | "round";
}

class IconButton extends React.Component<Props, any> {

    render() {
        var classes = classNames(
            Style.capsule,
            "flex items-center space-x-2 px-2 py-1",
            this.props.style == "round" ? "rounded" : "rounded-full"
        );

        const Tag = this.props.href ? "a" : "div";

        return (
            <Tag className={classes} href={this.props.href}>
                <img src={this.props.icon} className="w-8" />
                <span>{this.props.text}</span>
            </Tag>
        );
    }

}

export default IconButton;