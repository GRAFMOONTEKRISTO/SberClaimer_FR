import React from "react";
import classes from './ProfileInfo.module.css'; // classes - 14 урок


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.widthIMG}>
            <img src="https://phonoteka.org/uploads/posts/2021-06/1624646813_1-phonoteka_org-p-sberbank-oboi-krasivo-1.jpg" alt="фоновая img"/>
            </div>

            <div className={classes.descriptionBlock}>
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/6e3d749f-19d2-4029-9c6b-05e859aecfd5/180" alt="мини-img"/>
            </div>
        </div>
    );
}

export default ProfileInfo;