import { useRecoilValue } from "recoil"
import { errorMessage } from "State/atom"

const useGetErrorMessage = () => {
    const curErrorMessage = useRecoilValue(errorMessage)
    return curErrorMessage
}

export default useGetErrorMessage