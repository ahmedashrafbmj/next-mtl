import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

export default function GetReadyToRentFAQ() {
    return (
        <div className="categories content-area-4 bg-grea">
            <div className='container'>
                {/* Main title */}
                <div className="main-title">
                    <h3>FAQ</h3>
                    <h1>You have inquiries. We have solutions.</h1>
                </div>
                <div className="row wow">
                    <div className="col-md-12">
                        <Collapse defaultActiveKey={['1']} expandIconPosition={"end"} accordion>
                            <Panel header="How can I locate a quality rental apartment?" key="1">
                                <p>Determine your rental budget. Your income should be at least three times your monthly rent payment. Narrow you location, consider your commute to work, resturaunts, and grocery stores. At Balance on life communities not only do we consider the ammenities we provide for you. We also consider locations that give you quicker easier access to your favorite spots. </p>
                            </Panel>
                            <Panel header="What qualities should I look for in a rental?" key="2">
                                <p>When looking for a new place to live there are many qualities to consider. Location: Make sure the location is right for you. Safety and security: Safety and security is always a priority at Balance on life communities, Parking: Balance on life communities </p>
                                <p className="pt-2">Move-in Ready condition: Balance on life communities maintain high standards of cleanliness and maintenance. Professional Management: At all balance on life communities we believe in giving our residents an experience not just a service. It is our goal to exceed all of our residents expectations by </p>

                            </Panel>
                            {/* <Panel header="In my apartment, will my furniture fit?" key="3">
                                <p>It&apos;s time to get the tape measure out! The size of your current furniture, such as your bed, dresser, nightstands, couch, coffee table, dining table, etc., should be measured.</p>
                                <p className="pt-2">Use these measurements to obtain an idea of how to arrange your furniture when you tour an apartment or look at a floor plan online. To help you assess whether your furniture will fit, consider the following general guidelines:</p>
                                <ul className="pt-2" style={{ listStyle: "inside" }}>
                                    <li>On either side of your bed, there should be at least three feet of room. Make sure to leave enough space between your dresser and the bed if you decide to put it on one side of the bed.</li>
                                    <li>About two-thirds of the length of the living room should be occupied by sofas.</li>
                                    <li>Your sofa and coffee table should be separated by eighteen inches.</li>
                                    <li>The coffee table&apos;s edge should be thirty inches away from the TV or wall in front of it.</li>
                                    <li>Your dining table chairs and the wall should be separated by thirty inches.</li>
                                </ul>
                                <p className="pt-2">If arranging your furniture in your apartment feels like putting together a huge jigsaw puzzle, take into account these suggestions:</p>
                                <ul className="pt-2" style={{ listStyle: "inside" }}>
                                    <li>To make more room in your bedroom, place your dresser inside a big closet.</li>
                                    <li>Use padded ottomans as additional seating for visitors or as coffee tables.</li>
                                    <li>Select a dining table with extendable leaves so that you can change the size.</li>
                                </ul>
                            </Panel> */}
                            <Panel header="Who can assist me in finding housing?" key="4">
                                <p>You don&apos;t have to do the apartment search by yourself. You can always get in touch with the leasing staff at a property and let them know your must-haves if you know your budget and desired neighbourhoods. They would be delighted to assist you in choosing the finest location for you. The leasing staff can walk you through the community&apos;s amenities, explain any fees, and provide you with more information about the area and living there.</p>
                            </Panel>
                            <Panel header="Can I view a virtual tour of the apartment?" key="5">
                                <p>I would be happy to show you around. Visit one of our communities virtually right now, or schedule a physical tour for a time and date that work best for you. We&apos;re here to assist you in finding the ideal location.</p>
                                <p className='pt-2'>Prepare to take a physical tour? If you are older than 18, we will walk you through the process to have your identification verified before you come. Our top priority is safety.</p>
                                <p className='pt-2'>We want to demonstrate to you what it&apos;s like to live here. We&apos;ll see model homes, amenity areas, and any move-in ready properties that fit your search criteria. From pricing and availability to pet policies and move-in schedules, our leasing team will be available to address all of your pressing inquiries. Ask them for advice on the top local eateries and stores in the neighborhood.</p>
                            </Panel>
                            <Panel header="How do I complete the application for an apartment?" key="6">
                                <p>If you require assistance along the way, we will lead you. But if a solo mission suits you better, just follow these easy instructions.</p>
                                <ul className='pt-2'>
                                    <li>Select the Balance on Life community you would like to be apart of and click apply or you can also visit our property and request an application from the property manager. Fill out the form completely.</li>
                                    <li>Anyone above the age of 18 years old is required to fill out their own individual application.</li>
                                    <li>We will need a copy of your photo I.D. and proof of income attached. Such as pay stubs or bank statements.</li>
                                    <li>Pay the application fee and submit the application and submit your application</li>
                                </ul>
                            </Panel>
                            <Panel header="What is the procedure for applying for an apartment?" key="7">
                                <p>Once we have applications from all occupants who are 18 years of age or older, we will begin the screening and approval process. </p>
                                <ul className='pt-2'>
                                    <li>A third-party screening agency that verifies:(1) household income, (2) rental history, (3) credit screening, and (4) criminal history must approve applicants before they can move forward.</li>
                                    <li>To give your rental application our final approval we might need more details. If so, we will get in touch with you via email and provide you instructions.</li>
                                    <li>The only uses for documents that are requested during this process are for screening and verification.</li>
                                </ul>
                            </Panel>
                            <Panel header="Is renters insurance necessary?" key="8">
                            <p>Yes, you must keep renters insurance current and present proof of it during the life of your lease.  </p>
                                <ul className='pt-2'>
                                    <li>In most cases, a landlord&apos;s insurance covers only structural damage to the building itself—and many landlord policies don&apos;t even go that far if the damage is caused by a tenant. If you leave the tub running and it leaks downstairs, damaging your neighbor&apos;s furniture, you may be liable for your neighbors property. If your building went up in flames, your landlord&apos;s coverage would include repairs, but only to the building, not to the possessions of tenants.</li>
                                    <li>Renter&apos;s insurance often extends beyond on-premise theft and hazards.</li>
                                </ul>                            </Panel>
                            <Panel header="What utilities are included?" key="8">
                            <p>Residents are responsible for Electric bill, water bill and such amenities as Cable T.V. ,WiFi and streaming services.  </p>
                              </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}
