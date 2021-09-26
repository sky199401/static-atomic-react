import * as React from "react";

import CardInfo from "./components/cardInfo";
import { mockStoreInfo } from "./_mock";
import { StoreData } from "./data";

/**
 * 首页
 */
export default function IndexPage() {
    const [featuredStore] =
        React.useState<{ code: number; data: StoreData }>(mockStoreInfo);
    const { banner = [], list = [] } = featuredStore.data;

    return (
        <section className="min-h-screen bg-gray-100">
            {/* Banner */}
            <section className="pt-14 pb-12 px-16 bg-white">
                <img className="h-78 w-full rounded-6" src={banner[0].banner} />
            </section>

            {/* 店铺列表 */}
            <section className="px-16">
                {list.map((item) => {
                    return (
                        <section className="mt-12" key={item.id}>
                            <CardInfo
                                {...{
                                    storeInfo: item,
                                }}
                            />
                        </section>
                    );
                })}
            </section>
        </section>
    );
}
