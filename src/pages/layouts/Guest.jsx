import { Header } from '../../components/Header/index.jsx'

export const Guest = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}