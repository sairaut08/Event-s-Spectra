import { useNavigate } from "react-router-dom";

function ClubCard({data}){
    const navigate = useNavigate();
    return(
        <div 
        onClick={()=>navigate('/club/description/')}
        
        className="text-white w-[22rem] h-[350px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700 ml-14 mt-10 ">
                <div className="overflow-hidden">
                    <img 
                        alt="club thumbnail"
                        src={data?.thumbnail?.secure_url}
                        className="h-48 w-full rounded-tl-lg rounded-tr-lg group:hover:scale=[1,2] transition-all ease-in-out duration-300"
                    
                    />

                    <div className="p-3 space-y-1 text-white">
                        <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
                            {data?.clubName}

                        </h2>
                        <p className="font-semibold">
                            {data.description}
                        </p>

                    </div>
                </div>
        </div>
    )
}

export default ClubCard;