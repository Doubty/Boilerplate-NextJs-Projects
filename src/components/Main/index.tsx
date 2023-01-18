import * as S from './styles'

const Main = ({
  title = 'BoilerPlate do Galvs',
  description = 'Next.js usando typescript e styled componentes, bem como, configurado para testes, prettier, eslint e husky.'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo do projeto - Boilerplate" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor na frente do computador"
    />
  </S.Wrapper>
)

export default Main
