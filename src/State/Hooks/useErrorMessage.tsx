import { useSetRecoilState } from "recoil"
import { errorMessage } from "State/atom"

const useErrorMessage = () => {
    const setErrorMessage = useSetRecoilState(errorMessage)
    return (errorMessage: string | null) => {
        setErrorMessage(errorMessage)
    }
}

export default useErrorMessage