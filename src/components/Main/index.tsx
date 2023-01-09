import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo do projeto - Boilerplate" />
    <S.Title>BoilerPlate do Galvs</S.Title>
    <S.Description>
      Boilerplate criado com amor e dedicação total de Antônio Galvão.
      Boilerplate conta com projeto em Next.js usando typescript e styled
      componentes, bem como, configurado para testes, prettier, eslint e husky.
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor na frente do computador"
    />
  </S.Wrapper>
)

export default Main
