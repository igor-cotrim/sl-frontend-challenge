import * as S from "./styled";

type ContentProps = {
  children: React.ReactChild;
};

const Content = ({ children }: ContentProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Content;
