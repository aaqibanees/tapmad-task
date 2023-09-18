import React, {useState} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";
import {serializeForm, generateRandomNDigits} from "../../utils";
import styles from '../../css/form.module.css';


const CreateUser = () => {
    const [image, setImage] = useState(null);
    const {addUser} = useOutletContext();
    const navigate = useNavigate();

    const saveChanges = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        form.append('id', generateRandomNDigits(5));
        form.append('picture', (image ? URL.createObjectURL(image) : ''));

        addUser(serializeForm(form));
        navigate('/');
    };

    return (
        <div className={styles.formMainWrapper}>
            <div className={styles.formInnerWrapper}>
                <form onSubmit={saveChanges}>
                    <div className={styles.formTitle}>
                        <p>Create New User</p>
                    </div>
                    <div className={styles.mb5}>
                        <div className={styles.formFileInput}>
                            <div className={styles.formAvatarEdit}>
                                <input type='file' id="imageUpload" onChange={(e) => setImage(e.target.files[0])} accept=".png, .jpg, .jpeg"/>
                                <label htmlFor="imageUpload"></label>
                            </div>
                            <div className={styles.formAvatarPreview}>
                                <img src={
                                    (image ? URL.createObjectURL(image) : 'https://placehold.co/150x150?font=lato&text=Tapmad+Task')} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mb5}>
                        <label htmlFor="username" className={styles.formLabel}>Full Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Full Name"
                            className={styles.formInput} />
                    </div>
                    <div className={styles.mb5}>
                        <label htmlFor="gender" className={styles.formLabel}>Gender</label>
                        <label className={styles.radio}>Male
                            <input type='radio' id='gender' name='gender' value='Male' />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.radio}>Female
                            <input type='radio' id='gender' name='gender' value='Female' />
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                    <div className={styles.mb5}>
                        <label htmlFor="address" className={styles.formLabel}>Address</label>
                        <textarea
                            name="address"
                            id="address"
                            placeholder="Address..."
                            className={styles.formInput} />
                    </div>
                    <div>
                        <button className={styles.formBtn}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default CreateUser;