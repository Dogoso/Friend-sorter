import { atom } from "recoil";

export const participantes = atom<string[]>({
    key: "participantes",
    default: []
})

export const errorMessage = atom<string | null>({
    key: "errorMessage",
    default: null
})