export interface BannerInfo {
    // banner图片
    banner: string;
}

// 信息
export interface StoreInfo {
    /**
     * Id
     */
    id: string;

    /**
     * 名称
     */
    name: string;

    /**
     * 营业时间
     */
    time: string;

    /**
     * Logo
     */
    logo: string;

    /**
     * 地址
     */
    address: string;

    /**
     * 标识（0:普通 1:精选、2:甄选）
     */
    identity: Identity;

    /**
     * 距离
     */
    distance: string;
}

// 标识
export enum Identity {
    // 0:普通
    COMMON = 0,
    // 1:精选
    SELECTION = 1,
    // 2:甄选
    FEATURED = 2,
}

export interface StoreData {
    banner: BannerInfo[];
    list: StoreInfo[];
}
