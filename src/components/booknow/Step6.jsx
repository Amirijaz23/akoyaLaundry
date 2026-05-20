import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../usecontext/UseContext'
import EngTranslation from '../booknow/Translation/Eng/Step6.json'
import ArbTranslation from '../booknow/Translation/Arb/Step6.json'

const Step6 = () => {
    const { profile, setProfile } = useContext(MyContext)
    const translation=profile.language=="eng"?EngTranslation:ArbTranslation
    return (
        profile.servicePage == 6 &&
        <div className='flex flex-col gap-4'>
            <h1 className={`text-[20px] font-light ${profile.language=="eng"?"":"text-right"}`}>{translation.personalized_card.heading}
            </h1>
            <div className={`${profile.language=="eng"?"":"text-right"}`}>
                <label htmlFor="from">{translation.personalized_card.from_section.from_heading}<span className='text-red-400'>{translation.personalized_card.from_section.requirement}</span></label>
                <input type="text" placeholder={translation.personalized_card.from_section.placeholder} className={`my-2 px-4 py-3 rounded-md border   w-full ${profile.language=="eng"?"":"text-right"} ${profile.fromPerson ? "border-gray-300" : "border-red-400"}`} onChange={(e) => setProfile(prev => ({ ...prev, fromPerson: e.target.value }))} value={profile.fromPerson} />
                {
                    !profile.fromPerson &&
                    <p className='text-red-400'>{translation.personalized_card.show_message}</p>
                }
            </div>
            <div className={`${profile.language=="eng"?"":"text-right"}`}>
                <label htmlFor="to">{translation.personalized_card.to_section.to_heading}<span>{translation.personalized_card.to_section.requirement}</span></label>
                <input type="text" placeholder={translation.personalized_card.to_section.placeholder} className={`my-2 px-4 py-3 rounded-md border border-gray-300 w-full ${profile.language=="eng"?"":"text-right"} `} onChange={(e) => setProfile(prev => ({ ...prev, toPerson: e.target.value }))} value={profile.toPerson} />
            </div>
        </div>
    )
}

export default Step6
