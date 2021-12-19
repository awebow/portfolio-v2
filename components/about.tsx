import React from "react";

import Skill from "./skill";

import Style from "../styles/About.module.css";

class About extends React.Component {

    constructor(props: any) {
        super(props);
        
        this.state = {
            floating: true
        };
    }
    
    render() {
        return (
            <section className="min-h-screen xl:flex items-stretch text-center xl:text-justify">
                <section className="introduce p-4">
                    <h1 className="text-5xl font-bold text-center">Who am I?</h1>

                    <img src="/picture.jpg" className="rounded-full w-64 mx-auto mt-4" />
                    <h2 className="text-xl font-bold text-center mt-2">마수현(馬秀弦, Ma Suhyeon)</h2>
                    <p className="mt-4">생년월일: 1997년 7월 12일</p>
                    <address className="not-italic">E-mail: bigmsh11@gmail.com</address>
                    <p>경희대학교 컴퓨터공학과 졸업</p>
                    <p>한국디지털미디어고등학교 웹프로그래밍과 졸업</p>

                    <p>제9기 SW 마에스트로 과정 수료 및 인증</p>
                    <p>前 경희대학교 컴퓨터공학과 알고리즘 특성화 동아리 HACKER 회장</p>
                    <p>前 게임 개발 스타트업 Foxtail Games CTO</p>
                    <p>前 실리콘밸리 스타트업 methinks 인턴</p>
                    <p>前 경희고등학교 방과후학교 웹 과목 실습강사</p>
                    <p>前 한국디지털미디어고등학교 창업 동아리 Phantom Soft 개발팀장</p>
                    <p>前 한국디지털미디어고등학교 창업 동아리 #Semicolon Development 개발팀장</p>
                </section>

                <section className="p-4 flex-1">
                    <h1 className="text-5xl font-bold">What can I do?</h1>

                    <h2 className="text-3xl font-bold my-2">Languages</h2>
                    <ul className={Style.skills}>
                        <li>
                            <Skill
                                text="Java"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="Go"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="JavaScript"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="Kotlin"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="Python"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="Dart"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="C"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="C++"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="C#"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                                level={3.5} />
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold my-2">Platforms & Frameworks & Tools</h2>
                    <ul className={Style.skills}>
                        <li>
                            <Skill
                                text="Android"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="Vue.js"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="Node.js"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="MySQL"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                level={5} />
                        </li>

                        <li>
                            <Skill
                                text="Unity"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                                level={4.5} />
                        </li>

                        <li>
                            <Skill
                                text="Spring"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="React"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="Flutter"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="MongoDB"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="Docker"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                level={4} />
                        </li>

                        <li>
                            <Skill
                                text="Next.js"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                level={3.5} />
                        </li>

                        <li>
                            <Skill
                                text="Nuxt.js"
                                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                                level={3.5} />
                        </li>
                    </ul>
                </section>
            </section>
        );
    }

}

export default About;