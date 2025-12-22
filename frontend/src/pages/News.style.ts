
import styled from '@emotion/styled';

export const NewsContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f5f7fa;
    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
`;

/* ------------------- FILTRO + BUSCA + PUBLICAR ------------------- */
export const FilterSearchRow = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #d8d8d8;
    font-size: 15px;
    background: #fff;
`;

export const FilterSelect = styled.select`
    padding: 12px;
    border-radius: 10px;
    font-size: 15px;
    border: 1px solid #d8d8d8;
`;

export const PublishButtonTop = styled.button`
    background: #4f46e5;
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #4338ca;
    }
`;

/* --------------------- CARDS DE NOTÍCIAS ------------------------ */
export const NewsCard = styled.div`
    background: #ffffff;
    padding: 25px;
    border-radius: 16px;
    margin-bottom: 25px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.05);
    transition: 0.3s;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 12px 26px rgba(0, 0, 0, 0.08);
    }
`;

export const NewsHeader = styled.div`
    margin-bottom: 20px;
`;

export const NewsTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #1e293b;
`;

export const NewsMeta = styled.div`
    font-size: 13px;
    color: #64748b;
    display: flex;
    gap: 10px;
`;

export const TagContainer = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const Tag = styled.span`
    background: #e0e7ff;
    color: #4338ca;
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 12px;
`;

export const NewsContent = styled.div`
    margin-top: 15px;
    line-height: 1.7;
    color: #334155;
`;

export const OpenDiscussionButton = styled.button`
    background: transparent;
    border: 1px solid #4f46e5;
    color: #4f46e5;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #4f46e5;
        color: #fff;
    }
`;

export const DeleteNewsButton = styled.button`
    background: transparent;
    border: 1px solid #dc2626;
    color: #dc2626;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #dc2626;
        color: #fff;
    }
`;

/* --------------------------- MODAL ----------------------------- */
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 30px;
    width: 600px;
    border-radius: 18px;
`;

export const DeleteConfirmModal = styled.div`
    background: #fff;
    padding: 30px;
    width: 400px;
    border-radius: 18px;
    text-align: center;

    h3 {
        margin: 0 0 15px 0;
        color: #1e293b;
        font-size: 20px;
    }

    p {
        margin: 0 0 10px 0;
        color: #374151;
        font-size: 16px;
        line-height: 1.5;
    }
`;

export const DeleteButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
`;

export const CancelDeleteButton = styled.button`
    background: #e5e7eb;
    color: #374151;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
        background: #d1d5db;
    }
`;

export const ConfirmDeleteButton = styled.button`
    background: #dc2626;
    color: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
        background: #b91c1c;
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #d1d5db;
    font-size: 14px;
`;

export const EditorContainer = styled.div`
    .ql-container {
        min-height: 180px;
        border-radius: 10px;
        border: 1px solid #d1d5db;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
`;

export const CancelButton = styled.button`
    background: #e5e7eb;
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 500;
`;

export const PublishButton = styled.button`
    background: #4f46e5;
    color: white;
    padding: 10px 18px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
`;

/* ------------------ FIM DO ARQUIVO News.style.ts ------------------ */