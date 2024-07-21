import React from 'react';
import PropTypes from 'prop-types';
import OneTraining from '../models/OneTraining';

export default function Trainings(props) {
    const { stepsInfo, onRemove: handleRemove } = props;

    return (
        <React.Fragment>
            <tr>
                <td>{stepsInfo.date}</td>
                <td>{stepsInfo.distance}</td>
                <td onClick={() => handleRemove(stepsInfo.id)} className="third-col">
                    <span role="img" aria-label="delete">&#10060;</span>
                </td>
            </tr>
        </React.Fragment>
    );
}

Trainings.propTypes = {
    stepsInfo: PropTypes.instanceOf(OneTraining).isRequired,
    onRemove: PropTypes.func.isRequired,
}


