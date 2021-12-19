import React from "react";
import classNames from "classnames";

import IconButton from "./icon-button";

import projects from "../assets/projects.json";
import stack from "../assets/stack.json";

import Style from "../styles/Projects.module.css";

interface Skill {
    name: string;
    icon: string;
}

interface Link {
    icon: string;
    text: string;
    url: string;
}

interface State {
    fixHeader: boolean;
    keyword: string;
    stackSelecting: boolean;
    stackSelections: {[key: string]: boolean};
}

class Projects extends React.Component<any, State> {

    section: React.RefObject<HTMLElement>;

    constructor(props: any) {
        super(props);

        this.section = React.createRef();
        this.state = {
            fixHeader: false,
            keyword: "",
            stackSelecting: false,
            stackSelections: Object.fromEntries(Object.keys(stack).map(k => [k, false]))
        };

        this.updateFixHeader = this.updateFixHeader.bind(this);
        this.toggleStackSelecting = this.toggleStackSelecting.bind(this);
        this.keywordInput = this.keywordInput.bind(this);
    }

    render() {
        return (
            <section ref={this.section} className={classNames("projects relative min-h-screen p-4 pt-36")}>

                <header className={classNames("flex flex-col h-36 p-4 top-0 left-0 right-0",
                    this.state.fixHeader ? Style["fixed-h"] : "absolute"
                )}>
                    <h1 className="text-5xl font-bold text-center">What did I do?</h1>

                    <div className="flex mt-auto relative justify-center">
                        <input type="text" placeholder="프로젝트 검색"
                            className={classNames(Style.field, "flex-1 md:w-80 md:flex-none")}
                            onInput={this.keywordInput} />

                        <button type="button" className={classNames(Style.select, "md:absolute md:right-0 ml-2")}
                            onClick={this.toggleStackSelecting}>기술 스택</button>
                        { this.state.stackSelecting &&
                            <ul className={classNames(
                                "absolute right-0 top-full mt-2 w-48 max-h-64",
                                "bg-white rounded-lg shadow-md text-black",
                                "overflow-auto",
                                Style["custom-scroll-bar"]
                            )}>
                                {Object.entries(stack).map(([k, s]) => (
                                    <li key={k}>
                                        <button type="button" className="w-full flex items-center p-2"
                                            onClick={this.toggleStackSelection.bind(this, k)}>
                                            <img src={s.icon} className="h-8" />
                                            <span className="ml-2 mr-auto">{ s.name }</span>

                                            <input type="checkbox" id={`check-${k}`} className={Style.checkbox}
                                                checked={this.state.stackSelections[k]} onClick={this.disableEvent} />
                                            <label htmlFor={`check-${k}`} onClick={this.disableEvent}></label>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </header>

                <ul className="space-y-3">
                    { this.renderRows() }
                </ul>
            </section>
        )
    };

    renderRows() {
        var stackFilter = Object.keys(this.state.stackSelections).filter(e => this.state.stackSelections[e]);
        var targets = projects;

        if(this.state.keyword.length > 0)
            targets = targets.filter(e => e.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) != -1);

        if(stackFilter.length > 0)
            targets = targets.filter(e => stackFilter.some(f => e.stack.some(s => s == f)))

        return targets.map((e) => {
            var description = e.description.split("\n").map((p, i) => (
                <p key={i}>{ p }</p>
            ));

            var stackEls = e.stack.map((s, i) => {
                var skill = (stack as any)[s] as Skill;

                return <li key={i} className="inline-block"><IconButton icon={skill.icon} text={skill.name} /></li>;
            });

            return (
                <li key={ e.name } className="text-black flex w-full 2xl:h-36 bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={e.image} className="block h-36" />
                    <div className="px-3 py-2 flex-1 h-full flex flex-col 2xl:flex-row">
                        <div className="flex flex-col">
                            <h2 className="font-bold">{ e.name }</h2>

                            <p>{ description }</p>

                            <ul className="mt-auto space-x-2">
                                { stackEls }
                            </ul>
                        </div>

                        <ul className="flex-1 flex 2xl:justify-center items-start content-end 2xl:flex-col flex-wrap">
                            { this.renderLinks(e.links) }
                        </ul>
                    </div>
                </li>
            );
        });
    }

    renderLinks(links: Link[]) {
        return links.map((e, i) => <li key={i} className="m-1"><IconButton icon={e.icon} text={e.text} href={e.url} style="round" /></li>);
    }

    componentDidMount() {
        this.updateFixHeader();

        window.addEventListener("scroll", this.updateFixHeader);
        window.addEventListener("resize", this.updateFixHeader);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateFixHeader);
        window.removeEventListener("resize", this.updateFixHeader);
    }

    toggleStackSelecting() {
        this.setState({ stackSelecting: !this.state.stackSelecting });
    }

    toggleStackSelection(key: string) {
        var selections = Object.assign({}, this.state.stackSelections);
        selections[key] = !selections[key];

        this.setState({ stackSelections: selections });
    }

    updateFixHeader() {
        this.setState({ fixHeader: window.scrollY > this.section.current!.offsetTop });
    }

    disableEvent(e: Event | React.UIEvent) {
        e.preventDefault();
        return false;
    }

    keywordInput(e: React.FormEvent) {
        this.setState({ keyword: (e.target as HTMLInputElement).value });
    }

}

export default Projects;