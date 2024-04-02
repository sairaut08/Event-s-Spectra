import event from '../models/eventModel.js'
import Club from '../models/clubsModel.js'
import AppError from "../utils/errorUtil.js";

const createEvent = async (req,res,next) => {
    try {
        const {clubId} = req.params
        const {eventName,description} = req.body

        if(!clubId || !eventName || !description){
            return next(new AppError('all fields are required',500))
        }

        const newEvent = await event.create({
            eventName,
            description,
            clubId
        })

        if(!newEvent){
            return next(new AppError('error in creating new event',500))
        }

        // update event array in club
        await Club.findByIdAndUpdate(
            clubId,
            {$push :{eventId: newEvent._id}}
        )

        await newEvent.save()

        res.status(200).json({
            success: true ,
            message: 'new event created',
            newEvent
        })

    } catch (error) {
        return next(new AppError(error.message,500))
    }
}

const getAllEvents = async (req,res,next) => {
    try {
        const {clubId} = req.params

        if(!clubId){
            return next(new AppError('clubId is required',500))
        }

        const club = await Club.findById(clubId)
        
        if(!club){
            return next(new AppError('error in fetching events',500))
        }

        const events =  await Promise.all(club.eventId.map( e =>  event.findById(e))) 

        res.status(200).json({
            success: true ,
            message: 'fetched all events',
            events
        })

    } catch (error) {
        return next(new AppError(error.message,500))
    }
}

const deleteEvent = async (req,res,next) => {
    try {
        const {eventId,clubId} = req.params

        if(!eventId || !clubId){
            return next(new AppError('all fields are required',500))
        }

        await Club.findByIdAndUpdate(clubId,{$pull: {eventId: eventId}}) 

        await event.findByIdAndDelete(eventId)

        res.status(200).json({
            success: true ,
            message: 'event deleted !'
        })
    } catch (error) {
        return next(new AppError(error.message,500))
    }
}

export {createEvent,getAllEvents,deleteEvent}
