import React from "react";
import XBOXBANNER from '../../public/images/banner/xbox-banner.jpeg'
import NINTENDOBANNER from '../../public/images/banner/nintendo-banner.jpg'
import PSBANNER from '../../public/images/banner/playstation-banner.png'

export default function Banner(){
    return(
        <div className="grid grid-cols-12 gap-2 tablet:gap-4 py-4 px-4">
            <div className="col-span-12 desktop:col-span-7">
                <img
                    src={PSBANNER.src}
                    className="tablet:h-72 w-full desktop:h-desktopBanner object-fill rounded betterhover:cursor-pointer"
                />
            </div>
            <div className="col-span-12 grid grid-cols-2 gap-2 tablet:gap-4 desktop:block desktop:col-span-5">
                <img
                    src={XBOXBANNER.src}
                    className="h-40 tablet:h-52 desktop:h-60 object-cover w-full rounded mb-4 betterhover:cursor-pointer"
                />
                <img
                    src={NINTENDOBANNER.src}
                    className="h-40 tablet:h-52 desktop:h-60 object-cover rounded betterhover:cursor-pointer"
                />
            </div>
        </div>
    )
}