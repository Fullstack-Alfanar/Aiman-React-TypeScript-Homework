import React, { useState } from "react"
import { isElementAccessChain } from "typescript"
import "../login/login.css"

const Login: React.FC = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [mailmessage, setMailMessage] = useState("")
    const [passwordmessage, setPasswordMessage] = useState("")

    const validations = () => {
        const passStatus = [];
        const Emailregex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (Emailregex.test(mail)) {
            setMailMessage("Vaild Mail Address")
        } else {
            setMailMessage("Invalid Mail Address")
        }
        const length = (password.length >= 8)
        if (length) {
            passStatus.push("ok")
        } else {
            passStatus.push("password leght is wrong")
        }
        const numbers = (password.match(/[0-9]/))
        if (numbers) {
            passStatus.push("ok")
        } else {
            passStatus.push("number Condition missing in the password")
        }
        const uppercase = password.match(/[A-Z]/);
        if (uppercase) {
            passStatus.push("ok")
        } else {
            passStatus.push("UperCase Condition is Missing")
        }
        const lowercase = password.match(/[a-z]/);
        if (lowercase) {
            passStatus.push("ok")
        } else {
            passStatus.push("LowerCase Condition is Missing")
        }
        const english = password.match(/^[a(/^[a-zA-Z0-9\\!\@\#\$\%\^\&\*\?\>\<\,\.\/\;\:\'\"\|\+\=\-\_\;]/);
        if (english) {
            passStatus.push("ok")
        } else {
            passStatus.push("English Condition is Missing")
        }
        const special_chara = password.match(/[`\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\.\/\'\]\[\<\>\?\"\:\ ]/);
        if (special_chara) {
            passStatus.push("ok")
        } else {
            passStatus.push("Special Character Condition is Missing")
        }
        const passing = passStatus.every(a => a == "ok")
        if (passing) {
            setPasswordMessage("Valid Password")
        } else {
            setPasswordMessage("InValid Password")
        }
        
    }

    return (
        <div className="main-container">
            <label>Enter Your Mail : </label>
            <input placeholder="mail address" type="email" onChange={(a) => setMail(a.target.value)}></input>
            <label>Enter your Password : </label>
            <input placeholder="password" type="password" onChange={(a) => setPassword(a.target.value)}></input>
            <div className="button-contanier">
                <button onClick={validations}>Send</button>
            </div>
            <div className="message-container">
                <div >
                    <label>{mailmessage}</label>
                </div>
                <div >
                    <label>{passwordmessage}</label>
                </div>
            </div>
        </div >
    )
}
export default Login
