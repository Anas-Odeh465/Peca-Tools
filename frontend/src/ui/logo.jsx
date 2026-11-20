import logo from '../assets/images/logo/Peca-logo-3.png';

export default function Logo({className = '', width = 0, height= 0, loading = ''}){
    return(
        <img onDragStart={(e) => e.preventDefault()} src={logo} alt="Peca Logo" loading={loading} className={className} width={width} height={height}/>
    );
}