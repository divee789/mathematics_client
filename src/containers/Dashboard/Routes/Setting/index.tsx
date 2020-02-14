import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../../../store/actions'

import Request from '../../../../services/api-services'
import './index.scss'

const api = new Request('http://localhost:1000')
const Setting: React.FC = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState('')
    const { user } = useSelector((state: any) => state.auth)

    let profile_url
    if (user.profile_image) {
        profile_url = user.profile_image
    } else {
        profile_url = "https://res.cloudinary.com/donalpha/image/upload/v1578874197/f0wi08kf7lj3lywtev5q.jpg"
    }

    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
        setImage(file)
    }
    const uploadHandler = async () => {
        const formData = new FormData()
        formData.append('profile_image', image)
        let resData = await api.uploadProfileImage(formData)
        console.log('resData', resData)
        dispatch(update(resData))
    }
    return (
        <>
            <section className='dashboard_settings'>
                <div className="navbar">
                    <p className="title">My Account</p>
                </div>
                <div className="container">
                    <div className="scroll">
                        <div>
                            <img src={profile_url} alt="image" className='profile_image' />
                        </div>
                        <button>Change Profile Pic</button>
                        <div>
                            <input type="file" onChange={fileChangedHandler} />
                            <button onClick={uploadHandler}>Upload image</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Setting