import registration from '../models/registrationModel.js';
import event from '../models/eventModel.js'
import AppError from "../utils/errorUtil.js";
import sendMail from '../utils/sendEmail.js';
import Club from '../models/clubsModel.js'
//import { logging } from 'googleapis/build/src/apis/logging/index.js';

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

       let eventInfo = await event.findById(eventId)
       let clubInfo = await Club.findById(eventInfo.clubId)

       console.log('evet',eventInfo);
       console.log('club info:',clubInfo);
       
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
   //     eventInfo.thumbnail.secure_url
        const subject = `Confirmation of Event Registration - ${eventInfo.eventName}`
        const message = `<h1> Dear ${fullName},</h1>
                        <h4>
                        We are delighted to inform you that your registration for the upcoming event, ${eventInfo.eventName} has been successfully received and confirmed!
                        
                        </h4><br>
                        <img src="${ eventInfo.thumbnail.secure_url}" alt="Image"> 
                        <p>Event Details:

                        <li>Club Name: ${clubInfo.clubName}</li>
                        <li>Event Name: ${eventInfo.eventName}</li>
                        <li>Event Description: ${eventInfo.description}
                        </li></p><br>
                        <p>
                        Your participation in this event is greatly appreciated, and we're excited to have you join us for what promises to be an engaging and memorable experience.
                        <br>
                        Please make sure to arrive at the venue on time and be prepared to participate to the best of your abilities. If there are any specific requirements or preparations needed for the event, we will communicate them to you well in advance.
                        </p>
                        <p>
                        Should you have any questions or require further information, feel free to reach out to us at eventspectra7781@gmail.com . We are here to assist you in any way possible.
                        </p>
                        <br>
                        We look forward to seeing you at the event and wish you the best of luck!
                        <br><br><br>
                        Warm regards,<br>
                        Team ${clubInfo.clubName}
                        `
        try {
             await sendMail(email,subject,message)
             console.log('Mail Sent Successfully....');
        } catch (error) {
            console.error(`Error :`,error.message);
        }

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