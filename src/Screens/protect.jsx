import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Protect(props) {
    const { Screen } = props

    const { loader, Setloader } = useState(true)

    const navigate = useNavigate()
    let checkAuth = () => {
        Setloader(true)
        let auth = true
        if (auth) {
            Setloader( false)
            
        } else {
            Setloader(false);
            navigate("/login")
        }

    }
    useEffect(() => {
        checkAuth()


    }, [])

    return loader ? <>
        <h1>Loading...</h1>
    </> :
        <Screen />
}