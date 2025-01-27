import React from 'react'
import "./ContactPageHp.css"

export default function ContactPageHp() {
    return (
        <div className="contact-page">
            <div className="contact-details">
                <ul>
                    <li><span>📞 PHONE :</span> +91 0000000000, +91 0000000000</li>
                    <li><span>📧 EMAIL :</span> example@gmail.com</li>
                    <li><span>📍 ADDRESS :</span> Wadgaon Sheri, Pune-411014</li>
                </ul>
            </div>
            <form className="contact-form">
                <div className="form-row">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="submit-btn">Send Now!</button>
            </form>
        </div>
    )
}