import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function Leasing101FAQ() {
    return (
        <div className="categories content-area-4 bg-grea">
            <div className='container'>
                {/* Main title */}
                <div className="main-title">
                    <h3>FAQ</h3>
                    <h1>YOU HAVE QUESTIONS. WE HAVE THE ANSWERS.</h1>
                </div>
                <div className="row wow">
                    <div className="col-md-12">
                        <Collapse defaultActiveKey={['1']} expandIconPosition={"end"} accordion>
                            <Panel header="What is a lease term?" key="1">
                                <p>Your lease&apos;s term is the length of time it is in effect. Apartment leases are frequently available for terms of 6, 12, or 18 months. The lease term alternatives should be discussed with the on-site leasing team because this can vary each community.</p>
                                <p className="pt-2">The lease rate frequently varies depending on the term&apos;s length, with higher costs for shorter lease terms.</p>
                                <p className="pt-2">The length of your lease is determined by a number of variables and is depending on your individual circumstances. If you are new to an area, you might think about signing a lease for a shorter period of time while you determine which community or neighbourhood best fits your lifestyle. To lock in that lease rate for an extended period, you might think about signing a longer lease.</p>
                                <p className="pt-2">Your lease&apos;s term is the length of time it is in effect. Apartment leases are frequently available for terms of 6, 12, or 18 months. The lease term alternatives should be discussed with the on-site leasing team because this can vary each community.</p>
                            </Panel>
                            <Panel header="What is a Guarantor?" key="2">
                                <p>Definition of a guarantor: A person who consents to financially support and assume responsibility for a tenant.</p>
                                <p className="pt-2">For tenants who don&apos;t have enough money or credit to qualify on their own, guarantors are often needed. The Guarantor is obligated to pay the rent in the event that the Tenant is unable to do so for whatever reason. Typically, a Guarantor must have verified income of at least six times the monthly market rent and meet defined work and credit history requirements. Guarantors submit their contact information, but do not need to reside in the same apartment community as the person signing the lease.</p>
                            </Panel>
                            <Panel header="What steps should I take in order to find a roommate?" key="3">
                                <p>It can be hard to find a reliable roommate, some communities offer a roommate matching service to help pair you with your perfect match. During your application process you will be asked to complete a roommate questionnaire to provide the leasing team with insights on your living and working or study habits. This data is utilized to make the best roommate matching decisions available.</p>
                            </Panel>
                            <Panel header="What is the cost of an apartment application?" key="4">
                                <p>For processing your application, the majority of multifamily complexes require a nonrefundable application fee. These charges differ based on the state you reside in and the price of any necessary credit and/or background checks. Application fees typically range from $50 to $75.</p>
                            </Panel>
                            <Panel header="A security deposit is what?" key="5">
                                <p>A security deposit is a sum paid on top of your monthly rent that is normally payable upon signing your lease agreement. Communities collect this to pay for any property damage or wear and tear. These costs are determined by the state in where you reside, a credit check, the type of neighbourhood, and the property.</p>
                                <p className='pt-2'>Refundable or non-refundable security deposits are available to Balance On Life residents.</p>
                            </Panel>
                            <Panel header="What extras are there in an apartment that cost money?" key="6">
                                <p>The cost of amenities varies depending on the community and the services offered. For the use and maintenance of amenities like the fitness centre and pool, some communities will charge a small fee at move-in.</p>
                                <p className='pt-2'>Amenity fees at Balance On Life communities vary, but may include the following:</p>
                                <ul className='pt-2' style={{ listStyle: "inside" }}>
                                    <li>A number of cities provide door-to-door pickup options through Valet Waste Service. To find out if this amenity will be a part of your experience at our Balance On Life complex, please get in touch with an onsite leasing agent.</li>
                                    <li>Several Balance On Life communities offer detached garages and storage options. These rentals have a monthly fee, which varies depending on the property.</li>
                                    <li>Additional Valet Services - Some Balance On Life Communities may charge an additional fee for additional valet services like dry cleaning, dog walking, house sitting, and housekeeping.</li>
                                </ul>
                                <p className='pt-2'>To find out more about the costs associated with a particular community and the add-on amenity choices available, get in touch with our on-site leasing team.</p>
                            </Panel>
                            <Panel header="What are the rules for apartment parking?" key="7">
                                <p>Apartment parking options include attached and detached garages, off-street and covered parking, and parking garage alternatives. Depending on the neighbourhood, parking can occasionally be free and may even include guest parking. It’s better to contact directly with a leasing representative to determine parking prices for your selected community.</p>
                            </Panel>
                            <Panel header="What are covered by pet rent in apartments?" key="8">
                                <p>Apartments and houses that allow pets frequently charge a pet fee or deposit to compensate the extra wear and tear on your residence. Your pet&apos;s damages are your responsibility to pay for, and your security deposit might not always be enough to cover them. To prevent your pet from causing harm, make sure they are well-cared for and trained.</p>
                                <p className="pt-2">Some communities may require tenants to pay monthly pet rent in addition to a pet deposit. If you have pets, it is essential to discuss the details with the on-site leasing team because pet fees vary by property and the number of animals in the residence.</p>
                                <p className="pt-2">If you have a service animal or emotional support animal, please inform the on-site leasing staff as these animals are not regarded as &quot;pets&quot; and are not subject to the same regulations.</p>
                            </Panel>
                            <Panel header="What breed restrictions apply to apartment pet policies?" key="9">
                                <p>Even though more and more apartments now allow pets, many neighbourhoods have breed limitations. Breed restrictions are typically implemented to prevent property damage. These limitations forbid animals based on their age, size, and weight. Because every community is unique, talk to the on-site leasing staff about any breed restrictions or specifics regarding the pet policy.</p>
                            </Panel>
                            <Panel header="A lease renewal is what?" key="10">
                                <p>You can avoid the additional stress of looking for, locating, and moving into a new place by renewing your apartment lease. Completing a lease renewal guarantees that you can stay in the same apartment or space for another lease term because apartments or bed spaces are subject to availability.</p>
                                <p className="pt-2">Since a lease renewal effectively constitutes a new lease, your rent can increase. In light of this, now could be a good time to ask your leasing representative about available floor plan upgrades or required renovations to make your stay more pleasant.</p>
                                <p className="pt-2">Please carefully read your new lease. Most houses require 30 to 60 day&apos;s notice if you plan to leave your existing neighbourhood.</p>
                            </Panel>
                            <Panel header="What occurs if a lease is broken?" key="11">
                                <p>You commit to paying rent until the conclusion of the lease period when you sign a lease. You can be responsible for termination costs and any outstanding rent if you vacate your unit before the end of your lease term. You&apos;ll probably lose your security deposit as well. Aside from the monetary cost, breaking a lease can harm your credit score, which could make it more challenging for you to get a loan, credit card, or apartment in the future.</p>
                                <p className="pt-2">Before making a decision, it is best to carefully read your lease agreement. Consult the leasing staff on-site to go over your alternatives.</p>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
