import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import ClubCard from '../../components/Clubcard';
import HomeLayout from '../../layouts/HomeLayout'
import { getAllClubs } from '../../redux/slices/clubSlice';
function ClubList(){
   const dispatch = useDispatch() ;

   const { clubData } = useSelector((state) => state.clubs);

   async  function loadClubs(){
      await  dispatch(getAllClubs())
    }

useEffect(()=>{
    loadClubs()
},[]);

    return(
        <>
            <HomeLayout>
                <div className='min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white '>
                    
                        <div className='mb-10 flex flex-wrap gap-14 '>
                                {clubData?.map((element)=>{
                                    return<ClubCard key={element._id} data={element}/>
                                })}
                        </div>
                   
                </div>
            </HomeLayout>
        
        </>
    )
}

export default ClubList;