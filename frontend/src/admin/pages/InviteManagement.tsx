import React, { useEffect, useState } from "react";
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import api from "../../shared/services/api";
import {
    Container,
    Content,
    Title,
    InviteSection,
    InviteLink,
    TableContainer,
    Table,
} from "./InviteManagement.style";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    created_at: string;
}

const InviteManagement: React.FC = () => {
    const [invitedUsers, setInvitedUsers] = useState<User[]>([]);
    const [inviteLink, setInviteLink] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvitedUsers = async () => {
            try {
                const response = await api.get("/users/invites");
                setInvitedUsers(response.data);
            } catch (error) {
                console.error("Error fetching invited users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInvitedUsers();

        // Generate invite link based on current user ID
        // We need to decode the token or get user info from somewhere.
        // Assuming we can get it from local storage or an API call.
        // For now, let's fetch the current user profile.
        const fetchProfile = async () => {
            try {
                // Assuming we have an endpoint to get current user profile or we decode token
                // If not, we might need to rely on what we have.
                // Let's assume we can get the ID from the token stored in localStorage
                const token = localStorage.getItem("token");
                if (token) {
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    const payload = JSON.parse(jsonPayload);

                    const origin = window.location.origin;
                    setInviteLink(`${origin}/#/register?ref=${payload.id}`);
                }
            } catch (e) {
                console.error("Error decoding token", e);
            }
        }
        fetchProfile();

    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <Title>Gerenciar Movimento</Title>

                <InviteSection>
                    <h2>Seu Link de Convite</h2>
                    <p>Compartilhe este link para convidar novos membros:</p>
                    <InviteLink>{inviteLink || "Carregando link..."}</InviteLink>
                </InviteSection>

                <Title>Usuários Convidados</Title>
                <TableContainer>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Data de Cadastro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={3}>Carregando...</td>
                                </tr>
                            ) : invitedUsers.length > 0 ? (
                                invitedUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.firstName} {user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3}>Nenhum usuário convidado ainda.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </TableContainer>
            </Content>
            <Footer />
        </Container>
    );
};

export default InviteManagement;
