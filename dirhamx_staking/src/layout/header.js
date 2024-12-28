
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectButton } from "../component/connect-button";
const bgStyle = true;
const Header = () => {
    return (
        <div className="relative h-20">
            <div className="absolute gap-2 h-20 justify-between w-full items-center z-10 px-10 flex">
                <div className="flex items-center">
                    <img src="/asset/Logo.png" width="140px" height="24px" />
                </div>
                <div className="w-[227px] ">
                    <ConnectButton label={"Connect Wallet"} showBalance={false} />
                </div>
            </div>
            <img
                src={bgStyle?"/asset/mainBG.png":"/asset/mainBGLight.png"}
                style={{ width: '100%', height: '100vh' }}
                className="absolute left-0 top-0"
            />

        </div>
    )
}
export default Header;