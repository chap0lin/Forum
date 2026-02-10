
import { useState, useEffect } from 'react';
import Header from '../../../shared/components/Header';
import Footer from '../../../shared/components/Footer';
import {
    NewsContainer,
    MainContent,
    FilterSearchRow,
    SearchInput,
    FilterSelect,
    PublishButtonTop,
    NewsCard,
    NewsHeader,
    NewsTitle,
    NewsMeta,
    TagContainer,
    Tag,
    NewsContent,
    OpenDiscussionButton,
    DeleteNewsButton,
    ModalOverlay,
    ModalContent,
    DeleteConfirmModal,
    DeleteButtonGroup,
    CancelDeleteButton,
    ConfirmDeleteButton,
} from './style';
import { forumService } from '../../services/forun.services';
import type { ForumPost } from '../../types/forum-post.type';
import { usePermission } from '../../../auth/hooks/usePermission';
import type { Role } from '../../../auth/types/role.type';
import ForumPostForm from '../../components/ForumPostForm';




const ForumHome = () => {

    const userRole: Role = 'ADMIN';
    const { can } = usePermission(userRole);
    const [editingPost, setEditingPost] = useState<ForumPost | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newsToDelete, setNewsToDelete] = useState<number | null>(null);
    const [news, setNews] = useState<ForumPost[]>([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('recentes');

    const fetchNews = async () => {
        try {
            const data = await forumService.getPosts();
            setNews(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const filteredNews = news
        .filter(n => n.title.toLowerCase().includes(search.toLowerCase()))
        .filter(n => {
            if (filter === 'recentes') return true;
            if (filter === 'antigas') return true;
            if (filter === 'abertas') return n.status === 'aberto';
            if (filter === 'fechadas') return n.status === 'fechado';
            return true;
        })
        .sort((a, b) => {
            if (filter === 'recentes') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            if (filter === 'antigas') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            return 0;
        });


    const handleDeleteNews = (newsId: number) => {
        setNewsToDelete(newsId);
        setIsDeleteModalOpen(true);
    };

    const handleEditPost = (post: ForumPost) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };


    const confirmDeleteNews = async () => {
        if (newsToDelete) {
            try {
                await forumService.deletePost(newsToDelete);
                fetchNews();
                setIsDeleteModalOpen(false);
                setNewsToDelete(null);
            } catch (err) {
                console.error('Erro ao excluir notícia:', err);
                alert('Erro ao excluir notícia. Tente novamente.');
            }
        }
    };

    const cancelDeleteNews = () => {
        setIsDeleteModalOpen(false);
        setNewsToDelete(null);
    };

    const parseTags = (tagsString: string) => {
        if (!tagsString) return [];
        return tagsString.split(',').map(t => t.trim());
    };

    return (
        <NewsContainer>
            <Header />

            <MainContent>

                {/* FILTRO + BUSCA + PUBLICAR */}
                <FilterSearchRow>
                    <SearchInput
                        placeholder="Buscar no fórum..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="recentes">Mais Recentes</option>
                        <option value="antigas">Mais Antigas</option>
                        <option value="abertas">Discussões Abertas</option>
                        <option value="fechadas">Discussões Fechadas</option>
                    </FilterSelect>

                    {can('forum:create_post') && (
                        <PublishButtonTop onClick={() => setIsModalOpen(true)}>
                            + Nova Publicação
                        </PublishButtonTop>
                    )}

                </FilterSearchRow>

                {/* LISTA DE NOTÍCIAS */}
                {filteredNews.map(item => (
                    <NewsCard key={item.id}>
                        <NewsHeader>
                            <NewsTitle>{item.title}</NewsTitle>
                            <NewsMeta>
                                <span>{new Date(item.created_at).toLocaleString()}</span>
                                <span>Status: {item.status}</span>
                            </NewsMeta>

                            <TagContainer>
                                {parseTags(item.tags).map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagContainer>
                        </NewsHeader>

                        <NewsContent dangerouslySetInnerHTML={{ __html: item.content }} />

                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
                            <OpenDiscussionButton>🔎 Abrir Discussão</OpenDiscussionButton>


                            {can('forum:create_post') && (
                                <DeleteNewsButton onClick={() => handleEditPost(item)}>
                                    ✏️ Editar
                                </DeleteNewsButton>
                            )}
                            {can('forum:delete_any_post') && (
                                <DeleteNewsButton onClick={() => handleDeleteNews(item.id)}>
                                    🗑️ Excluir
                                </DeleteNewsButton>
                            )}


                        </div>
                    </NewsCard>
                ))}

            </MainContent>

            {/* MODAL */}
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>{editingPost ? 'Editar Publicação' : 'Nova Publicação'}</h2>

                        <ForumPostForm
                            initialData={
                                editingPost
                                    ? {
                                        title: editingPost.title,
                                        tags: editingPost.tags,
                                        content: editingPost.content
                                    }
                                    : undefined
                            }
                            isEditing={!!editingPost}
                            onCancel={() => {
                                setIsModalOpen(false);
                                setEditingPost(null);
                            }}
                            onSubmit={async (data) => {

                                if (editingPost) {

                                    await forumService.updatePost(editingPost.id, {
                                        ...data,
                                        status: editingPost.status
                                    });

                                } else {

                                    await forumService.createPost({
                                        ...data,
                                        status: 'aberto'
                                    });

                                }

                                await fetchNews();

                                setIsModalOpen(false);
                                setEditingPost(null);
                            }}
                        />

                    </ModalContent>
                </ModalOverlay>
            )}

            {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
            {isDeleteModalOpen && (
                <ModalOverlay onClick={cancelDeleteNews}>
                    <DeleteConfirmModal onClick={(e) => e.stopPropagation()}>
                        <h3>Confirmar Exclusão</h3>
                        <p>Tem certeza que deseja excluir esta notícia?</p>
                        <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '10px' }}>
                            Esta ação não pode ser desfeita.
                        </p>
                        <DeleteButtonGroup>
                            <CancelDeleteButton onClick={cancelDeleteNews}>
                                Cancelar
                            </CancelDeleteButton>
                            <ConfirmDeleteButton onClick={confirmDeleteNews}>
                                🗑️ Excluir
                            </ConfirmDeleteButton>
                        </DeleteButtonGroup>
                    </DeleteConfirmModal>
                </ModalOverlay>
            )}

            <Footer />
        </NewsContainer>
    );
};

export default ForumHome;

