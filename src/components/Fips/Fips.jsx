import React, {useState} from "react";
import classes from './Fips.module.css';
import axios from 'axios';

const Fips = (props) => {
    const [name, setName] = useState('');
    const [okpocode, setOkpocode] = useState('');
    const [ogrncode, setOgrncode] = useState('');
    const [inncode, setInncode] = useState('');
    const [kppcode, setKppcode] = useState('');
    const [snilscode, setSnilscode] = useState('');
    const [countryarea, setCountryarea] = useState('');
    const [countrycode, setCountrycode] = useState('');
    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');
    const [email, setEmail] = useState('');
    const [aoapplbag, setAoapplbag] = useState('');
    const [postindex, setPostindex] = useState('');
    const [fulladdress, setFulladdress] = useState('');
    const [foreignaddress, setForeignaddress] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            okpocode: okpocode,
            ogrncode: ogrncode,
            inncode: inncode,
            kppcode: kppcode,
            snilscode: snilscode,
            countryarea: countryarea,
            countrycode: countrycode,
            phone: phone,
            fax: fax,
            email: email,
            aoapplbag: aoapplbag,
            postindex: postindex,
            fulladdress: fulladdress,
            foreignaddress: foreignaddress,
        };
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        };
        try {
            const response = await axios.post
            ('http://127.0.0.1:8000/wrapper_fips/', data, {headers});
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Введите имя" className={classes.item} value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <input type="text" id="okpocode" placeholder="Введите код ОКПО" className={classes.item}
                       value={okpocode}
                       onChange={(e) => setOkpocode(e.target.value)}/>
                <input type="text" id="ogrncode" placeholder="Введите код ОГРН" className={classes.item}
                       value={ogrncode}
                       onChange={(e) => setOgrncode(e.target.value)}/>
                <input type="text" id="inncode" placeholder="Введите код ИНН" className={classes.item} value={inncode}
                       onChange={(e) => setInncode(e.target.value)}/>
                <input type="text" id="kppcode" placeholder="Введите код КПП" className={classes.item} value={kppcode}
                       onChange={(e) => setKppcode(e.target.value)}/>
                <input type="text" id="snilscode" placeholder="Введите код СНИЛС" className={classes.item}
                       value={snilscode}
                       onChange={(e) => setSnilscode(e.target.value)}/>
                <input type="text" id="countryarea" placeholder="Введите область" className={classes.item}
                       value={countryarea}
                       onChange={(e) => setCountryarea(e.target.value)}/>
                <input type="text" id="countrycode" placeholder="Введите код страны" className={classes.item}
                       value={countrycode}
                       onChange={(e) => setCountrycode(e.target.value)}/>
                <input type="text" id="phone" placeholder="Введите номер телефона" className={classes.item}
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}/>
                <input type="text" id="fax" placeholder="Введите номер факса" className={classes.item} value={fax}
                       onChange={(e) => setFax(e.target.value)}/>
                <input type="text" id="email" placeholder="Введите адрес электронной почты" className={classes.item}
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" id="aoapplbag" placeholder="Введите адрес для отправки" className={classes.item}
                       value={aoapplbag}
                       onChange={(e) => setAoapplbag(e.target.value)}/>
                <input type="text" id="postindex" placeholder="Введите почтовый индекс" className={classes.item}
                       value={postindex}
                       onChange={(e) => setPostindex(e.target.value)}/>
                <input type="text" id="fulladdress" placeholder="Введите полный адрес" className={classes.item}
                       value={fulladdress}
                       onChange={(e) => setFulladdress(e.target.value)}/>
                <input type="text" id="foreignaddress" placeholder="Введите иностранный адрес" className={classes.item}
                       value={foreignaddress}
                       onChange={(e) => setForeignaddress(e.target.value)}/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};
export default Fips;