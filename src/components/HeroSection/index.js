import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>

                    <HeroLeftContainer id="Left">
                        <Title>Hi, I'm <br></br> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>  
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SubTitle>{Bio.description_1}</SubTitle>
                        <SubTitle>{Bio.description_2}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img 
                            src={require("../../images/profile-pic.png")} 
                            style={{ width: '75%', height: '500px' }} // Adjust these values as needed
                        />
                    </HeroRightContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection