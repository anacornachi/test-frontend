import Headline from '@components/Headline';
import Container from 'src/layout/Container';

export default function Home() {
  return (
    <Container py={{base: '40px', md: '100px'}}>
      <Headline
        title="Listagem de usuários"
        description="Escolha um cliente para visualizar os detalhes"
        button="Novo cliente"
      />
    </Container>
  );
}
