import { atom } from "recoil";

export const participantes = atom<String[]>({
    key: "participantes",
    default: []
})

export const errorMessage = atom<String | null>({
    key: "errorMessage",
    default: null
})