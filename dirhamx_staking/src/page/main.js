
const Main = () => {
    return (
        <>
            <div className="w-full mt-40 place-items-center">
                <div className="flex gap-[20px] relative z-30">
                    <div className="px-5 bg-[#8CF579]/20 w-[285px] h-[124px] rounded-lg flex flex-col place-content-center">
                        <p className="text-white/60 font-bold text-lg">All Staked Token</p>
                        <p className="text-white text-5xl">0</p>
                    </div>
                    <div className="px-5 bg-[#8CF579]/20 w-[285px] h-[124px] rounded-lg flex flex-col place-content-center">
                        <p className="text-white/60 font-bold text-lg">Staked Time</p>
                        <p className="text-white text-5xl">0</p>
                    </div>
                    <div className="px-5 bg-[#8CF579]/20 w-[285px] h-[124px] rounded-lg flex flex-col place-content-center">
                        <p className="text-white/60 font-bold text-lg">Your Staked Token</p>
                        <p className="text-white text-5xl">0</p>
                    </div>
                    <div className="px-5 bg-[#8CF579]/20 w-[285px] h-[124px] rounded-lg flex flex-col place-content-center">
                        <p className="text-white/60 font-bold text-lg">Your Reward Token</p>
                        <p className="text-white text-5xl">0</p>
                    </div>
                </div>
                <div className="flex gap-[20px] m-5 relative z-30">
                    <div className="h-96 w-[590px] border border-1 border-white rounded-xl bg-white/20 p-5">
                        <p className="text-3xl text-white font-bold">Your Token</p>
                        <div className="mt-3 flex w-full gap-4">
                            <img src="/asset/Sign.png" width="60px" height="40px" />
                            <p className="text-white text-5xl">0</p>
                        </div>
                        <div className="w-full mt-20 gap-1 flex flex-col">
                            <p className="text-white font-semibold text-lg">Total Amount</p>
                            <input className="w-full h-10 rounded-lg outline-none border-none text-white px-3 border border-1 bg-[#181818]" type="number" />
                        </div>
                        <button className="bg-[#8CF579] w-full h-10 rounded-full mt-10">
                            Wallet Connect
                        </button>
                    </div>
                    <div className="h-96 w-[590px] border border-1 border-white rounded-xl bg-white/20 p-5">
                        <p className="text-3xl text-white font-bold">Reward Token</p>
                        <div className="mt-3 flex w-full gap-4">
                            <img src="/asset/Sign.png" width="60px" height="40px" />
                            <p className="text-white text-5xl">0</p>
                        </div>
                        <div className="w-full mt-20 gap-1 flex flex-col">
                            <p className="text-white font-semibold text-lg">Claim Amount</p>
                            <input className="w-full h-10 rounded-lg outline-none border-none text-white px-3 border border-1 bg-[#181818]" type="number" />
                        </div>
                        <button className="bg-[#8CF579] w-full h-10 rounded-full mt-10">
                            Wallet Connect
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;