import registration from '../models/registrationModel.js';
import AppError from "../utils/errorUtil.js";

const register = async (req,res,next) => {
    try {
        const {prn,department,year} = req.body 
        const {eventId} = req.params
        const email = req.user.email
        const fullName = req.user.fullName

        if(!prn || !department || !year || !eventId){
            return next(new AppError('all fields are required',500))
        }

       const alreadyExists = await registration.findOne({email})

       if(alreadyExists){
            if (alreadyExists.eventId.includes(eventId)) {
                return next(new AppError('already registered to this event',500))
            } else {
                alreadyExists.eventId.push(eventId)
                await alreadyExists.save()
            }
       }else{
            const newRegistration = await registration.create({
                prn ,
                department,
                year ,
                email ,
                fullName,
                isRegistered: true ,
                eventId: [eventId] 
            })

            // console.log('one');
            await newRegistration.save()
       }

        res.status(200).json({
            success: true ,
            message: 'registered successfully'
        })

    } catch (error) {
        return next(new AppError(error.message,500))
    }
}

const unregister = async (req,res,next) => {
    try {
        const {eventId} = req.params
        const email = req.user.email

        if(!eventId){
            return next(new AppError("EventID is required",500))
        }

        const isRegisteredToAnyEvent = await registration.findOne({email})

        if(!isRegisteredToAnyEvent){
            return next(new AppError("Not registered to any event",500))
        }

        if(!isRegisteredToAnyEvent.eventId.includes(eventId)){
            return next(new AppError("Not registered to this event",500))
        }

        await registration.findOneAndUpdate({email},{$pull: {eventId: eventId}})

        res.status(200).json({
            success: true ,
            message: 'un-registered successfully'
        })
        
    } catch (error) {
        return next(new AppError(error.message,500))
    }
} 
export {register,unregister}