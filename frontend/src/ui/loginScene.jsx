import rightScene from '../assets/images/backgrounds/Right-pic-login.png';
import leftScene from '../assets/images/backgrounds/Left-pic-login.png';

export default function Scene(){
    return(
        <div className="scene">
            <img loading="eager" src={leftScene} alt="left-draws" width={400} height={300} draggable={false} aria-hidden="true" className="pointer-events-none absolute lg:bottom-0 md:-bottom-15 left-0 w-40 sm:w-56 lg:w-100 h-auto opacity-60 hidden md:flex select-none"/>
            <img loading="eager" src={rightScene} alt="right-draws" width={400} height={300} draggable={false} aria-hidden="true" className="pointer-events-none absolute lg:bottom-0 md:-bottom-15 right-0 w-40 sm:w-56 lg:w-100 h-auto opacity-60 hidden md:flex select-none"/>
        </div>
    );
}