import { ArrowUpNarrowWide, User } from 'lucide-react'
import React from 'react'
import userIcon from '../../assets/user-icon.svg'
import revenueIcon from '../../assets/revenue-icon.svg'
import tickIcon from '../../assets/tick.svg'
import handIcon from '../../assets/hand.svg'
const Statcard = () => {
    return (
        <>
            <div className="stat-container grid grid-cols-4 gap-2 mt-4">

                <div className="relative p-3 text-white overflow-hidden rounded-lg
                    border border-white/10
                    bg-gradient-to-br from-[#151b28] to-[#151b28]
                    shadow-[0_4px_25px_rgba(0,0,0,0.3)]">

                    <div className="absolute -bottom-12 -right-20
                        h-36 w-36 rounded-full
                        bg-orange-500/90 blur-[55px]" />

                    {/* Your stat card content */}

                    <div className="container-1 flex items-center gap-2">
                        <img src={userIcon} alt="user-icon" className='w-13 h-13' />
                        <div className="content">
                            <p className="text-xl  font-medium">Total clients</p>
                            <p className="text-lg text-gray-300 font-semibold">120</p>
                            <p className="text-xs text-gray-300 flex items-center gap-1"><span><ArrowUpNarrowWide size={12} className="text-emerald-600" /></span>20%</p>
                        </div>
                    </div>


                </div>



                <div className="relative p-3 text-white overflow-hidden rounded-lg
                    border border-white/10
                    bg-gradient-to-br from-[#151b28] to-[#151b28]
                    shadow-[0_4px_25px_rgba(0,0,0,0.3)]">

                    <div className="absolute -bottom-12 -right-20
                        h-36 w-36 rounded-full
                        bg-violet-500/90 blur-[55px]" />

                    {/* Your stat card content */}

                    <div className="container-1 flex items-center gap-2">
                        <img src={handIcon} alt="user-icon" className='w-13 h-13' />
                        <div className="content">
                            <p className="text-xl  font-medium">Active Deals</p>
                            <p className="text-lg text-gray-300 font-semibold">120</p>
                            <p className="text-xs text-gray-300 flex items-center gap-1"><span><ArrowUpNarrowWide size={12} className="text-emerald-600" /></span>20%</p>
                        </div>
                    </div>

                </div>
                


                <div className="relative p-3 text-white overflow-hidden rounded-lg
                    border border-white/10
                    bg-gradient-to-br from-[#151b28] to-[#151b28]
                    shadow-[0_4px_25px_rgba(0,0,0,0.3)]">

                    <div className="absolute -bottom-12 -right-20
                        h-36 w-36 rounded-full
                        bg-emerald-500/90 blur-[55px]" />

                    {/* Your stat card content */}

                    <div className="container-1 flex items-center gap-2">
                        <img src={revenueIcon} alt="user-icon" className='w-13 h-13' />
                        <div className="content">
                            <p className="text-xl  font-medium">Total revenue</p>
                            <p className="text-lg text-gray-300 font-semibold">120</p>
                            <p className="text-xs text-gray-300 flex items-center gap-1"><span><ArrowUpNarrowWide size={12} className="text-emerald-600" /></span>20%</p>
                        </div>
                    </div>

                </div>

                <div className="relative p-3 text-white overflow-hidden rounded-lg
                    border border-white/10
                    bg-gradient-to-br from-[#151b28] to-[#151b28]
                    shadow-[0_4px_25px_rgba(0,0,0,0.3)]">

                    <div className="absolute -bottom-12 -right-20
                        h-36 w-36 rounded-full
                        bg-blue-500/90 blur-[55px]" />

                    {/* Your stat card content */}

                    <div className="container-1 flex items-center gap-2">
                        <img src={tickIcon} alt="user-icon" className='w-13 h-13' />
                        <div className="content">
                            <p className="text-xl  font-medium">Closed Deals</p>
                            <p className="text-lg text-gray-300 font-semibold">120</p>
                            <p className="text-xs text-gray-300 flex items-center gap-1"><span><ArrowUpNarrowWide size={12} className="text-emerald-600" /></span>20%</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Statcard
