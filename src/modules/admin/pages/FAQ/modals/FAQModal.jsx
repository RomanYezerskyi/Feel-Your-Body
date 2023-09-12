import styles from '../FAQPage.module.css';
import ModalWindow from '../../../../../components/Modal/ModalWindow';
import CustomInput from '../../../../../components/Input/CustomInput';
import Button from '../../../../../components/Button/Button';
import closeIcon from '../../../../../img/components/regularClose.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewFAQHelper,
    updateFAQHelper,
} from '../../../../../context/admin-data-context/admin-context.helper';

const FAQModal = ({ isOpen, onClose, selectedId, editMode }) => {
    const dispatch = useDispatch();
    const currentAdminState = useSelector(state => state.admin);

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if (editMode && selectedId) {
            debugger;
            const data = currentAdminState.faq.find(x=> x.id === selectedId);
            setQuestion(data.question);
            setAnswer(data.answer);
        }
    }, [selectedId, editMode]);

    function changeQuestionHandler(e) {
        setQuestion(e?.target?.value);
    }

    function changeAnswerHandler(e) {
        setAnswer(e?.target?.value);
    }

    function onSaveHandler() {
        if(answer && question) {

            const data = { question: question, answer: answer };

            if(editMode && selectedId) {
                data.id = selectedId;
                updateFAQHelper(dispatch, selectedId, data);
            } else {
                addNewFAQHelper(dispatch, data);
            }

        } else {
            // TODO error
        }
    }

    return (
        <>
            <ModalWindow
                element={
                    <section className={styles.modalBox} >
                        <div className={`${styles.content}`} >
                            <h2 className={styles.contentTitle}>FAQ</h2>
                            <div className='inputsBox'>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Запитання"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeQuestionHandler}
                                        value={question}
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <CustomInput
                                        customInputContainer={styles.customInputContainer}
                                        className={styles.customInput}
                                        placeholder={"Відповідь"}
                                        type={"text"}
                                        required={true}
                                        onChange={changeAnswerHandler}
                                        value={answer}
                                    />
                                </div>
                                <div className=''>
                                    <Button
                                        className={styles.btn}
                                        aria-expanded={true}
                                        aria-controls={`coach-modal`}
                                        onClick={onSaveHandler}
                                    >
                                        <p>OK</p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                }
                isOpen={isOpen}
                onClose={onClose}
                styles={{
                    bgColor:' #FFF',
                    width: '670px',
                    height: '570px',
                    border: '1px solid #A5A5A5',
                    overlayBgColor: 'none',
                }}
                closeIcon={closeIcon}
            />
        </>
    );
};

export default FAQModal;