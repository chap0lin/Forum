import { useState, useEffect } from 'react';
import RichTextEditor from '../components/RichTextEditor';
import {
  FormContainer,
  FieldGroup,
  Label,
  Input,
  Actions,
  CancelButton,
  SubmitButton,
} from '../../forum/components/ForumPostForm.styles';


type ForumPostFormData = {
  title: string;
  tags: string;
  content: string;
};

type Props = {
  initialData?: ForumPostFormData;
  onSubmit: (data: ForumPostFormData) => Promise<void>;
  onCancel: () => void;
  isEditing?: boolean;
};

const ForumPostForm = ({
  initialData,
  onSubmit,
  onCancel,
  isEditing = false
}: Props) => {

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setTags(initialData.tags);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Preencha título e conteúdo');
      return;
    }

    try {
      setLoading(true);

      await onSubmit({
        title,
        tags,
        content
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormContainer>

        <FieldGroup>
          <Label>Título</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título da publicação"
          />
        </FieldGroup>

        <FieldGroup>
          <Label>Tags</Label>
          <Input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Ex: Brasil, Política"
          />
        </FieldGroup>

        <FieldGroup>
          <Label>Conteúdo</Label>
          <RichTextEditor
            value={content}
            onChange={setContent}
          />
        </FieldGroup>

        <Actions>
          <CancelButton onClick={onCancel}>
            Cancelar
          </CancelButton>

          <SubmitButton onClick={handleSubmit} disabled={loading}>
            {loading
              ? 'Salvando...'
              : isEditing
                ? 'Salvar alterações'
                : 'Publicar'}
          </SubmitButton>
        </Actions>

      </FormContainer>

    </>
  );
};

export default ForumPostForm;
