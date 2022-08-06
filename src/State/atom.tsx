import { atom } from "recoil";

export const participantes = atom<string[]>({
    key: "participantes",
    default: []
})

export const errorMessage = atom<string | null>({
    key: "errorMessage",
    default: null
})

export const resultadoSorteio = atom<Map<string, string>>({
    key: "resultadoSorteio",
    default: new Map()
})