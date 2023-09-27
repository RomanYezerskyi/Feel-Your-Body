import {
    addCoach,
    addCoachDetails,
    addCoaching,
    addCoachingDetails,
    addCoachingParentDetails,
    addFAQPoint,
    addFeedback,
    addFood,
    addFoodPoint, addPhotosToCoach,
    addPhotosToCoaching,
    addVideoToCoaching,
    deleteCoach,
    deleteCoachDetails,
    deleteCoaching,
    deleteCoachingDetails, deleteCoachingParentDetails,
    deleteFAQ,
    deleteFeedback,
    deleteFood,
    deleteFoodPoint,
    getUsers,
    updateCoach,
    updateFAQPoint,
    updateFeedback,
    updateFood,
    updateFoodPoint,
} from '../../api/admin-api';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { setCoaches, setCoaching, setFAQ, setFeedbacks, setFood, setUsers } from './admin-actions';
import { getCoaches, getCoaching, getFaq, getFeedbacks, getFood } from '../../api/content-api';

export function addNewCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData) {
    addCoach(data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachDetails(id).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateCoachHelper(dispatch: Dispatch<AnyAction>, data: FormData, coachId: string) {
    updateCoach(data, coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoach(coachId).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachingHelper(dispatch: Dispatch<AnyAction>, coachId: string) {
    deleteCoaching(coachId).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingDetails(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteCoachingParentDetailsHelper(dispatch: Dispatch<AnyAction>, id) {
    deleteCoachingParentDetails(id).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}


export function getCoachesHelper(dispatch: Dispatch<AnyAction>){
    getCoaches()
        .then(res => {
            dispatch(setCoaches(res.data));
        })
        .catch(err => {});
}

export function addNewCoachDetailsHelper(dispatch: Dispatch<AnyAction>, id, data) {
    addCoachDetails(id, data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getFeedbacksHelper(dispatch: Dispatch<AnyAction>){
    getFeedbacks()
        .then(res => {
            dispatch(setFeedbacks(res.data));
        })
        .catch(err => {});
}

export function addNewFeedbacksHelper(dispatch: Dispatch<AnyAction>, data) {
    addFeedback(data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFeedbacksHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFeedback(id, data).then(res => {
        getFeedbacks()
            .then(res => {

                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteFeedbackHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFeedback(id).then(res => {
        getFeedbacks()
            .then(res => {
                dispatch(setFeedbacks(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addNewCoachingHelper(dispatch: Dispatch<AnyAction>, data: FormData, video) {
    addCoaching(data).then(res => {
        debugger;
        addVideoToCoachingHelper(dispatch, res.data.id, video);
        return res.status === 200;
    }).catch(err => {});
}

export function addNewCoachingDetailsHelper(dispatch: Dispatch<AnyAction>, dataParent, data) {

    addCoachingParentDetails(dataParent).then(res => {
        data.id = res.data;
        addCoachingDetails(data).then(res => {
            getCoaching()
                .then(res => {
                    dispatch(setCoaching(res.data));
                })
                .catch(err => {});
        }).catch(err => {});
    }).catch(err => {});

}

export function addPhotosToCoachingHelper(dispatch: Dispatch<AnyAction>, data) {
    addPhotosToCoaching(data).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addPhotosToCoachHelper(dispatch: Dispatch<AnyAction>, data) {
    addPhotosToCoach(data).then(res => {
        getCoaches()
            .then(res => {
                dispatch(setCoaches(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addVideoToCoachingHelper(dispatch: Dispatch<AnyAction>, id, data) {
    addVideoToCoaching(id, data).then(res => {
        getCoaching()
            .then(res => {
                dispatch(setCoaching(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getCoachingHelper(dispatch: Dispatch<AnyAction>){
    getCoaching()
        .then(res => {
            dispatch(setCoaching(res.data));
        })
        .catch(err => {});
}

export function getFoodHelper(dispatch: Dispatch<AnyAction>){
    getFood()
        .then(res => {
            dispatch(setFood(res.data));
        })
        .catch(err => {});
}

export function addNewFoodHelper(dispatch: Dispatch<AnyAction>, data) {
    addFood(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFoodHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFood(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function addNewFoodPointHelper(dispatch: Dispatch<AnyAction>, data) {
    addFoodPoint(data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteFoodHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFood(id).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteFoodPointHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFoodPoint(id).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFoodPointHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFoodPoint(id, data).then(res => {
        getFood()
            .then(res => {
                dispatch(setFood(res.data));
            })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function getUsersHelper(dispatch: Dispatch<AnyAction>) {
    getUsers().then(res => {
        dispatch(setUsers(res.data));
        return res.status === 200;
    }).catch(err => {});
}

export function getFAQHelper(dispatch: Dispatch<AnyAction>) {
    getFaq().then(res => {
        dispatch(setFAQ(res.data));
        return res.status === 200;
    }).catch(err => {});
}

export function addNewFAQHelper(dispatch: Dispatch<AnyAction>, data) {
    addFAQPoint(data).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
        .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function updateFAQHelper(dispatch: Dispatch<AnyAction>, id, data) {
    updateFAQPoint(id, data).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}

export function deleteFAQHelper(dispatch: Dispatch<AnyAction>, id: string) {
    deleteFAQ(id).then(res => {
        getFaq().then(res => {
            dispatch(setFAQ(res.data));
        })
            .catch(err => {});
        return res.status === 200;
    }).catch(err => {});
}
