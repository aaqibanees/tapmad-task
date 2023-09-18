import {Link, useLocation, useNavigate, useOutletContext} from "react-router-dom";
import React, {useState} from "react";
import {serializeForm} from "../../utils";
import styles from "../../css/form.module.css";

const EditUser = () => {
    const [image, setImage] = useState(null);
    const {editUser} = useOutletContext();
    const location = useLocation();
    const navigate = useNavigate();

    const saveChanges = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        form.append('id', location.state.user.id);
        form.append('picture', (image ? URL.createObjectURL(image) : ( location.state.user.picture !== '' ? location.state.user.picture : '' ) ));
        editUser(serializeForm(form));
        navigate('/');
    };

    return (
        <div className={styles.formMainWrapper}>
            <div className={styles.formInnerWrapper}>
                <form onSubmit={saveChanges}>
                    <div className={styles.formTitle}>
                        <p>Edit User Information</p>
                    </div>
                    <div className={styles.mb5}>
                        <div className={styles.formFileInput}>
                            <div className={styles.formAvatarEdit}>
                                <input type='file' id="imageUpload" onChange={(e) => setImage(e.target.files[0])} accept=".png, .jpg, .jpeg"/>
                                <label htmlFor="imageUpload"></label>
                            </div>
                            <div className={styles.formAvatarPreview}>
                                <img src={
                                    (image ? URL.createObjectURL(image) : ( location.state.user.picture !== '' ? location.state.user.picture : 'https://placehold.co/150x150?font=lato&text=Tapmad+Task'))} />
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
                            defaultValue={location.state.user.username}
                            className={styles.formInput} />
                    </div>
                    <div className={styles.mb5}>
                        <label htmlFor="gender" className={styles.formLabel}>Gender</label>
                        <label className={styles.radio}>Male
                            <input type='radio' id='gender' name='gender' defaultChecked={location.state.user.gender === 'Male'} value='Male' />
                            <span className={styles.checkmark}></span>
                        </label>
                        <label className={styles.radio}>Female
                            <input type='radio' id='gender' name='gender' defaultChecked={location.state.user.gender === 'Female'} value='Female' />
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                    <div className={styles.mb5}>
                        <label htmlFor="address" className={styles.formLabel}>Address</label>
                        <textarea
                            name="address"
                            id="address"
                            placeholder="Address"
                            defaultValue={location.state.user.address}
                            className={styles.formInput} />
                    </div>
                    <div>
                        <button className={styles.formBtn}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;