import { moderateScale } from "./scaling"

export const PADDING = {
    XS:moderateScale(8),
    SM:moderateScale(12),
    RG:moderateScale(14),
    MD:moderateScale(18),
    LG:moderateScale(24),
    XL:moderateScale(32)
}

export const MARGIN = {
    ...PADDING
}