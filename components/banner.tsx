import React from "react";

interface State {
    heading: string;
}

const headingText = "마수현's Developer Portfolio";

const headingFrames = getFrames();

const typingGap = 70;
const typingJitter = 50;

class Banner extends React.Component<any, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            heading: ""
        };
    }
    
    render() {
        return (
            <header className="banner">
                <h1 className="text-white text-2xl md:text-5xl font-bold">{this.state.heading}</h1>
            </header>
        );
    }

    componentDidMount() {
        setTimeout(() => this.renderHeading(0), typingGap + Math.random() * typingJitter);
    }

    renderHeading(frameIdx: number) {
        this.setState({ heading: headingFrames[frameIdx] });

        if(frameIdx < headingFrames.length - 1)
            setTimeout(() => this.renderHeading(frameIdx + 1), typingGap + Math.random() * typingJitter);
    }

    

}

export default Banner;

function getFrames(): string[] {
    const hangulInitials = [
        "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ",
        "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
    ];
    
    const hangulFinalBases = [
        0, 1, 2, 1, 4, 4, 4, 7,
        8, 8, 8, 8, 8, 8, 8, 8,
        16, 17, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27
    ];

    var frames = [] as string[];
    for(var i = 0; i < headingText.length; i++) {
        let code = headingText.charCodeAt(i);

        if(code >= 0xAC00 && code < 0xD7AF) {
            let lastFrame = frames.length > 0 ? frames[frames.length - 1] : "";

            let initial = ~~(~~((code - 0xAC00) / 28) / 21);
            let medial = ~~((code - 0xAC00) / 28) % 21;
            let final = (code - 0xAC00) % 28;

            let finaless = 0xAC00 + initial * 21 * 28 + medial * 28;

            frames.push(lastFrame + hangulInitials[initial]);
            frames.push(lastFrame + String.fromCharCode(finaless));
            if(final > 0) {
                if(hangulFinalBases[final] != final)
                    frames.push(lastFrame + String.fromCharCode(finaless + hangulFinalBases[final]));

                frames.push(lastFrame + String.fromCharCode(finaless + final));
            }
        }
        else {
            frames.push(headingText.substring(0, i+1));
        }
    }

    return frames;
}