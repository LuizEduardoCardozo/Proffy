import Router from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const router = Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string
}

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

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {

        const from = convertHourToMinutes(scheduleItem.from);
        const to = convertHourToMinutes(scheduleItem.to);

        return {
            week_day: scheduleItem.week_day,
            from,
            to,
        };
    });

    await db('class_schedule').insert({
        class_id: insertedClassesIds[0], 
        classSchedule
    });

});

export default router;
