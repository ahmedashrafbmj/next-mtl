import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../../repositories/baseUrl'
import axios from 'axios'
import { Divider } from 'antd'

export default function ExecutiveLeader() {
    const [Data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        // dispatch(startloader())
        axios({
            method: 'get',
            url: `${baseUrl.Base_Url}/executive/teams`,
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
        <div className="categories content-area-8 bg-grea-3">
            <div className="container">
                {/* Main title */}
                <div className="main-title">
                    <h1>The executive team</h1>
                </div>
                <div className="row wow justify-content-center">
                    {Data.map((e,i) => (
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
