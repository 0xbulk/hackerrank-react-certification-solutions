import React, { useState } from 'react';

function Slides({slides}) {

    const [activeSlideNo, setActiveSlideNo] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);

    const onClickNext = () => {
        let curSlideIndex = activeSlideNo;

        if(curSlideIndex < slides.length - 1){
            curSlideIndex++;
            setActiveSlideNo(curSlideIndex);
            setCurrentSlide(slides[curSlideIndex]);
            setDisabledPrev(false);
            setDisabledRestart(false);
        }
        if(curSlideIndex === slides.length - 1){
            setDisabledNext(true);
        }
    }
    
    const onClickPrev = () => {
        let curSlideIndex = activeSlideNo;

        if(curSlideIndex > 0){
            curSlideIndex--;
            setActiveSlideNo(curSlideIndex);
            setCurrentSlide(slides[curSlideIndex]);
            setDisabledNext(false);
        }
        if(curSlideIndex === 0){
            setDisabledPrev(true);
            setDisabledRestart(true);
        }
    }

    const onClickRestart = () => {
        setActiveSlideNo(0);
        setCurrentSlide(slides[0]);
        setDisabledPrev(true);
        setDisabledNext(false);
        setDisabledRestart(true);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={onClickRestart} disabled={disabledRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={onClickPrev} disabled={disabledPrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={onClickNext} disabled={disabledNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
