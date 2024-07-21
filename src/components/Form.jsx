import React, { useState } from 'react';
import OneTraining from '../models/OneTraining';
import nanoid from 'nanoid';

export default function StepsAddTrainings(props) {
    const { onAdd } = props;
    const [Trainings, setTrainings] = useState({ date: '', distance: '' });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setTrainings(prevTrainings => ({ ...prevTrainings, [name]: value }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        const stepsInfo = new OneTraining(nanoid(), Trainings.date, Number(Trainings.distance));
        onAdd(stepsInfo);
        setTrainings({ date: '', distance: '' });
    }

    return (
        <Trainings onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Дата</label>
                <label htmlFor="distance">Пройдено км</label>
            </div>
            <input name="date" type="date" min="1970-01-01" value={Trainings.date} onChange={handleChange} />
            <input name="distance" type="number" min="1" value={Trainings.distance} onChange={handleChange} />
            <button type="submit">OK</button>
        </Trainings>
    );
}

