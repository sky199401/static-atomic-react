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
     * 标识
     */
    identity: Identity;

    /**
     * 距离
     */
    distance: string;
}

// 标识
export enum Identity {
    COMMON = 0,
    SELECTION = 1
}

export interface StoreData {
    banner: BannerInfo[];
    list: StoreInfo[];
}
