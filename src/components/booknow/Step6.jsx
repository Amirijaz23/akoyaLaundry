import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'

const Step6 = () => {
    const { profile, setProfile } = useContext(MyContext)
    return (
        profile.servicePage == 6 &&
        <div className='flex flex-col gap-4'>
            <h1 className='text-[20px] font-light'>Want to include a personalized card?
            </h1>
            <div>
                <label htmlFor="from">From <span className='text-red-400'>*</span></label>
                <input type="text" placeholder='Your name (required)*' className={`my-2 px-4 py-3 rounded-md border   w-full ${profile.fromPerson ? "border-gray-300" : "border-red-400"}`} onChange={(e) => setProfile(prev => ({ ...prev, fromPerson: e.target.value }))} value={profile.fromPerson} />
                {
                    !profile.fromPerson &&
                    <p className='text-red-400'>The Field is Required</p>
                }
            </div>
            <div>
                <label htmlFor="to">To (Optional)</label>
                <input type="text" placeholder="Recipient's name (Optional)" className={`my-2 px-4 py-3 rounded-md border border-gray-300 w-full  ${profile.toPerson ? "border-gray-300" : "border-red-400"}`} onChange={(e) => setProfile(prev => ({ ...prev, toPerson: e.target.value }))} value={profile.toPerson} />
                {
                    !profile.toPerson &&
                    <p className='text-red-400'>The Field is required</p>
                }
            </div>
        </div>
    )
}

export default Step6
