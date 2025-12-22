
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
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
    InputGroup,
    Label,
    StyledInput,
    EditorContainer,
    ButtonGroup,
    CancelButton,
    PublishButton
} from './News.style';

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }]
    ]
};

const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image', 'video', 'color', 'background', 'align'
];

interface NewsItem {
    id: number;
    title: string;
    content: string;
    tags: string;
    created_at: string;
    status: string; // aberto / fechado
}

const News = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newsToDelete, setNewsToDelete] = useState<number | null>(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('recentes');

    const fetchNews = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/news`);
            setNews(response.data.data);
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

    const handlePublish = async () => {
        if (!title.trim() || !content.trim()) {
            alert('Preencha o título e o conteúdo.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/news', {
                title,
                content,
                tags,
                status: 'aberto'
            });

            fetchNews();
            setIsModalOpen(false);
            setTitle('');
            setTags('');
            setContent('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteNews = (newsId: number) => {
        setNewsToDelete(newsId);
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteNews = async () => {
        if (newsToDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/news/${newsToDelete}`);
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

                    <PublishButtonTop onClick={() => setIsModalOpen(true)}>
                        + Nova Publicação
                    </PublishButtonTop>
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
                            <DeleteNewsButton onClick={() => handleDeleteNews(item.id)}>
                                🗑️ Excluir
                            </DeleteNewsButton>
                        </div>
                    </NewsCard>
                ))}

            </MainContent>

            {/* MODAL */}
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>Nova Publicação</h2>

                        <InputGroup>
                            <Label>Título</Label>
                            <StyledInput
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Título da publicação"
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Tags</Label>
                            <StyledInput
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                placeholder="Ex: Brasil, Governo, Política"
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Conteúdo</Label>
                            <EditorContainer>
                                <ReactQuill
                                    value={content}
                                    onChange={setContent}
                                    modules={modules}
                                    formats={formats}
                                />
                            </EditorContainer>
                        </InputGroup>

                        <ButtonGroup>
                            <CancelButton onClick={() => setIsModalOpen(false)}>Cancelar</CancelButton>
                            <PublishButton onClick={handlePublish}>Publicar</PublishButton>
                        </ButtonGroup>
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

export default News;

// ------------------ FIM DO ARQUIVO ------------------