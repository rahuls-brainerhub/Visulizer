import { setInquiry, setPackage } from "../redux/slice/ourServiceSlice";
import { store } from "../redux/store";
import { ROUTES } from "../utils/apiRoutes";
import baseService from "./baseService";

export const inquiryService = async (userData) => {
    try {
        const res = await baseService.post(ROUTES.SERVICES.INQUIRY, userData);
        store.dispatch(setInquiry(res.data.data))
        return res.data;
    } catch (err) {
        return err;
    }
};
export const packageService = async () => {
    try {
        const res = await baseService.get(ROUTES.SERVICES.PACKAGES);
        console.log(res)
        store.dispatch(setPackage(res.data.data))
        return res.data;
    } catch (err) {
        return err;
    }
};