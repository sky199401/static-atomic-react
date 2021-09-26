import * as React from "react";

import { StoreInfo, Identity } from "../data.d";

interface Props {
    storeInfo: StoreInfo;
}

/**
 * 获取标识路径
 * @param identity 标识
 * @returns 标识路径
 */
function getIdentitySrc(identity: number): string {
    return identity === Identity.SELECTION
        ? "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=c2e2bbb7a40f4bfb88d09956334e788f/4d086e061d950a7b42e89aec0ad162d9f2d3c93d.jpg"
        : "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=bb1d73d378310a55c024d9f687454387/f3d3572c11dfa9ecc638bf3763d0f703918fc1f8.jpg";
}

/**
 * 卡片信息视图
 * @param param0 卡片信息
 * @returns 卡片信息视图
 */
export default function CardInfo<T extends Props>({ storeInfo }: T) {
    return (
        <section className="bg-white rounded-4 flex">
            {/* 左侧 */}
            <section className="w-100 h-100 relative">
                <img
                    src={storeInfo.logo}
                    className="w-100 h-100 object-cover rounded-l-4"
                />
                <img
                    src={getIdentitySrc(storeInfo.identity)}
                    className="w-72 h-18 absolute top-0 left-0 rounded-l-4"
                />
            </section>

            {/* 右侧 */}
            <section className="p-12 flex-1">
                <span className="truncate leading-24 max-w-219 text-15 font-semibold">
                    {storeInfo.name}
                </span>
                <div className="flex items-center mt-12">
                    <img
                        src="https://i.ibb.co/BcbMw7F/ic-time-3x.png"
                        className="h-13 w-13 mr-2"
                    />
                    <span className="leading-17 text-12 font-normal text-gray-400">
                        {storeInfo.time}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between mt-6">
                    <div className="flex items-center">
                        <img
                            src="https://i.ibb.co/FJf5FWc/ic-loaction-3x.png"
                            className="h-13 w-13 mr-2"
                        />
                        <span className="max-w-168 truncate leading-17 text-12 font-normal text-gray-400">
                            {storeInfo.address}
                        </span>
                    </div>
                    <span className="leading-17 text-12 font-normal text-gray-600">
                        {storeInfo.distance}
                    </span>
                </div>
            </section>
        </section>
    );
}
