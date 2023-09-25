import React, { useState } from 'react';
import ReviewsSection from '../../sections/HomePage/ReviewsSection/ReviewsSection';
import TrainingCarouselSection from '../../sections/ProfilePage/TrainingCarouselSection/TrainingCarouselSection';

import { MOCKED_TRAININGS_DATA } from '../ProfilePage/constants';
import TrainingDetailsContent from '../../sections/TainingDetailsContent/TainingDetailsContent';
import FoodDetailsContent from '../../sections/TainingDetailsContent/FoodDetailsContent';

const FoodDetailsPage = () => {
    const [selectedTrainingType] = useState(MOCKED_TRAININGS_DATA);

    const { [selectedTrainingType]: _, ...filteredTrainingData } = MOCKED_TRAININGS_DATA;
    return (
        <>
            {/*<TrainingDetailsContent training={filteredTrainingData.stretching}/>*/}
            {/*<FoodDetailsContent training={filteredTrainingData.healthy_diet}/>*/}
            <ReviewsSection />
            <TrainingCarouselSection
                filteredTrainingData={filteredTrainingData}
            />
        </>
    );
};

export default FoodDetailsPage;