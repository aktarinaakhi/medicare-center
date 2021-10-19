import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container my-5 contact-container">
            <div className="w-50 mx-auto contact-form">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter name" required />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" required />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn-regular mb-5">Send Message</button>
            </div>
            <div className="w-50 ms-5 mx-auto">
                <div>
                    <h2>Get in Touch</h2>
                    <p>Medicare started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service, Medicare became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country. To get any service and support from us, please contact us.</p>
                </div>
                <hr />
                <div>
                    <h2>The Office</h2>
                    <p>Address: Medicare Diagnostic Centre Ltd. (Dhanmondi Branch)
                        HOUSE # 16, ROAD # 2, DHANMONDI, DHAKA-1205.</p>
                    <p>Phone: +880 9613787801</p>
                    <p>Email: info@Medicarediagnostic.com</p>
                </div>
                <hr />
                <div>
                    <h2>Business Hours</h2>
                    <p>7 AM - 11 PM (Everyday)</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;