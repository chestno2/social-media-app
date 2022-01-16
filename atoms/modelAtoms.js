import { atom } from "recoil"
const ModalState = atom({
    key: 'modalState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export { ModalState }