import React from 'react';
import { Accordion } from 'react-bootstrap';
import image from '../../images/piron-guillaume-U4FyCp3-KzY-unsplash-removebg-preview.png'
import './Faq.css'

const Faq = () => {
    return (
        <div className="container text-center mt-5">
            <h2>Frequenty Asked <span className="span">Question</span></h2>
            <div className="faq-container my-5">
                <div className="my-5">
                    <img src={image} alt="" />
                </div>

                <div className="my-5 text-center">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What's the main purpose for this clinic?</Accordion.Header>
                            <Accordion.Body>
                                The most common type of heart surgery — the surgeon takes a healthy artery or vein from elsewhere in your body and connects it to supply blood past the blocked coronary artery.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Is there heart sugery doctor here ?</Accordion.Header>
                            <Accordion.Body>
                                Although most heart surgeries are major surgeries, they are typically not a source of long-term pain. Even in the short term, the pain may be less severe than with operations on other areas of the body. Opioids are used when necessary, but there are many other pain management options, including: Nerve blocks.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do You have use aunesthetic for patients </Accordion.Header>
                            <Accordion.Body>
                                General anesthetics make patients unconscious during the procedure while local and regional anesthetics just numb part of the body and allow patients to remain awake. Depending on the type of pain relief needed, doctors deliver anesthetics by injection, inhalation, topical lotion, spray, eye drops, or skin patch.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How does log takes the recovery time</Accordion.Header>
                            <Accordion.Body>
                                Depending on your state of health, it can be shorter or longer. An average time length that a lot of people say with an abdominal incision is about one to two months or even just six weeks to where you really want to let it heal and you try not to put too much pressure on your abdomen during that time.J
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>How can I contact you?</Accordion.Header>
                            <Accordion.Body>
                                The most common type of heart surgery — the surgeon takes a healthy artery or vein from elsewhere in your body and connects it to supply blood past the blocked coronary artery.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>

        </div>

    );
};

export default Faq;