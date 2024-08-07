import { setContact } from "../redux/slice/conatctSlice";
import { store } from "../redux/store";
import { ROUTES } from "../utils/apiRoutes";
import baseService from "./baseService";

export const contactUsService = async () => {
    try {
        const res = await baseService.get(ROUTES.CONTACT.CONTACTUS);
        store.dispatch(setContact(res.data.data))
        return res.data;
    } catch (err) {
        return err;
    }
};