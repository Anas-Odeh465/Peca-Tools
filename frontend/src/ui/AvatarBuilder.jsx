

export default function AvatarBuilder({name = "", hovered = false}){
    return(
        <div className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#192852] text-white cursor-pointer hover:bg-[#192852]/95 ${hovered ? 'hover:scale-105' : ''} transition-all duration-150 ease-in-out`}>
            <span className="text-lg font-semibold">{name.charAt(0).toUpperCase()}</span>
        </div>
    );
}