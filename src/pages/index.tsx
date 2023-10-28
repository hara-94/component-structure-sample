import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export default function Home() {
  return (
    <Container>
      <Link href="/top?template=1">/template1top</Link>
      <Link href="/top?template=2">/template2top</Link>
      <Link href="/top?template=3">/template3top</Link>
      <Link href="/button-list">/button-list</Link>
      <Link href="/modal-list">/modal-list</Link>
    </Container>
  );
}
