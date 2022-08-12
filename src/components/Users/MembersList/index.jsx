import { Link } from 'react-router-dom'
import { MembersListStyled, MainActionsStyled } from './styles'
import { Section } from '../../Common/Section'
import { Button } from '../../Common/Inputs/Button'
import { FaTrash, FaPen } from 'react-icons/fa'
import { Loader } from '../../Loader'

import { useGetUsers } from '../../../hooks/users/useGetUsers'
import { useAuth } from '../../../hooks/auth/useAuth'
import { useDispatch } from 'react-redux'
import { remove } from '../../../store/slices/usersSlice'
import { useIsLoading } from '../../../hooks/app/useIsLoading'

const mapUserRole = role => {
    if (role === 'admin') return 'Administrador'
    if (role === 'member') return 'Miembro'
}

export const MembersList = () => {
    const dispatch = useDispatch()
    const users = useGetUsers()
    const isLoading = useIsLoading()
    const { user: loggedUser } = useAuth()

    const handleDelete = id => {
        dispatch(remove(id))
    }

    return (
        <Section>
            <MainActionsStyled>
                <Button as={Link} to="/admin/miembros/agregar">
                    Agregar miembro
                </Button>
            </MainActionsStyled>

            <MembersListStyled>
                {isLoading && <Loader />}

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo electrónico</th>
                            <th>Tipo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{mapUserRole(user.role?.name)}</td>
                                <td>
                                    <Link to={`/admin/miembros/${user.id}`}>
                                        <FaPen />
                                    </Link>
                                    <button
                                        disabled={user.id === loggedUser.id}
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </MembersListStyled>
        </Section>
    )
}
