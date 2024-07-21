import React, { useState } from 'react';
import StepsAddTrainings from './Trainings';
import StepsList from '../components/StepsList';
import OneTraining from '../models/OneTraining';

export default function StepCounter(props) {
    const [stepsList, setStepsList] = useState([]);

    const handleAdd = stepsInfo => {
        setStepsList(prevStepsList => {
            const existent = prevStepsList.find(o => o.date === stepsInfo.date);
            if (existent === undefined) {
                return [...prevStepsList, stepsInfo];
            }
            return prevStepsList.map(o => {
                if (o.id !== existent.id) {
                    return o;
                }
                return new OneTraining(o.id, o.date, o.distance + stepsInfo.distance);
            })

        });
    }

    const handleRemove = id => {
        setStepsList(prevStepsList => prevStepsList.filter(o => o.id !== id));
    };

    const sortedList = stepsList.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });

    return (
        <div className="container">
            <StepsAddTrainings onAdd={handleAdd} />
            <StepsList stepsList={sortedList} onRemove={handleRemove} />
        </div>
    );
}

