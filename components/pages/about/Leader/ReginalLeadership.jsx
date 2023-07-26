// import React from 'react'

// export default function RegionalLeader() {
//     return (
//         <div className="categories content-area-8 bg-grea-3">
//             <div className="container">
//                 {/* Main title */}
//                 <div className="main-title">
//                     <h1>Regional Management</h1>
//                 </div>
//                   <div className="row wow justify-content-center">
//                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                     <div class="team-2" >
//                         <div class="team-photo">
//                             <img src="/img/About/leadership/5.jpg" alt="agent-2" class="img-fluid"/>
//                         </div>
//                         <div class="team-details">
//                             <h6>Support Manager</h6>
//                                 <h6><b>Vice President, Business Performance Systems</b></h6>
//                             <h5><a href="agent-detail.html">Karen Paran</a></h5>
//                             <div class="contact">
//                                 <p>
//                                     <a href="mailto:info@themevessel.com"><i class="fa fa-envelope-o"></i>info@themevessel.com</a>
//                                 </p>
//                                 <p>
//                                     <a href="tel:+554XX-634-7071"> <i class="fa fa-phone"></i>+55 4XX-634-7071</a>
//                                 </p>
//                                 <p>
//                                     <a href="#"><i class="fa fa-skype"></i>sales.carshop</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                     <div class="team-2" >
//                         <div class="team-photo">
//                             <img src="/img/About/leadership/6.jpg" alt="agent-2" class="img-fluid"/>
//                         </div>
//                         <div class="team-details">
//                             <h6>Support Manager</h6>
//                                 <h6><b>Vice President, Business Performance Systems</b></h6>
//                             <h5><a href="agent-detail.html">Karen Paran</a></h5>
//                             <div class="contact">
//                                 <p>
//                                     <a href="mailto:info@themevessel.com"><i class="fa fa-envelope-o"></i>info@themevessel.com</a>
//                                 </p>
//                                 <p>
//                                     <a href="tel:+554XX-634-7071"> <i class="fa fa-phone"></i>+55 4XX-634-7071</a>
//                                 </p>
//                                 <p>
//                                     <a href="#"><i class="fa fa-skype"></i>sales.carshop</a>
//                                 </p>
//                             </div>
//                         </div>


//                     </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                     <div class="team-2" >
//                         <div class="team-photo">
//                             <img src="/img/About/leadership/7.jpg" alt="agent-2" class="img-fluid"/>
//                         </div>
//                         <div class="team-details">
//                             <h6>Support Manager</h6>
//                                 <h6><b>Vice President, Business Performance Systems</b></h6>
//                             <h5><a href="agent-detail.html">Karen Paran</a></h5>
//                             <div class="contact">
//                                 <p>
//                                     <a href="mailto:info@themevessel.com"><i class="fa fa-envelope-o"></i>info@themevessel.com</a>
//                                 </p>
//                                 <p>
//                                     <a href="tel:+554XX-634-7071"> <i class="fa fa-phone"></i>+55 4XX-634-7071</a>
//                                 </p>
//                                 <p>
//                                     <a href="#"><i class="fa fa-skype"></i>sales.carshop</a>
//                                 </p>
//                             </div>
//                         </div>


//                     </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                     <div class="team-2" >
//                         <div class="team-photo">
//                             <img src="/img/About/leadership/8.jpg" alt="agent-2" class="img-fluid"/>
//                         </div>
//                         <div class="team-details">
//                             <h6>Support Manager</h6>
//                                 <h6><b>Vice President, Business Performance Systems</b></h6>
//                             <h5><a href="agent-detail.html">Karen Paran</a></h5>
//                             <div class="contact">
//                                 <p>
//                                     <a href="mailto:info@themevessel.com"><i class="fa fa-envelope-o"></i>info@themevessel.com</a>
//                                 </p>
//                                 <p>
//                                     <a href="tel:+554XX-634-7071"> <i class="fa fa-phone"></i>+55 4XX-634-7071</a>
//                                 </p>
//                                 <p>
//                                     <a href="#"><i class="fa fa-skype"></i>sales.carshop</a>
//                                 </p>
//                             </div>
//                         </div>


//                     </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }



import { Divider } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../../repositories/baseUrl'

export default function RegionalLeader() {
    const [Data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        // dispatch(startloader())
        axios({
            method: 'get',
            url: `${baseUrl.Base_Url}/balance/teams`,
            // headers: { Authorization: `Bearer ${Token}` },
        }).then(function (response) {
            // dispatch(stoploader())
            const Data = response.data
            if (Data.status) {
                setData(Data.data)
            }
            // else {
            //     openNotificationWithIcon("warning", "Opps", Data.message);
            // }
        }).catch((error) => {
            // const Err = error.response
            // dispatch(stoploader())
            // if (Err !== undefined) {
            //     if (Err.data.errors) {
            //         const Data = Err.data.errors;
            //         const ErrList = Object.keys(Data);
            //         ErrList.map((e) => {
            //             openNotificationWithIcon("warning", "Opps", Data[e][0]);
            //         });
            //     } else {
            //         openNotificationWithIcon("error", "Opps", Err.data.message);
            //         if (Err.data.message === "Unauthenticated.") {
            //             // dispatch(authLogout());
            //             navigate('/admin/login')
            //         }
            //     }
            // } else {
            //     openNotificationWithIcon("error", "Opps", error.message);
            // }
        });
    }
    return (
        <div className="categories content-area-8">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h1>The balance team</h1>
                </div>
                <div className="row wow justify-content-center">
                    {Data.map((e, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="team-2" >
                                <div class="team-photo">
                                    <img src={baseUrl.Image_url + e.image_path} alt="member image" class="img-fluid mh-230" />
                                </div>
                                <Divider className='mb-0' />
                                <div class="team-details">
                                    <h5>{e.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
