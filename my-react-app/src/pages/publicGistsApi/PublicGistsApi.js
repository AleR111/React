import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getPublicGists} from "../../store/publicGists/thunks";


export const PublicGistsApi = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPublicGists())
    },[dispatch])

return null
}