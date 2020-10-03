import Router from 'express';
import db from './database/connection';

const router = Router();

router.get('/classes', async (req, res) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
    } = req.body;

    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const insertedClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id: insertedUsersIds[0]
    });

    const classSchedule = schedule.map((scheduleItem: any) => {
        
        return {};
    });

});

export default router;
