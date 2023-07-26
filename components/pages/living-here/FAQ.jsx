import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function FAQ() {
    return (
        <div className="categories content-area-4 bg-grea">
            <div className='container'>
                {/* Main title */}
                <div className="main-title">
                    <h3>FAQ</h3>
                    <h1>You have Questions, We have Answers</h1>
                </div>
                <div className="row wow">
                    <div className="col-md-12">
                        <Collapse defaultActiveKey={['1']} expandIconPosition={"end"} accordion>
                            <Panel header="How do I make rent payments?" key="1">
                                <p>Rent payment options are readily available through your resident portal, which may be accessed from a computer or smart phone. To set up a one-time ACH, Debit, or Credit Card payment, sign into the Resident Portal. </p>
                                <p className='pt-2'>Contact your leasing team for assistance if you need to make a payment with cash, a personal check, or a money order. We&apos;re prepared to assist.</p>
                            </Panel>
                            <Panel header="Do you provide a range of payment options?" key="2">
                                <p>Yes. Our joint venture with Flex enables you to divide your monthly rent payment into several smaller ones. You can create flexible payment plans as a Flex member, arrange payments to coincide with milestone occasions, and even improve your credit while making rent payments. There is a membership cost for Flex. To learn more, download the app at http://bit.ly/Getflex.</p>
                            </Panel>
                            <Panel header="Do you accept pets?" key="3">
                                <p>Yes. We encourage pets in our neighbourhood. We will walk you through any rules, limitations, associated pet fees, or additional pet rent during the application process. Our leasing staff can also provide a wealth of information on nearby off-leash areas, city parks, and pet-friendly establishments.</p>
                            </Panel>
                            <Panel header="Do you allow cigarette smoking?" key="4">
                                <p>Some Balance On Life communities have signed the Pure Air Pledge, pledging to ban smoking from public spaces and inside residential buildings. The Pure Air Pledge gives residents of Balance On Life communities a cleaner, greener, and more comfortable way of life. By banning smoking, we reduce the risk of fires while also enhancing air quality and maintaining a clean, fresh environment.</p>
                                <p className='pt-2'>Balance On Life is devoted to delivering a beneficial lifestyle for all members of our communities. Up to 65% of the air in an apartment community is shared, meaning that even smoking inside your own flat, might severely influence others inside your community.</p>
                                <p className='pt-2'>Smoking is no longer permitted inside of any Balance On Life Communities that have signed the Pure Air Pledge, whether in private residences or public spaces. A Pure Air Pledge lease addendum will be a part of every new lease in these communities, and it will apply to all residents as well as all visitors and staff.</p>
                            </Panel>
                            <Panel header="What happens if something is broken or damaged, and how do I call for maintenance?" key="5">
                                <p>Requesting maintenance has never been simpler. Balance On Life provides a straightforward on-the-go maintenance option that works directly from your own device. Using your computer or smart phone, it&apos;s simple to submit requests, monitor statuses, and stay connected.</p>
                                <p className='pt-2'>Have a problem? Within the app, take a picture to quickly create a maintenance request. You can always check the status of each request and the most recent activity. Please rate your experience and let us know how we did after your service.</p>
                                <p className='pt-2'>When you move in, you&apos;ll receive an email inviting you to join our community. You only need to accept the invitation or download the app to get started.</p>
                            </Panel>
                            <Panel header="Lease Renewals: What Happens When My Lease Expires?" key="6">
                                <p>We&apos;re happy you&apos;ll be staying. We&apos;ll send you a renewal offer before it&apos;s time to provide notice on your expiring lease so you have plenty of time to consider your alternatives. The offer comprises various leasing terms at various prices, allowing you to choose the one that best suits your needs. This is also an excellent moment to update roommates, pets, parking, or add other facilities like storage (if available). Select the renewal option you want to proceed with by logging into the resident portal, and we&apos;ll start working on your new lease documents right away. When your new lease documents are prepared for signing in the resident portal, we&apos;ll let you know.</p>
                                <p className='pt-2'>Need a better option or more room? Contact our leasing staff, and we&apos;ll assist you in finding a new home that perfectly suits your needs.</p>
                                <p className='pt-2'>Now what? We&apos;re here to ensure a seamless transition during your move. Reach out to our leasing team and we can guide you through the process, including details on the required written notice period and move-out checklists to keep things humming along.</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
