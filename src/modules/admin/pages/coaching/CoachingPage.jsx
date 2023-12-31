import styles from './CoachingPage.module.css';
import mainStyles from '../../Admin.module.css';
import addIcon from  '../../../../img/components/add_icon.png';
import editIcon from '../../../../img/components/edit_icon.png';
import deleteIcon from '../../../../img/components/delete_icon.png';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    deleteCoachingDetailsHelper,
    deleteCoachingHelper, deleteCoachingParentDetailsHelper,
    getCoachesHelper,
    getCoachingHelper,
} from '../../../../context/admin-data-context/admin-context.helper';
import PreventDeleteModal from '../../../../components/PreventDeleteModal/PreventDeleteModal';
import CoachingModal from './modals/CoachingModal';
import Button from '../../../../components/Button/Button';
import arrowIcon from '../../../../img/components/ri_arrow-up-line.png';
import AnimateHeight from 'react-animate-height';
import CoachingDetails from './modals/CoachingDetails';
import UpdateCoachModal from '../coaches/modals/UpdateCoachModal';
import UpdateCoaching from './modals/UpdateCoaching';
import UploadImagesCarousel from './modals/UploadImages';
import UploadVideosCarousel from './modals/UploadVideos';
const CoachingPage = () => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);
    const [coachingList, setCoachingList] = useState([]);

    const [addCoachingIsOpen, setAddCoachingIsOpen] = useState(false);
    const [editCoachIsOpen, setEditCoachIsOpen] = useState(false);
    const [selectedCoachId, setSelectedCoachId] = useState(null);
    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [imagesIsOpenOpen, setImagesIsOpen] = useState(false);
    const [addDetailsIsOpen, setAddDetailsIsOpen] = useState(false);
    const [videosIsOpen, setVideosIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleToggle = (index) => {
        setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === index ? null : index
        );
    };

    useEffect(() => {
        getCoachingHelper(dispatch);
        getCoachesHelper(dispatch);
    }, []);

    useEffect(() => {
        setCoachingList(currentAdminState.coaching);
    }, [currentAdminState.coaching]);

    function onEditCoachHandler(id: string) {
        setSelectedCoachId(id);
        setEditCoachIsOpen(true);
    }

    function onAddDetailsHandler(id: string) {
        setSelectedCoachId(id);
        setAddDetailsIsOpen(true);
    }

    function onEditCloseCoachHandler() {
        setSelectedCoachId(null);
        setEditCoachIsOpen(false);
    }

    function addCoachingCloseHandler() {
        setAddCoachingIsOpen(false);
    }

    function onDeleteCoachHandler(id) {
        setSelectedCoachId(id);
        setDeleteIsOpen(true);
    }

    function deleteCoaching() {
        setDeleteIsOpen(false);
        deleteCoachingHelper(dispatch, selectedCoachId);
    }

    function deleteCoachingDetails(id: string) {
        deleteCoachingDetailsHelper(dispatch, id);
    }

    function deleteCoachingParentDetails(id: string) {
        deleteCoachingParentDetailsHelper(dispatch, id);
    }

    function onImagesOpenHandler(id: string) {
        setImagesIsOpen(true);
        setSelectedCoachId(id);
    }

    function onImagesCloseHandler(id: string) {
        setImagesIsOpen(false);
        setSelectedCoachId(null);
    }

    function onVideosCloseHandler(id: string) {
        setVideosIsOpen(false);
        setSelectedCoachId(null);
    }

    function onVideosOpenHandler(id: string) {
        setVideosIsOpen(true);
        setSelectedCoachId(id);
    }

    return (
        <>
            <UploadVideosCarousel isOpen={videosIsOpen} onClose={onVideosCloseHandler} coachingId={selectedCoachId}/>
            <UploadImagesCarousel isOpen={imagesIsOpenOpen} onClose={onImagesCloseHandler} coachingId={selectedCoachId}/>
            <UpdateCoaching  isOpen={editCoachIsOpen} selectedCoachingId={selectedCoachId} onClose={onEditCloseCoachHandler} />
            <CoachingDetails onClose={() => setAddDetailsIsOpen(false)} isOpen={addDetailsIsOpen} coachingId={selectedCoachId}/>
            <PreventDeleteModal onClose={() => setDeleteIsOpen(false)} isOpen={deleteIsOpen} text={"Ви точно бажаєте видалити тренування?"} onSummit={deleteCoaching}/>
            <CoachingModal onClose={addCoachingCloseHandler} isOpen={addCoachingIsOpen} />
            <div className={styles.box}>
                <div className={styles.header}>
                    <h1>Тренування</h1>
                </div>
                <div className=''>
                    <button className={mainStyles.mainAddBtn} onClick={() => setAddCoachingIsOpen(true)}>
                        <p className={mainStyles.mainAddBtnText}>Додати тренування</p>
                        <img src={addIcon} alt='' className={mainStyles.mainAddBtnIcon}/>
                    </button>
                </div>
                <div className={mainStyles.tableBox}>
                    <div className={mainStyles.headBlock}>
                        <div className={mainStyles.blockItem}>
                            <p>Name</p>
                        </div>
                        <div className={mainStyles.blockItem}>
                            <p>Actions</p>
                        </div>
                    </div>

                    {coachingList && coachingList.map(c =>
                        <div key={c.id}>
                            <div className={mainStyles.bodyBlock} >
                                <div className={mainStyles.blockItem}>
                                    <p>{c.title}</p>
                                </div>
                                <div className={mainStyles.blockItem}>
                                    <div className={mainStyles.tableActions}>
                                        <button className={mainStyles.tableBtn} onClick={() => onEditCoachHandler(c.id)}>
                                            <img src={editIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onDeleteCoachHandler(c.id)}>
                                            <img src={deleteIcon} alt='' />
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onAddDetailsHandler(c.id)}>
                                           <div className={mainStyles.box}>
                                               <img src={addIcon} alt='' />
                                               <p>Деталі тренування</p>
                                           </div>
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onImagesOpenHandler(c.id)}>
                                            <div className={mainStyles.box}>
                                                <img src={addIcon} alt='' />
                                                <p>Фото</p>
                                            </div>
                                        </button>
                                        <button className={mainStyles.tableBtn}  onClick={() => onVideosOpenHandler(c.id)}>
                                            <div className={mainStyles.box}>
                                                <img src={addIcon} alt='' />
                                                <p>Відео</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='toggle'>
                                        <Button
                                            className={mainStyles.toggleArrow}
                                            aria-expanded={selectedItem === c.id}
                                            aria-controls={`example-panel-${c.id}`}
                                            onClick={() => handleToggle(c.id)}
                                        >
                                            <img
                                                className={
                                                    selectedItem === c.id ? mainStyles.active : ''
                                                }
                                                src={arrowIcon}
                                                alt={`Toggle ${c.id}`}
                                            />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <AnimateHeight
                                id={`example-panel-${c.id}`}
                                duration={500}
                                height={selectedItem === c.id ? 'auto' : 0}
                                className=''
                            >
                                { c?.coachingDetailParents && c.coachingDetailParents.map((d, i) =>
                                    <div className=''>
                                        <div className={mainStyles.bodyBlock} key={d.id}>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <p>{i + 1}. {d.title}</p>
                                            </div>
                                            <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                <div className={mainStyles.tableActions}>
                                                    <button className={mainStyles.tableBtn}  onClick={() => deleteCoachingParentDetails(d.id)}>
                                                        <img src={deleteIcon} alt='' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        { d.details && d.details.map(x=>
                                            <div className={mainStyles.bodyBlock} key={d.id}>
                                                <div style={{paddingLeft:'100px'}}  className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                    <p>{x.detail}</p>
                                                </div>
                                                <div className={`${mainStyles.blockItem} ${mainStyles.blockSubItem}` }>
                                                    <div className={mainStyles.tableActions}>
                                                        <button className={mainStyles.tableBtn}  onClick={() => deleteCoachingDetails(x.id)}>
                                                            <img src={deleteIcon} alt='' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </AnimateHeight>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CoachingPage;
